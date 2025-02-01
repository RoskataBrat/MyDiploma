import React, { useEffect, useState } from "react";
import "../styles/Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:5000/admin/orders");
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const updateOrderStatus = async (id, status) => {
    try {
      const response = await fetch(`http://localhost:5000/admin/orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        fetchOrders(); // Refresh the order list
      } else {
        console.error("Failed to update order status");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id?.toString().includes(searchTerm)
  );

  return (
    <div className="orders-container">
      <h2>Order List</h2>
      <div className="orders-summary">
        <div className="summary-card pending">
          {orders.filter((order) => order.status === "Pending").length} Pending Orders
        </div>
        <div className="summary-card completed">
          {orders.filter((order) => order.status === "Completed").length} Completed Orders
        </div>
        <div className="summary-card blocked">
          {orders.filter((order) => order.status === "Blocked").length} Blocked Orders
        </div>
      </div>
      <div className="orders-filters">
        <input
          type="text"
          placeholder="Search by ID / Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="orders-table">
        <thead>
          <tr>
            <th>UID</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order._id}>
              <td>#{order._id}</td>
              <td>{order.customerName}</td>
              <td>{order.items.map((item) => item.name).join(", ")}</td>
              <td>${order.total}</td>
              <td>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
              <td>{new Date(order.date).toLocaleString()}</td>
              <td>
                <button onClick={() => updateOrderStatus(order._id, "Completed")}>
                  Complete
                </button>
                <button onClick={() => updateOrderStatus(order._id, "Blocked")}>
                  Block
                </button>
                <button onClick={() => alert(`Viewing Order #${order._id}`)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
