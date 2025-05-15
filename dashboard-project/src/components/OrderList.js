import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/OrderList.css"; // Ensure the CSS file is correctly linked
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const OrderList = () => {
  const [orders, setOrders] = useState([]); // Stores the orders
  const [error, setError] = useState(""); // For error messages
  const [loading, setLoading] = useState(false); // For button loading states

  // Fetch orders on mount
  const fetchOrders = async () => {
    try {
      const response = await axios.get("https://my-diploma-backend.vercel.app/api/orders");
      if (response.data && Array.isArray(response.data)) {
        setOrders(response.data); // Set orders if valid data is received
      } else {
        setError("Няма намерени валидни поръчки.");
      }
    } catch (err) {
      setError("Грешка със свързването на поръчките: " + err.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Handle status change
  const handleStatusChange = async (id, newStatus) => {
    try {
      const updatedOrder = { status: newStatus };
      const response = await axios.put(`https://my-diploma-backend.vercel.app/api/orders/${id}`, updatedOrder);
      console.log(response.data); // Log the response

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === id ? { ...order, status: newStatus } : order
        )
      );
    } catch (err) {
      console.error("Грешка при обновяване на статуса на поръчката:", err.response || err.message);
      setError("Неуспешно обновяване на статуса на поръчката. Моля опитайте отново.");
    }
  };

  // Handle order deletion
  const handleDeleteOrder = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`https://my-diploma-backend.vercel.app/api/orders/${id}`);
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== id));
    } catch (err) {
      console.error("Грешка при изтриване на поръчката:", err.message);
      setError("Неуспешно изтриване на поръчката. Моля опитайте отново.");
    } finally {
      setLoading(false);
    }
  };

  // Categorize orders by status
  const completedOrders = orders.filter(order => order.status === "Завършена");
  const blockedOrders = orders.filter(order => order.status === "Блокирана");
  const activeOrders = orders.filter(order => order.status !== "Завършена" && order.status !== "Блокирана");

  // Pie chart data
  const pieData = [
    { name: "Завършени", value: completedOrders.length },
    { name: "Блокирани", value: blockedOrders.length },
    { name: "Активни", value: activeOrders.length },
  ];

  const COLORS = ["#0088FE", "#FF8042", "#00C49F"];

  // Error handling and empty state
  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  return (
    <div className="order-list-container">
      <h1>Списък с поръчки</h1>

      <div className="chart-container" style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <PieChart width={300} height={300}>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius="80%"
            fill="#8884d8"
            dataKey="value"
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      <div className="status-sections">
        <div className="section">
          <h2>Активни поръчки</h2>
          {activeOrders.length > 0 ? (
            <table className="order-list-table">
              <thead>
                <tr>
                  <th>ID на поръчка</th>
                  <th>Име на клиент</th>
                  <th>Имейл адрес</th>
                  <th>Продукти</th>
                  <th>Цена</th>
                  {/*<th>Статус</th>*/}
                  <th>Опции</th>
                </tr>
              </thead>
              <tbody>
                {activeOrders.map((order) => (
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
                        "Няма продукти"
                      )}
                    </td>
                    <td>
                      {order.items && order.items.length > 0 ? (
                        <ul>
                          {order.items.map((product, index) => (
                            <li key={index}>{product.price + "лв."}</li>
                          ))}
                        </ul>
                      ) : (
                        "Няма цени"
                      )}
                    </td>
                    {/*<td>{order.status}</td>*/}
                    <td>
                      <button
                        className="view-button"
                        disabled={loading}
                        onClick={() => handleStatusChange(order._id, "Завършена")}
                      >
                        Завърши
                      </button>
                      <button
                        className="edit-button"
                        disabled={loading}
                        onClick={() => handleStatusChange(order._id, "Блокирана")}
                      >
                        Блокирай
                      </button>
                      <button
                        className="delete-button"
                        disabled={loading}
                        onClick={() => handleDeleteOrder(order._id)}
                      >
                        Изтрий
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Няма активни поръчки</p>
          )}
        </div>

        <div className="section">
          <h2>Завършени поръчки</h2>
          {completedOrders.length > 0 ? (
            <ul>
              {completedOrders.map(order => (
                <li key={order._id}>{order.customerName} - {order.status}</li>
              ))}
            </ul>
          ) : (
            <p>Няма завършени поръчки.</p>
          )}
        </div>

        <div className="section">
          <h2>Блокирани поръчки</h2>
          {blockedOrders.length > 0 ? (
            <ul>
              {blockedOrders.map(order => (
                <li key={order._id}>{order.customerName} - {order.status}</li>
              ))}
            </ul>
          ) : (
            <p>Няма блокирани поръчки.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderList;



