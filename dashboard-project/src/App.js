import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./styles/App.css";
import Products from "./components/Products";
import Orders from "./components/Orders";
import Messages from "./components/Messages";
import Notifications from "./components/Notifications";
import { ThemeProvider } from "./ThemeContext";
import AdminOrders from "./AdminOrders";
import OrderList from "./components/OrderList";
import ProductList from "./components/ProductList";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import axios from "axios";
import user from "./user.webp";
  


const DashboardCards = ({ stats }) => {
  return (
    <div className="cards-container">
      <div className="card">
        <div className="icon">👤</div>
        <h3>Потребители</h3>
        <p>{stats.totalUsers || 0}</p>
      </div>
      <div className="card">
        <div className="icon">🛒</div>
        <h3>Поръчки</h3>
        <p>{stats.totalOrders || 0}</p>
      </div>
      <div className="card">
        <div className="icon">💰</div>
        <h3>Продажби</h3>
        <p>${stats.totalSales?.toLocaleString() || "0.00"}</p>
      </div>
    </div>
  );
};

const DashboardCharts = ({ stats }) => {
  const chartStyles = {
    marginBottom: "30px",
  };
 

  return (
    <div className="charts-container">
      {/* Total Users Chart */}
      <div style={chartStyles}>
        <h3>Потребители</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={[{ name: "Users", value: stats.totalUsers }]} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Total Orders Chart */}
      <div style={chartStyles}>
        <h3>Поръчки</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={[{ name: "Orders", value: stats.totalOrders }]} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Total Sales Chart */}
      <div style={chartStyles}>
        <h3>Продажби</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={[{ name: "Sales", value: stats.totalSales }]} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

function App() {
  const [stats, setStats] = useState({ totalUsers: 0, totalOrders: 0, totalSales: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/orders");
        const orders = response.data;

        if (Array.isArray(orders)) {
          const uniqueUsers = new Set(orders.map((order) => order.email)).size;
          const totalOrders = orders.length;
          const totalSales = orders.reduce(
            (sum, order) =>
              sum +
              order.items.reduce((itemSum, item) => itemSum + (item.price || 0), 0),
            0
          );

          setStats({ totalUsers: uniqueUsers, totalOrders, totalSales });
        }
      } catch (err) {
        console.error("Error fetching orders for statistics:", err.message);
      }
    };

    fetchOrders();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/logout");
      if (response.status === 200) {
        window.location.href = response.data.redirect;
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
      <ThemeProvider>
        <Sidebar />
        <Routes>
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/productList" element={<ProductList />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/orderList" element={<OrderList />} />
          <Route exact path="/messages" element={<Messages />} />
          <Route exact path="/notifications" element={<Notifications />} />
        </Routes>
      </ThemeProvider>

      <main>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", borderBottom: "1px solid #ddd" }}>
          {/*<div className="search-bar" style={{ flex: 1 }}>
            <input type="text" placeholder="Search..." style={{ padding: "8px", width: "100%", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>*/}
          <div className="profile" style={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: "20px" }}>
            <img src={user} alt="profile" style={{ borderRadius: "50%", width: "70px", height: "40px" }} />
            <span>Администратора</span>
          </div>
          <button className="logout-button" onClick={handleLogout} style={{ padding: "10px 15px", backgroundColor: "#ff4d4f", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", marginLeft: "20px" }}>
            Излез
          </button>
        </header>

        <DashboardCards stats={stats} />
        <DashboardCharts stats={stats} />
      </main>
    </div>
  );
}

export default App;


