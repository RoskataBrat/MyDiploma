const express = require("express");
const {
    getOrders,
    createOrder,
    updateOrderStatus,
    deleteOrder,
} = require("../controllers/adminController");
const { verifyAdminToken } = require('../middlewares/authMiddleware'); // Keep this
const Order = require('../models/Order'); // Assuming you're using Mongoose

const authenticateAdmin = require("../middlewares/authenticateAdmin");
const isAdmin = require("../middlewares/isAdmin");

const router = express.Router();

// Apply isAdmin middleware to all routes in this router
router.use(isAdmin);

// Get all orders
router.get('/orders', verifyAdminToken, async (req, res) => {
    try {
        const orders = await Order.find(); // Fetch all orders
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error.message);
        res.status(500).json({ message: 'Failed to fetch orders' });
    }
});

// Create a new order
router.post("/orders", verifyAdminToken, createOrder);

// Update order status
router.patch("/orders/:id", verifyAdminToken, updateOrderStatus);

// Delete an order
router.delete("/orders/:id", verifyAdminToken, deleteOrder);

// Endpoint to Get All Orders (alternative implementation)
router.get("/api/admin/orders", authenticateAdmin, async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json({ orders });
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ error: "Error fetching orders: " + error.message });
    }
});

// Additional route for creating an order (if needed)
router.post("/api/admin/orders", async (req, res) => {
    try {
        const orders = await Order.find(); // Adjust logic as needed
        res.status(200).json({ orders });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch admin orders: " + error.message });
    }
});

module.exports = router;
