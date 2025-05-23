import React, { useState,useContext,useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { TfiFullscreen } from "react-icons/tfi";
import "../../styles/Electronics.css";
import laptop_acer from "../../assets/images/acer_laptop.jpg";
import laptop_hp from "../../assets/images/laptop.png";
import laptop_apple from "../../assets/images/macbookAir15.jpg";
import laptop_asus from "../../assets/images/asus_vivobook.jpg";
import laptop_lenovo from "../../assets/images/lenovo_thinkbook.jpg";
import { MyContext } from "../../App";

const Laptops = () => {
  const navigate = useNavigate();
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const { toggleLikeProduct, likedProducts } = useContext(MyContext); // Access context here

  const products = [
    { id: 1, name: "Acer", brand: "Acer", price: 299, slug: "laptop_Acer", image: laptop_acer },
    { id: 2, name: "Lenovo", brand: "Lenovo", price: 450, slug: "laptop_Lenovo", image: laptop_lenovo },
    { id: 3, name: "Apple", brand: "Apple", price: 199, slug: "laptop_Apple", image: laptop_apple },
    { id: 4, name: "Asus", brand: "Asus", price: 800, slug: "laptop_ASUS", image: laptop_asus },
    { id: 5, name: "HP", brand: "HP", price: 199, slug: "laptop_HP", image: laptop_hp },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category) // Remove category
        : [...prev, category] // Add category
    );
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    const newPriceRange = [...priceRange];
    newPriceRange[name === "min" ? 0 : 1] = Number(value);

    // Ensure the minimum value is not greater than the maximum
    if (newPriceRange[0] > newPriceRange[1]) {
      newPriceRange[0] = newPriceRange[1];
    }

    setPriceRange(newPriceRange);
  };

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategories.length === 0 || selectedCategories.includes(product.brand)) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
  );

  const viewProductDetails = (slug) => {
    navigate(`/product/${slug}`); // Navigate to the product details page
  };

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  return (
    <div className="electronics-page">
      {/* Sidebar Filters */}
      <div className="filters">
        <div className="filter-section">
          <h4>Brands:</h4>
          <label>
            <input
              type="checkbox"
              value="Acer"
              onChange={() => handleCategoryChange("Acer")}
              checked={selectedCategories.includes("Acer")}
            />
            Acer
          </label>
          <label>
            <input
              type="checkbox"
              value="Lenovo"
              onChange={() => handleCategoryChange("Lenovo")}
              checked={selectedCategories.includes("Lenovo")}
            />
            Lenovo
          </label>
          <label>
            <input
              type="checkbox"
              value="Apple"
              onChange={() => handleCategoryChange("Apple")}
              checked={selectedCategories.includes("Apple")}
            />
            Apple
          </label>
          <label>
            <input
              type="checkbox"
              value="Asus"
              onChange={() => handleCategoryChange("Asus")}
              checked={selectedCategories.includes("Asus")}
            />
            Asus
          </label>
          <label>
            <input
              type="checkbox"
              value="HP"
              onChange={() => handleCategoryChange("HP")}
              checked={selectedCategories.includes("HP")}
            />
            HP
          </label>
        </div>
        <div className="price-filter">
            <label className="slider-label">Ценнови диапазон:</label>
            <div className="price-slider-container">
              <input
                type="range"
                name="min"
                value={priceRange[0]}
                onChange={handlePriceChange}
                min="0"
                max="2000"
                className="slider slider-min"
              />
              <input
                type="range"
                name="max"
                value={priceRange[1]}
                onChange={handlePriceChange}
                min="0"
                max="2000"
                className="slider slider-max"
              />
              <div className="slider-track"></div>
              <div
                className="slider-range"
                style={{
                  left: `${(priceRange[0] / 2000) * 100}%`,
                  right: `${100 - (priceRange[1] / 2000) * 100}%`,
                }}
              ></div>
            </div>
            <div className="price-display">
              <span>{priceRange[0]} лв</span> - <span>{priceRange[1]} лв</span>
            </div>
          </div>
      </div>

      {/* Products */}
      <div className="product-container">
        {filteredProducts.map((product) => {
           const isLiked = likedProducts.some((p) => p.id === product.id); // Check if product is liked
           return(
          <div key={product.id} className="item productItem2" onClick={() => viewProductDetails(product.slug)}>
            <div className="imgWrapper">
              <img src={product.image} alt={product.name} />
              <span className="badge badge-primary">28%</span>
              <div className="actions">
                <Button onClick={() => viewProductDetails(product.slug)}>
                  <TfiFullscreen />
                </Button>
                <Button onClick={() => toggleLikeProduct(product)}>
                  <IoMdHeartEmpty
                    style={{
                    fontSize: "20px",
                    color: isLiked ? "red" : "black", // Change color if liked
                    }}
                  />
                </Button>
              </div>
            </div>
            <div className="info">
              <h4>{product.name}</h4>
              <span className="text-success">В наличност</span>
              <div className="d-flex">
                <span className="oldPrice">{product.price + 100}.00 лв.</span>
                <span className="netPrice text-danger ml-2">{product.price}.00 лв.</span>
              </div>
            </div>
          </div>
        )})}
      </div>
    </div>
  );
};

export default Laptops;
