import React, { useState } from "react";
import "../../styles/FeaturedProducts2.css";
import iphone from "../../assets/images/iphone.jpg";
import razer from "../../assets/images/razer.jpg";
import samsungA54 from "../../assets/images/samsungA54.jpg";

const FeaturedProducts2 = () => {
  // State to manage the hovered product details
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // List of featured products
  const featuredProducts = [
    {
      id: 1,
      title: "Wool Runner Go - Fluff",
      description: "Super Soft, Machine Washable",
      image: iphone,
    },
    {
      id: 2,
      title: "Wool Runner Mizzle",
      description: "Weather-Ready, Everyday Trainer",
      image: razer,
    },
    {
      id: 3,
      title: "Runner Go - Corduroy",
      description: "Classically Cozy Organic Cotton",
      image: samsungA54,
    },
  ];

  return (
    <section
      className="featured-products"
      style={{
        padding: "40px 20px",
        position: "relative",
        minHeight: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "30px" }}>
        Our Featured Products
      </h2>
      <div
        className="products-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onMouseEnter={() => setHoveredProduct(product)}
            onMouseLeave={() => setHoveredProduct(null)}
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              width: "300px",
              height: "150px",
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <h4 style={{ margin: "0", fontSize: "16px" }}>{product.title}</h4>
          </div>
        ))}
      </div>

      {/* Dynamic Hover Field */}
      {hoveredProduct && (
        <div
          className="hover-field"
          style={{
            position: "absolute",
            bottom: "50px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "400px",
            height: "200px",
            backgroundImage: `url(${hoveredProduct.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "20px",
            opacity: 1,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <h4 style={{ margin: "0", fontSize: "18px" }}>{hoveredProduct.title}</h4>
          <p style={{ margin: "5px 0 0", fontSize: "14px" }}>{hoveredProduct.description}</p>
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts2;
