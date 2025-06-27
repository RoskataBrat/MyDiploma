import React from "react";
import { useNavigate } from "react-router-dom";
import fproduct1 from "../../assets/images/samsungA54.jpg";
import fproduct2 from "../../assets/images/tshirt_gucci.webp";
import fproduct3 from "../../assets/images/lenovo_thinkbook.jpg";
import on_sell_badge from "../../assets/images/on_sell_badge.png";

const TrendProducts = () => {
  const navigate = useNavigate();

  const favoriteProducts = [
    {
      id: 1,
      title: "Lenovo ThinkBook",
      description: "В наличност",
      price: "450.00 лв.",
      image: fproduct3,
      slug: "laptop_Lenovo",
    },
    {
      id: 2,
      title: "Тениска Gucci",
      description: "В наличност",
      price: "60.00 лв.",
      image: fproduct2,
      slug: "gucci",
    },
    {
      id: 3,
      title: "Смартфон Samsung A54",
      description: "В наличност",
      price: "250.00 лв.",
      image: fproduct1,
      slug: "samsung-a54",
    },
  ];

  return (
    <section className="featured-products">
      <h1 style={{ color: "black", marginBottom: "20px" }}>Любими продукти</h1>
      {favoriteProducts.map((product) => (
        <div
          className="product-card"
          style={{
            backgroundColor: "#ffff",
            position: "relative",
            marginBottom: "20px",
            borderRadius: "8px",
            overflow: "hidden",
            padding: "10px",
          }}
          key={product.id}
        >
          {/* Badge */}
          <img
            src={on_sell_badge}
            alt="On Sale Badge"
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "100px",
              height: "100px",
              zIndex: "10",
            }}
          />
          <div className="product-card-content" style={{ textAlign: "center" }}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <h3 style={{ color: "#000000", marginTop: "15px" }}>{product.title}</h3>
            <p style={{ color: "#000000", margin: "10px 0" }}>{product.description}</p>
            <p style={{ fontWeight: "bold", color: "#000" }}>{product.price}</p>
          </div>
          <div className="product-card-buttons" style={{ textAlign: "center" }}>
            <button
              onClick={() => navigate(`/product/${product.slug}`)}
              style={{
                backgroundColor: "#00000",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Към продукта
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TrendProducts;