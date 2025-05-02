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
const Comment = require("./models/Comment");
const Rating = require("./models/Rating");

// File Path for product data (if needed for file-based handling)
const filePath = path.join(__dirname, "../auth-backend/data/ProductData");

// === Product Routes ===

// Дефинирайте рут за главния маршрут
app.get('/', (req, res) => {
  res.send('Сървърът работи успешно!');
});

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

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    // Success response
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during signup:", error.message); // Log the error
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

    // Check if the user is an admin
    const isAdmin = email === "admin@example.com";

    const token = jwt.sign(
      { id: user._id, email: user.email, isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user._id, email: user.email, isAdmin },
    });
  } catch (error) {
    console.error("Error during signin:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Logout route
app.post("/api/auth/logout", (req, res) => {
  try {
    // Clear the token or session (if applicable)
    // Assuming token-based authentication, token invalidation would happen on the client side.
    
    res.status(200).json({
      message: "Logged out successfully",
      redirect: "http://localhost:3000", // Redirect URL
    });
  } catch (error) {
    console.error("Error during logout:", error.message);
    res.status(500).json({ message: "Internal server error during logout" });
  }
});


// === Order Routes ===
app.get("/api/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    res.status(500).json({ message: "Server error while fetching orders." });
  }
});

app.post("/api/orders", async (req, res) => {
  const { customerName, email, address, phone, items, total } = req.body;

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "Items must be a non-empty array." });
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
    res.status(201).json({ message: "Order created successfully", orderId: newOrder._id });
  } catch (error) {
    console.error("Error creating order:", error.message);
    res.status(500).json({ error: "Server error while creating order." });
  }
});


app.put('/api/orders/:id', async (req, res) => {
  const orderId = req.params.id;
  const { status } = req.body;

  try {
      // Ensure orderId and status are valid
      if (!orderId || !status) {
          return res.status(400).json({ message: 'Invalid input' });
      }

      // Update order in the database
      const result = await Order.updateOne(
          { _id: orderId },
          { $set: { status: status } }
      );

      if (result.modifiedCount === 0) {
          return res.status(404).json({ message: 'Order not found' });
      }

      res.status(200).json({ message: 'Order status updated successfully' });
  } catch (error) {
      console.error('Error updating order:', error);
      res.status(500).json({ message: 'Failed to update order status' });
  }
});



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

// === Subscription Routes ===

// Schema for subscriptions
const subscriptionSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  dateSubscribed: { type: Date, default: Date.now },
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

// Subscribe Route
app.post("/api/subscribe", async (req, res) => {
  const { email } = req.body;

  // Validate email
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ message: "Invalid email address." });
  }

  try {
    // Check if email is already subscribed
    const existingSubscription = await Subscription.findOne({ email });
    if (existingSubscription) {
      return res.status(409).json({ message: "Email is already subscribed." });
    }

    // Save new subscription
    const newSubscription = new Subscription({ email });
    await newSubscription.save();

    res.status(201).json({ message: "Subscription successful!" });
  } catch (error) {
    console.error("Error during subscription:", error.message);
    res.status(500).json({ message: "Server error while processing subscription." });
  }
});

// Fetch all subscriptions (Optional for Admin)
app.get("/api/subscriptions", async (req, res) => {
  try {
    const subscriptions = await Subscription.find();
    res.status(200).json(subscriptions);
  } catch (error) {
    console.error("Error fetching subscriptions:", error.message);
    res.status(500).json({ message: "Server error while fetching subscriptions." });
  }
});

// Middleware to verify JWT token
const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access denied, no token provided." });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token." });
    req.user = user;
    next();
  });
};

// Add a comment
app.post("/api/comments", authenticateUser, async (req, res) => {
  const { productId, comment } = req.body;

  if (!productId || !comment) {
    return res.status(400).json({ message: "Product ID and comment are required." });
  }

  try {
    const newComment = new Comment({ userId: req.user.id, productId, comment });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ message: "Server error while adding comment." });
  }
});

// Add a rating
app.post("/api/ratings", authenticateUser, async (req, res) => {
  const { productId, rating } = req.body;

  if (!productId || !rating || rating < 1 || rating > 5) {
    return res.status(400).json({ message: "Product ID and valid rating are required." });
  }

  try {
    const existingRating = await Rating.findOne({ userId: req.user.id, productId });
    if (existingRating) {
      return res.status(409).json({ message: "You have already rated this product." });
    }

    const newRating = new Rating({ userId: req.user.id, productId, rating });
    await newRating.save();
    res.status(201).json(newRating);
  } catch (error) {
    console.error("Error adding rating:", error);
    res.status(500).json({ message: "Server error while adding rating." });
  }
});

app.post("/test", async (req, res) => {
  try {
    console.log("Request received:", req.body);
    res.status(200).json({ message: "Test route is working!" });
  } catch (error) {
    console.error("Test route error:", error);
    res.status(500).json({ error: "Test route failed" });
  }
});



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));