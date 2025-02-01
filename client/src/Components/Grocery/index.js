import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { IoMdHeartEmpty } from "react-icons/io";
import { TfiFullscreen } from "react-icons/tfi";
import "../../Pages/Electronics.css";
import iphone from "../../assets/images/iphone.jpg";
import laptop from "../../assets/images/laptop.png";
import razer from "../../assets/images/razer.jpg";
import banan from "../../assets/images/banan.png";
import marula from "../../assets/images/marula.jpg";
import domat from "../../assets/images/domat.jpeg";
import krastavica from "../../assets/images/krastavica.jpg";
import portokal from "../../assets/images/portokal.png";
import qbylka from "../../assets/images/qbylka.jpg";
import ProductModal from "../ProductModal";
import { useNavigate } from "react-router-dom";

const Grocery = () => {
  const navigate = useNavigate();
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);

  const products = [
    { id: 1, name: "Банани", category: "fruits", slug:"banan", price: 899, image: banan },
    { id: 2, name: "Марула", category: "vegetables",slug:"marula", price: 1200, image: marula },
    { id: 3, name: "Домати", category: "vegetables",slug:"domat", price: 1500, image: domat },
    { id: 4, name: "Краставици", category: "vegetables",slug:"krastavica", price: 25, image: krastavica },
    { id: 5, name: "Портокали", category: "fruits",slug:"portokal", price: 250, image: portokal },
    { id: 6, name: "Ябълки", category: "fruits",slug:"qbylka", price: 50, image: qbylka },
  ];

  const viewProductDetails = (slug) => {
    navigate(`/product/${slug}`); // Navigate to the product details page
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
          <div className="filter-section">
            <h4>Categories:</h4>
            <label>
              <input
                type="checkbox"
                value="smartphone"
                onChange={() => handleCategoryChange("fruits")}
                checked={selectedCategories.includes("fruits")}
              />
              Плодове
            </label>
            <label>
              <input
                type="checkbox"
                value="laptop"
                onChange={() => handleCategoryChange("vegetables")}
                checked={selectedCategories.includes("vegetables")}
              />
              Зеленчуци
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
          {filteredProducts.map((product) => (
            <div key={product.id} className="item productItem2">
              <div className="imgWrapper">
                <img src={product.image} alt={product.name} />
                <span className="badge badge-primary">28%</span>
                <div className="actions">
                  <Button onClick={() => viewProductDetails(product.slug)}>
                    <TfiFullscreen />
                  </Button>
                  <Button>
                    <IoMdHeartEmpty style={{ fontSize: "20px" }} />
                  </Button>
                </div>
              </div>
              <div className="info">
                <h4>{product.name}</h4>
                <span className="text-success">В наличност</span>
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

export default Grocery;
