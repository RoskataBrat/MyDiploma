import React, { useState,useContext } from "react";
import { Button } from "react-bootstrap";
import { IoMdHeartEmpty } from "react-icons/io";
import { TfiFullscreen } from "react-icons/tfi";
import "../../styles/Electronics.css";
import tshirt_cklein from "../../assets/images/tshirt_cklein.jpg";
import tshirt_gucci from "../../assets/images/tshirt_gucci.webp";
import hat_flexit_acient from "../../assets/images/hats_flexit_acient.jpg";
import hat_newYork from "../../assets/images/hat_new_york.jpg";
import shoes_nike_gold from "../../assets/images/shoes_nike_gold.jpg";
import shoes_jordan from "../../assets/images/jordan.webp";
import ProductModal from "../ProductModal";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Fashion = () => {
  const navigate = useNavigate();
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);

  const { toggleLikeProduct, likedProducts } = useContext(MyContext); // Access context here

  const products = [
    { id: 1, name: "Тениска - Калвин Клейн  ", brand: "Калвин Клейн",category:"tshirts", slug: "cklein", price: 99, image: tshirt_cklein },
    { id: 2, name: "Тениска - Гучи", brand: "Gucci",category:"tshirts", slug: "gucci", price: 45.0, image: tshirt_gucci },
    { id: 3, name: "Найк", brand: "Nike",category:"shoes", slug: "nikeG", price: 79.99, image: shoes_nike_gold },
    { id: 4, name: "Найк-Джордан", brand: "Nike",category:"shoes", slug: "nikeJ", price: 79.99, image: shoes_jordan },
    { id: 5, name: "Флексит - Шапка", brand: "Флексит",category:"hats", price: 29.0, slug: "hatFlexit", image: hat_flexit_acient },
    { id: 6, name: "Ню Йорк - Шапка", brand: "Ню Йорк",category:"hats", price: 29.0, slug: "hatNewYork", image: hat_newYork },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category) // Remove category
        : [...prev, category] // Add category
    );
  };

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
  );

  const viewProductDetails = (slug) => {
    navigate(`/product/${slug}`); // Navigate to the product details page
  };

  const closeProductModal = () => {
    setisOpenProductModal(false);
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

  return (
    <>
      <div className="electronics-page">
        {/* Sidebar Filters */}
        <div className="filters">
          <div className="filter-section">
            <h4>Категории:</h4>
            <label>
              <input
                type="checkbox"
                value="tshirts"
                onChange={() => handleCategoryChange("tshirts")}
                checked={selectedCategories.includes("tshirts")}
              />
              Тениски
            </label>
            <label>
              <input
                type="checkbox"
                value="jeans"
                onChange={() => handleCategoryChange("jeans")}
                checked={selectedCategories.includes("jeans")}
              />
              Джинси
            </label>
            <label>
              <input
                type="checkbox"
                value="pants"
                onChange={() => handleCategoryChange("pants")}
                checked={selectedCategories.includes("pants")}
              />
              Панталони
            </label>
            <label>
              <input
                type="checkbox"
                value="shoes"
                onChange={() => handleCategoryChange("shoes")}
                checked={selectedCategories.includes("shoes")}
              />
              Обувки
            </label>
            <label>
              <input
                type="checkbox"
                value="hats"
                onChange={() => handleCategoryChange("hats")}
                checked={selectedCategories.includes("hats")}
              />
              Шапки
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

      {isOpenProductModal && <ProductModal closeProductModal={closeProductModal} />}
    </>
  );
};

export default Fashion;
