import React, { useState } from "react";
import HomeBanner from "../../Components/HomeBanner";
import HomeCat from "../../Components/HomeCat";
import FeaturedProducts from "../../Components/FeaturedProducts";
import Subscribe from "../../Components/Subscribe";
import iphone from "../../assets/images/iphone.jpg";
import razer from "../../assets/images/razer.jpg";
import samsungA54 from "../../assets/images/samsungA54.jpg";

const Home = ({ user, signOut }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const featuredProducts = [
    {
      id: 1,
      title: "Wool Runner Go - Fluff",
      description: "Super Soft, Machine Washable",
      price: "$99.99",
      image: iphone,
    },
    {
      id: 2,
      title: "Wool Runner Mizzle",
      description: "Weather-Ready, Everyday Trainer",
      price: "$129.99",
      image: razer,
    },
    {
      id: 3,
      title: "Runner Go - Corduroy",
      description: "Classically Cozy Organic Cotton",
      price: "$79.99",
      image: samsungA54,
    },
  ];

  return (
    <>

      <HomeBanner />
      <HomeCat />
      <FeaturedProducts />

      <section
        className="featured-products"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "40px 20px",
          minHeight: "600px",
          backgroundColor: "rgb(0, 0, 0)",
        }}
      >
        {/* Left Side: Hovered Product Details */}
        <div
          className="product-details"
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "340px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            height: "650px",
          }}
        >
          {hoveredProduct ? (
            <div style={{ textAlign: "center" }}>
              <img
                src={hoveredProduct.image}
                alt={hoveredProduct.title}
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              />
              <h4 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                {hoveredProduct.title}
              </h4>
              <p style={{ fontSize: "1rem", color: "#555" }}>
                {hoveredProduct.description}
              </p>
              <p style={{ fontSize: "3vw", fontWeight: "bold", color: "#000" }}>
                {hoveredProduct.price}
              </p>
            </div>
          ) : (
            <p style={{ color: "black", fontSize: "5vw" }}>Виж нашите оферти</p>
          )}
        </div>

        {/* Right Side: Product Cards */}
        <div
          className="products-container"
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "20px",
          }}
        >
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="product-card"
              style={{
                width: "300px",
                height: "150px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={() => setHoveredProduct(product)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  margin: "0 15px",
                }}
              />
              <div>
                <h4 style={{ fontSize: "1.2rem", margin: "0 0 5px 0" }}>
                  {product.title}
                </h4>
                <p style={{ fontSize: "0.9rem", color: "#555", margin: "0" }}>
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Subscribe />
    </>
  );
};

export default Home;
