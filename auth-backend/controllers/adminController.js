
/**
 * Get all orders (Admin only)
 */
const getOrders = async (req, res) => {
  try {
    // Fetch all orders from the database
    const orders = await Order.find({});

    // Send orders in response
    res.status(200).json({ orders });
  } catch (error) {
    console.error("Error fetching orders:", error);

    // Handle server errors
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

/**
 * Create a new order
 */
const createOrder = async (req, res) => {
  try {
    // Extract data from the request body
    const { customerName, email, address, phone, items, total } = req.body;

    // Create a new order instance
    const newOrder = new Order({
      customerName,
      email,
      address,
      phone,
      items,
      total,
      status: "Pending", // Default status
    });

    // Save the new order to the database
    const savedOrder = await newOrder.save();

    // Return the created order
    res.status(201).json({ order: savedOrder });
  } catch (error) {
    console.error("Error creating order:", error);

    // Handle server errors
    res.status(500).json({ message: "Failed to create order" });
  }
};

/**
 * Update the status of an order
 */
const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Update the order status
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    // If order is not found
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Send the updated order
    res.status(200).json({ order: updatedOrder });
  } catch (error) {
    console.error("Error updating order status:", error);

    // Handle server errors
    res.status(500).json({ message: "Failed to update order status" });
  }
};

/**
 * Delete an order
 */
const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;

    // Delete the order by ID
    const deletedOrder = await Order.findByIdAndDelete(id);

    // If order is not found
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Confirm deletion
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error("Error deleting order:", error);

    // Handle server errors
    res.status(500).json({ message: "Failed to delete order" });
  }
};

module.exports = {
  getOrders,
  createOrder,
  updateOrderStatus,
  deleteOrder,
};
