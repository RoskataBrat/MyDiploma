import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import HomeBanner from "../../Components/HomeBanner";
import HomeCat from "../../Components/HomeCat";
import FeaturedProducts from "../../Components/FeaturedProducts";
import Subscribe from "../../Components/Subscribe";
import iphone from "../../assets/images/iphone.jpg";
import razer from "../../assets/images/razer.jpg";
import lenovo_thinkbook from "../../assets/images/lenovo_thinkbook.jpg";
import samsungA54 from "../../assets/images/samsungA54.jpg";
import tshirt_gucci from "../../assets/images/tshirt_gucci.webp";
import "../../Components/ProductData";
import FavoriteProducts from "../../Components/FavoriteProducts";
import TrendProducts from "../../Components/TrendProducts";

const Home = ({ user, signOut }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const navigate = useNavigate(); // Initialize navigation

  const featuredProducts = [
    {
      id: 1,
      title: "Lenovo ThinkBook",
      description: "В наличност",
      price: "450.00 лв.",
      image: lenovo_thinkbook,
      slug: "laptop_Lenovo", // Add slug for navigation
    },
    {
      id: 2,
      title: "Тениска Gucci",
      description: "В наличност",
      price: "60.00 лв.",
      image: tshirt_gucci,
      slug: "gucci",
    },
    {
      id: 3,
      title: "Смартфон Samsung A54",
      description: "В наличност",
      price: "250.00 лв.",
      image: samsungA54,
      slug: "samsung-a54",
    },
  ];

  return (
    <>
      <HomeBanner />
      {!<HomeCat />}
      <FavoriteProducts></FavoriteProducts>
      <FeaturedProducts />
      <TrendProducts></TrendProducts>

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
              onClick={() => navigate(`/product/${product.slug}`)} // Navigate to the product page
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

      {!<Subscribe />}
    </>
  );
};

export default Home;

