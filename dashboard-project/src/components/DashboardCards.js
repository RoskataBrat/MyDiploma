import React from "react";
import "../styles/Dashboard.css";

const DashboardCards = () => {
  const cards = [
    { title: "Total Users", value: "277", progress: "+95% Last Month", color: "green", icon: "👤" },
    { title: "Total Orders", value: "338", progress: "+30% Last Month", color: "purple", icon: "🛒" },
    { title: "Total Products", value: "557", progress: "+25% Last Month", color: "blue", icon: "📦" },
    { title: "Total Reviews", value: "166", progress: "+45% Last Month", color: "yellow", icon: "⭐" },
    { title: "Total Sales", value: "$3,787,681.00", progress: "+40.63% Last Month", color: "blue", icon: "💰" },
  ];

  return (
    <div className="dashboard">
      <div className="card-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="icon" style={{ color: card.color }}>{card.icon}</div>
            <div className="title">{card.title}</div>
            <div className="value">{card.value}</div>
            <div className="progress">{card.progress}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
