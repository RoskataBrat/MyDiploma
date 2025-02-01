import React from "react";
import Sidebar from "./components/Sidebar";
import {Route, Routes} from "react-router-dom";
import "./styles/App.css";
import Products from "./components/Products";
import Orders from "./components/Orders";
import Messages from "./components/Messages";
import Notifications from "./components/Notifications";
import { ThemeProvider } from "./ThemeContext";
import AdminOrders from "./AdminOrders";
import OrderList from "./components/OrderList";
import ProductList from "./components/ProductList";

const DashboardCards = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <div className="icon">👤</div>
        <h3>Total Users</h3>
        <p>277</p>
      </div>
      <div className="card">
        <div className="icon">🛒</div>
        <h3>Total Orders</h3>
        <p>338</p>
      </div>
      <div className="card">
        <div className="icon">💰</div>
        <h3>Total Sales</h3>
        <p>$3,787,681.00</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <ThemeProvider>
        <Sidebar />
        <Routes>
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/productList" element={<ProductList></ProductList>}></Route>
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/orderList" element={<OrderList></OrderList>}></Route>
          <Route exact path="/messages" element={<Messages />} />
          <Route exact path="/notifications" element={<Notifications />} />
        </Routes>
      </ThemeProvider>
    
      
      <main>
        <header>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="profile">
            <img
              src="https://via.placeholder.com/40"
              alt="profile"
            />
            <span>Miron Mahmud</span>
          </div>
        </header>
        <DashboardCards />
      </main>
    </div>
  );
}

export default App;


