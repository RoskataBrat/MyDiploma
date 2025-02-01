import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
import { useTheme } from "../ThemeContext";

const Sidebar = () => {
  const { theme, toggleTheme, notifications } = useTheme();

  return (
    <div className={`sidebar ${theme}`}>
      <h1 className="sidebar-logo">HOTASH</h1>
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/orderList">Orders</Link>
        </li>
        <li>
          <Link to="/messages">Messages</Link> {/* Link to Messages */}
        </li>
        <li>
          <Link to="/notifications">
            Notifications <span className="sidebar-badge">{notifications.length}</span>
          </Link>
        </li>
      </ul>
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {theme === "light" ? "Switch to Dark" : "Switch to Light"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
