import React, { useState,useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { IoMdHeartEmpty } from "react-icons/io";
import { TfiFullscreen } from "react-icons/tfi";
import "../../styles/Electronics.css";
import "../../styles/SizeFilter.css";
import teniska_adidas_blue from "../../assets/images/t_shirt_adidas_green.jpg";
import tshirt_cklein from "../../assets/images/tshirt_cklein.jpg";
import tshirt_gucci from "../../assets/images/tshirt_gucci.webp";
import tshirt_theNortFace from "../../assets/images/tshirt_theNortFace.jpg";
import thsirt_polo from "../../assets/images/tshirt_polo.webp";
import teniska_nike_blue_red from "../../assets/images/t_shirt_nike_blue_red.png";
import suitsher_women from "../../assets/images/suitsher_women.jpg";
import roklq_women from "../../assets/images/roklq_women.webp";
import pola_women from "../../assets/images/pola_women.jpg";
import nike_shoes_women from "../../assets/images/nike_shoes_women.jpg";
import converse_shoes_women from "../../assets/images/converse_shoes_women.webp";
import elek_carly from "../../assets/images/elek_women.jpg";
import { MyContext } from "../../App";

const SportGoodsWomen = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const { toggleLikeProduct, likedProducts } = useContext(MyContext); // Access context here

  const toggleSize = (size) => {
    setSelectedSizes((prevSelected) =>
      prevSelected.includes(size)
        ? prevSelected.filter((s) => s !== size) // Remove size if already selected
        : [...prevSelected, size] // Add size if not selected
    );
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

  const products = [
    { id: 1, name: "Суитшърт - ELEONOR SPRING", brand: "Суитшъри", slug: "suitsher_spring", price: 39, image: suitsher_women },
    { id: 2, name: "CONVERSE Обувки - Chuck Taylor All Star", brand: "Обувки", slug: "converse_obuvki", price: 450, image: converse_shoes_women },
    { id: 3, name: "Пола - ONLSOPHIA", brand: "Поли", slug: "pola_dynkova", price: 199, image: pola_women },
    { id: 4, name: "NIKE - Обувки W UPLIFT SC", brand: "Обувки", slug: "obuvki_w", price: 800, image: nike_shoes_women },
    { id: 5, name: "PUMA Рокля - ESS Slim", brand: "Рокли", slug: "puma_roklq", price: 199, image: roklq_women },
    { id: 6, name: "BRILLE Елек Carly", brand: "Елеци", slug: "elek_carly", price: 800, image: elek_carly },
  ];

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategories.length === 0 || selectedCategories.includes(product.brand)) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
  );

  const viewProductDetails = (slug) => {
    navigate(`/product/${slug}`);
  };

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  return (
    <>
      <div className="electronics-page">
        {/* Sidebar Filters */}
        <div className="filters">
          <div className="filter-section">
            <h4>Брандове:</h4>
            <label>
              <input
                type="checkbox"
                value="Adidas"
                onChange={() => handleCategoryChange("Суитшъри")}
                checked={selectedCategories.includes("Суитшъри")}
              />
              Суитшъри
            </label>
            <label>
              <input
                type="checkbox"
                value="Nike"
                onChange={() => handleCategoryChange("Обувки")}
                checked={selectedCategories.includes("Обувки")}
              />
              Обувки
            </label>
            <label>
              <input
                type="checkbox"
                value="Калвин Клейн"
                onChange={() => handleCategoryChange("Поли")}
                checked={selectedCategories.includes("Поли")}
              />
              Поли
            </label>
            <label>
              <input
                type="checkbox"
                value="Gucci"
                onChange={() => handleCategoryChange("Рокли")}
                checked={selectedCategories.includes("Рокли")}
              />
              Рокли
            </label>
            <label>
              <input
                type="checkbox"
                value="The nort face"
                onChange={() => handleCategoryChange("Елеци")}
                checked={selectedCategories.includes("Елеци")}
              />
              Елеци
            </label>
          </div>

          <div className="size-filter">
            <label className="filter-label">Изберете размери:</label>
            <div className="sizes-container">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`size-button ${
                    selectedSizes.includes(size) ? "selected" : ""
                  }`}
                  onClick={() => toggleSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="selected-sizes">
              {selectedSizes.length > 0 ? (
                <span>Избрани размери: {selectedSizes.join(", ")}</span>
              ) : (
                <span>Няма избрани размери</span>
              )}
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
    </>
  );
};

export default SportGoodsWomen;
