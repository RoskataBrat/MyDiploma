import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
import { useTheme } from "../ThemeContext";

const Sidebar = () => {
  const { theme, toggleTheme, notifications } = useTheme();

  return (
    <div className={`sidebar ${theme}`}>
      <h1 className="sidebar-logo">ADMINSPOT</h1>
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard">Табло за управление</Link>
        </li>
        {/*<li>
          <Link to="/products">Products</Link>
        </li>*/}
        <li>
          <Link to="/orderList">Поръчки</Link>
        </li>
        {/*<li>
          <Link to="/messages">Съобщения</Link>
        </li>*/}
        {/*<li>
          <Link to="/notifications">
            Известия <span className="sidebar-badge">{notifications.length}</span>
          </Link>
        </li>*/}
      </ul>
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {theme === "light" ? "Смени на тъмен екран" : "Смени на светъл екран"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
