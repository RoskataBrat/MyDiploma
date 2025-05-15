import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/AdminOrders.css";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  // Fetch orders from the backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        if (!token) throw new Error("Admin token is missing");

        const response = await fetch("http://localhost:5000/orders", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Attach token
          },
        });

        if (!response.ok) throw new Error("Failed to fetch orders");

        const data = await response.json();
        setOrders(data); // Set fetched orders
        console.log("Orders:", data);
      } catch (error) {
        console.error("Error fetching orders:", error.message);
      }
    };

    fetchOrders();
  }, []);

  // Handle order status update
  const handleStatusUpdate = async (id, status) => {
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) throw new Error("Admin token is missing");

      await axios.put(
        `http://localhost:5000/orders/${id}`,
        { status },
        {
          headers: { Authorization: `Bearer ${token}` }, // Attach token
        }
      );

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === id ? { ...order, status } : order
        )
      );
    } catch (error) {
      console.error("Error updating status:", error.message);
    }
  };

  // Handle order deletion
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) throw new Error("Admin token is missing");

      await axios.delete(`http://localhost:5000/orders/${id}`, {
        headers: { Authorization: `Bearer ${token}` }, // Attach token
      });

      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== id));
    } catch (error) {
      console.error("Error deleting order:", error.message);
    }
  };

  return (
    <div className="admin-orders">
      <h1>Admin Orders</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.customerName}</td>
              <td>
                {order.items
                  .map((item) => `${item.name} (${item.quantity})`)
                  .join(", ")}
              </td>
              <td>${order.total}</td>
              <td>{order.status}</td>
              <td>{new Date(order.date).toLocaleString()}</td>
              <td>
                <button onClick={() => handleStatusUpdate(order._id, "Completed")}>
                  Mark Completed
                </button>
                <button onClick={() => handleStatusUpdate(order._id, "Blocked")}>
                  Block
                </button>
                <button onClick={() => handleDelete(order._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrders;