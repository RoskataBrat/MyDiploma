import React from "react";
import { useNavigate } from "react-router-dom";
import woolRunnerFluff from "../../assets/images/feature1.webp";
import woolRunnerMizzle from "../../assets/images/feature2.webp";
import runnerCorduroy from "../../assets/images/feature3.jpeg";

const FeaturedProducts = () => {
  const navigate = useNavigate();

  return (
    <section className="featured-products">
      <div className="product-card" style={{ backgroundColor: "#0C2220" }}>
        <div className="product-card-content">
          <img src={woolRunnerFluff} alt="Wool Runner Go - Fluff" />
          <h3>Техника до -50%</h3>
          <p>За всички продукти на Samsung,Huawei,Xiaomi</p>
        </div>
        <div className="product-card-buttons">
          <button onClick={() => navigate("/electronics/laptops")}>За работа</button>
          <button onClick={() => navigate("electronics/gaming_laptops")}>Гейминг</button>
        </div>
      </div>

      <div className="product-card" style={{ backgroundColor: "#5B5F7A" }}>
        <div className="product-card-content">
          <img src={woolRunnerMizzle} alt="Wool Runner Mizzle" />
          <h3>Спортни стоки до -20%</h3>
          <p>За всички продукти на Adidas,Nike,Puma</p>
        </div>
        <div className="product-card-buttons">
          <button onClick={() => navigate("fashion/for_man")}>Мъже</button>
          <button onClick={() => navigate("fashion/for_women")}>Жени</button>
        </div>
      </div>

      <div className="product-card" style={{ backgroundColor: "#762C2A" }}>
        <div className="product-card-content">
          <img src={runnerCorduroy} alt="Runner Go - Corduroy" />
          <h3>Хранителни стоки до -10%</h3>
          <p>Произведени от специализирани ферми</p>
        </div>
        <div className="product-card-buttons">
          <button onClick={() => navigate("grocery/discount")}>Оферти на -20%</button>
          <button onClick={() => navigate("grocery/vegetarians")}>За вегетарианци</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
