import React, { useState,useContext } from "react";
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
import { MyContext } from "../../App";

const T_Shirts = () => {
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
    { id: 1, name: "Тениска - Калвин Клейн  ", brand: "Калвин Клейн", slug: "cklein", price: 299, image: tshirt_cklein },
    { id: 2, name: "Тениска - Гучи", brand: "Gucci", slug: "gucci", price: 450, image: tshirt_gucci },
    { id: 3, name: "Тениска - Северното лице", brand: "The nort face", slug: "nortface", price: 199, image: tshirt_theNortFace },
    { id: 4, name: "Тениска - Поло", brand: "Polo", slug: "polo", price: 800, image: thsirt_polo },
    { id: 5, name: "Адидас", brand: "Adidas", slug: "adidasT", price: 199, image: teniska_adidas_blue },
    { id: 6, name: "Найк", brand: "Nike", slug: "nikeT", price: 800, image: teniska_nike_blue_red },
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
                onChange={() => handleCategoryChange("Adidas")}
                checked={selectedCategories.includes("Adidas")}
              />
              Адидас
            </label>
            <label>
              <input
                type="checkbox"
                value="Nike"
                onChange={() => handleCategoryChange("Nike")}
                checked={selectedCategories.includes("Nike")}
              />
              Найк
            </label>
            <label>
              <input
                type="checkbox"
                value="Калвин Клейн"
                onChange={() => handleCategoryChange("Калвин Клейн")}
                checked={selectedCategories.includes("Калвин Клейн")}
              />
              Калвин Клейн
            </label>
            <label>
              <input
                type="checkbox"
                value="Gucci"
                onChange={() => handleCategoryChange("Gucci")}
                checked={selectedCategories.includes("Gucci")}
              />
              Гучи
            </label>
            <label>
              <input
                type="checkbox"
                value="The nort face"
                onChange={() => handleCategoryChange("The nort face")}
                checked={selectedCategories.includes("The nort face")}
              />
              Северното лице
            </label>
            <label>
              <input
                type="checkbox"
                value="Polo"
                onChange={() => handleCategoryChange("Polo")}
                checked={selectedCategories.includes("Polo")}
              />
              Поло
            </label>
          </div>

          {/*<div className="size-filter">
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
          </div>*/}

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

export default T_Shirts;
