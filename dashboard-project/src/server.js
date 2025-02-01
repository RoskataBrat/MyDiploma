const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken"); // Ensure you install this package

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware to verify admin token
const verifyAdminToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Missing token" });

  try {
    const decoded = jwt.verify(token, "secret_key"); // Replace with your actual secret key
    if (!decoded.isAdmin) {
      return res.status(403).json({ error: "Unauthorized" });
    }
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid or expired token" });
  }
};

// Define the Order schema
const orderSchema = new mongoose.Schema({
  customerName: String,
  email: String,
  address: String,
  phone: String,
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  total: Number,
  date: { type: Date, default: Date.now },
  status: { type: String, default: "Pending" }, // Default status for new orders
});

// Create the Order model
const Order = mongoose.model("Order", orderSchema);

// Admin route to fetch all orders
app.get("/api/admin/orders", verifyAdminToken, async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    res.status(500).json({ message: "Error fetching orders" });
  }
});

// POST /orders - Create a new order
app.post("/orders", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder); // Respond with the created order
  } catch (error) {
    console.error("Error creating order:", error.message);
    res.status(500).json({ message: "Error creating order" });
  }
});

// PUT /orders/:id - Update order status
app.put("/orders/:id", verifyAdminToken, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedOrder);
  } catch (error) {
    console.error("Error updating order:", error.message);
    res.status(500).json({ message: "Error updating order" });
  }
});

// DELETE /orders/:id - Delete an order
app.delete("/orders/:id", verifyAdminToken, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted" });
  } catch (error) {
    console.error("Error deleting order:", error.message);
    res.status(500).json({ message: "Error deleting order" });
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
