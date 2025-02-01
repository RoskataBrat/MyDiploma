import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { IoMdHeartEmpty } from "react-icons/io";
import { TfiFullscreen } from "react-icons/tfi";
import "../../Pages/Electronics.css";
import iphone from "../../assets/images/iphone.jpg";
import laptop from "../../assets/images/laptop.png";
import razer from "../../assets/images/razer.jpg";
import banan from "../../assets/images/banan.png";
import ProductModal from "../ProductModal";

const Mobiles = () => {
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);

  const products = [
    { id: 1, name: "iPhone", category: "smartphone", price: 899, image: banan },
    { id: 2, name: "Laptop", category: "laptop", price: 1200, image: laptop },
    { id: 3, name: "Gaming PC", category: "pc", price: 1500, image: laptop },
    { id: 4, name: "Wireless Mouse", category: "accessories", price: 25, image: iphone },
    { id: 5, name: "Samsung A25", category: "smartphone", price: 250, image: iphone },
    { id: 6, name: "Razer", category: "accessories", price: 50, image: razer },
  ];

  const viewProductDetails = (id) => {
    setisOpenProductModal(true);
  };

  const closeProductModal = () => {
    setisOpenProductModal(false);
  };

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
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
  );

  return (
    <>
      <div className="electronics-page">
        {/* Sidebar Filters */}
        <div className="filters">
          <div>
            <div className="filter-section">
              <h4>Categories:</h4>
              <label>
                <input
                  type="checkbox"
                  value="all"
                  onChange={() => handleCategoryChange("all")}
                  checked={selectedCategories.includes("all")}
                />
                All
              </label>
              <label>
                <input
                  type="checkbox"
                  value="smartphone"
                  onChange={() => handleCategoryChange("smartphone")}
                  checked={selectedCategories.includes("smartphone")}
                />
                Smartphones
              </label>
              <label>
                <input
                  type="checkbox"
                  value="laptop"
                  onChange={() => handleCategoryChange("laptop")}
                  checked={selectedCategories.includes("laptop")}
                />
                Laptops
              </label>
              <label>
                <input
                  type="checkbox"
                  value="pc"
                  onChange={() => handleCategoryChange("pc")}
                  checked={selectedCategories.includes("pc")}
                />
                PCs
              </label>
              <label>
                <input
                  type="checkbox"
                  value="accessories"
                  onChange={() => handleCategoryChange("accessories")}
                  checked={selectedCategories.includes("accessories")}
                />
                Accessories
              </label>
            </div>
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
          {filteredProducts.map((product) => (
            <div key={product.id} className="item productItem2">
              <div className="imgWrapper">
                <img src={product.image} alt={product.name} />
                <span className="badge badge-primary">28%</span>
                <div className="actions">
                  <Button onClick={() => viewProductDetails(product.id)}>
                    <TfiFullscreen />
                  </Button>
                  <Button>
                    <IoMdHeartEmpty style={{ fontSize: "20px" }} />
                  </Button>
                </div>
              </div>
              <div className="info">
                <h4>{product.name}</h4>
                <span className="text-success">In Stock</span>
                <div className="d-flex">
                  <span className="oldPrice">${product.price + 100}.00</span>
                  <span className="netPrice text-danger ml-2">${product.price}.00</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpenProductModal && <ProductModal closeProductModal={closeProductModal} />}
    </>
  );
};

export default Mobiles;
