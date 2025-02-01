const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"], // React origins
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  throw new Error("MONGO_URI is not defined. Check your .env file.");
}
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Models
const Order = require("./models/Order");
const User = require("./models/User");
const Product = require("./models/Product");

// File Path for product data (if needed for file-based handling)
const filePath = path.join(__dirname, "../auth-backend/data/ProductData");

// === Product Routes ===

// Add a product (File-based)
app.post("/add-product", (req, res) => {
  const newProduct = req.body;

  if (!newProduct || !newProduct.id || !newProduct.name) {
    return res.status(400).send("Invalid product data.");
  }

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) return res.status(500).send("Error reading the file.");

    const productArrayStart = data.indexOf("const products = [");
    const productArrayEnd = data.lastIndexOf("];");
    const productArrayContent = data.substring(
      productArrayStart + "const products = [".length,
      productArrayEnd
    ).trim();

    let updatedContent = productArrayContent;
    if (updatedContent) updatedContent += ",\n";
    updatedContent += JSON.stringify(newProduct, null, 4);

    const newFileContent =
      data.substring(0, productArrayStart) +
      "const products = [\n" +
      updatedContent +
      "\n];" +
      data.substring(productArrayEnd + "];".length);

    fs.writeFile(filePath, newFileContent, "utf-8", (writeErr) => {
      if (writeErr) return res.status(500).send("Error writing the file.");
      res.status(200).send("Product added successfully!");
    });
  });
});

// Add a product (Database-based)
app.post("/api/products", async (req, res) => {
  const { name, category, price, stock } = req.body;

  if (!name || !category || !price || !stock) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const newProduct = new Product({ name, category, price, stock });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error.message);
    res.status(500).json({ error: "Error creating product." });
  }
});

// Get all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ error: "Error fetching products." });
  }
});

// Update a product
app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const { name, category, price, stock } = req.body;

  if (!name || !category || !price || !stock) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, category, price, stock },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found." });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error.message);
    res.status(500).json({ error: "Error updating product." });
  }
});

// Delete a product
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found." });
    }
    res.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    console.error("Error deleting product:", error.message);
    res.status(500).json({ error: "Error deleting product." });
  }
});

// === Authentication Routes ===
app.post("/api/auth/signup", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during signup:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/auth/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error during signin:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

// === Order Routes ===
// Get all orders
app.get("/api/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    res.status(500).json({ message: "Server error while fetching orders." });
  }
});

// Create a new order
app.post("/api/orders", async (req, res) => {
  const { customerName, email, address, phone, items, total } = req.body;

  if (!customerName || !email || !address || !phone || !items || !total) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const newOrder = new Order({
      customerName,
      email,
      address,
      phone,
      items,
      total,
      status: "Pending",
    });

    await newOrder.save();
    res.status(201).json({ message: "Order created successfully", order: newOrder });
  } catch (error) {
    console.error("Error creating order:", error.message);
    res.status(500).json({ error: "Server error while creating order." });
  }
});

// Update an order
app.put("/api/orders/:id", async (req, res) => {
  const { id } = req.params;
  const { customerName, email, address, phone, items, total, status } = req.body;

  if (!customerName || !email || !address || !phone || !items || !total || !status) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { customerName, email, address, phone, items, total, status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ error: "Order not found." });
    }

    res.status(200).json({ message: "Order updated successfully", order: updatedOrder });
  } catch (error) {
    console.error("Error updating order:", error.message);
    res.status(500).json({ error: "Server error while updating order." });
  }
});

// Delete an order
app.delete("/api/orders/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedOrder = await Order.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({ error: "Order not found." });
    }

    res.status(200).json({ message: "Order deleted successfully." });
  } catch (error) {
    console.error("Error deleting order:", error.message);
    res.status(500).json({ error: "Server error while deleting order." });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

