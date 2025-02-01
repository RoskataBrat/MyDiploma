import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/OrderList.css"; // Ensure the CSS file is correctly linked

const OrderList = () => {
  const [orders, setOrders] = useState([]); // Stores the orders
  const [error, setError] = useState(""); // For error messages

  // Fetch orders on mount
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/orders");
        if (response.data && Array.isArray(response.data)) {
          setOrders(response.data); // Set orders if valid data is received
        } else {
          setError("No valid orders found.");
        }
      } catch (err) {
        setError("Error fetching orders: " + err.message);
      }
    };

    fetchOrders();
  }, []);

  // Handle status change
  const handleStatusChange = async (id, newStatus) => {
    try {
      const updatedOrder = { status: newStatus }; // Prepare updated status payload
      await axios.put(`http://localhost:5000/api/orders/${id}`, updatedOrder); // Update on the server

      // Update the status in the front-end state
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === id ? { ...order, status: newStatus } : order
        )
      );
    } catch (err) {
      console.error("Error updating order status:", err.message);
      setError("Failed to update order status. Please try again.");
    }
  };

  // Handle order deletion
  const handleDeleteOrder = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/orders/${id}`);
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== id));
    } catch (err) {
      console.error("Error deleting order:", err.message);
      setError("Failed to delete order. Please try again.");
    }
  };

  // Error handling and empty state
  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  if (orders.length === 0) {
    return <div>No orders to display.</div>;
  }

  return (
    <div className="order-list-container">
      <h1>Order List</h1>
      <table className="order-list-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Products</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.customerName}</td>
              <td>{order.email}</td>
              <td>
                {order.items && order.items.length > 0 ? (
                  <ul>
                    {order.items.map((product, index) => (
                      <li key={index}>{product.name}</li>
                    ))}
                  </ul>
                ) : (
                  "No products"
                )}
              </td>
              <td>{order.status}</td>
              <td>
                <button
                  className="view-button"
                  onClick={() => handleStatusChange(order._id, "Completed")}
                >
                  Complete
                </button>
                <button
                  className="edit-button"
                  onClick={() => handleStatusChange(order._id, "Blocked")}
                >
                  Block
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteOrder(order._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
