import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { IoMdHeartEmpty } from "react-icons/io";
import { TfiFullscreen } from "react-icons/tfi";
import "../../styles/Electronics.css";
import iphone from "../../assets/images/iphone.jpg";
import laptop from "../../assets/images/laptop.png";
import razer from "../../assets/images/razer.jpg";
import banan from "../../assets/images/banan.png";
import ProductModal from "../ProductModal";
import portfeil from "../../assets/images/portfeil.webp";
import ochila_carera from "../../assets/images/ochila_carera.avif";
import { useNavigate } from "react-router-dom";
import pyteka from "../../assets/images/pyteka.webp";
import dymbeli from "../../assets/images/dymbeli.webp";
import giletka from "../../assets/images/giletka.webp";
import { MyContext } from "../../App";

const Mobiles = () => {
  const navigate = useNavigate();
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);

  const { toggleLikeProduct, likedProducts } = useContext(MyContext); // Access context here

  const products = [
    { id: 1, name: "Портфейл - естествена кожа", category: "portfail",slug:"portfeil", price: 899, image: portfeil },
    { id: 2, name: "Carera - слънчеви очила", category: "glasses",slug:"ochila_carera", price: 1200, image: ochila_carera },
    { id: 3, name: "Gaming PC", category: "pc", price: 1500, image: laptop },
    { id: 4, name: "Пътека за бягане", brand: "Неделя", category: "sport",slug:"pyteka", price: 100, image: pyteka },
    { id: 5, name: "Дъмбели до 30 кг", brand: "Неделя", category: "sport",slug:"dymbeli", price: 120, image: dymbeli },
    { id: 6, name: "Жилетка до 20 кг", brand: "Неделя", category: "sport",slug:"giletka", price: 150, image: giletka },
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
          <div>
            <div className="filter-section">
              <h4>Категории:</h4>
              
              <label>
                <input
                  type="checkbox"
                  value="smartphone"
                  onChange={() => handleCategoryChange("portfail")}
                  checked={selectedCategories.includes("portfail")}
                />
                Аксесоари
              </label>
              <label>
                <input
                  type="checkbox"
                  value="laptop"
                  onChange={() => handleCategoryChange("glasses")}
                  checked={selectedCategories.includes("glasses")}
                />
                Очила
              </label>
              <label>
                <input
                  type="checkbox"
                  value="sport"
                  onChange={() => handleCategoryChange("sport")}
                  checked={selectedCategories.includes("sport")}
                />
                Спортни уреди
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

      {isOpenProductModal && <ProductModal closeProductModal={closeProductModal} />}
    </>
  );
};

export default Mobiles;
