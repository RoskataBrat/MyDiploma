import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { IoMdHeartEmpty } from "react-icons/io";
import { TfiFullscreen } from "react-icons/tfi";
import "../../Pages/Electronics.css";
import hat_flexit_acient from "../../assets/images/hats_flexit_acient.jpg";
import hat_newYork from "../../assets/images/hat_new_york.jpg";

const Hats = () => {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const products = [
    { id: 1, name: "Флексит - Шапка", brand: "Флексит", price: 29.0, slug: "hatFlexit", image: hat_flexit_acient },
    { id: 2, name: "Флексит - Шапка", brand: "Флексит", price: 29.0, slug: "hatFlexit", image: hat_flexit_acient },
    { id: 3, name: "Флексит - Шапка", brand: "Флексит", price: 29.0, slug: "hatFlexit", image: hat_flexit_acient },
    { id: 4, name: "Ню Йорк - Шапка", brand: "Ню Йорк", price: 29.0, slug: "hatNewYork", image: hat_newYork },
    { id: 5, name: "Ню Йорк - Шапка", brand: "Ню Йорк", price: 29.0, slug: "hatNewYork", image: hat_newYork },
    { id: 6, name: "Ню Йорк - Шапка", brand: "Ню Йорк", price: 29.0, slug: "hatNewYork", image: hat_newYork },
  ];

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

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategories.length === 0 || selectedCategories.includes(product.brand)) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
  );

  const viewProductDetails = (slug) => {
    navigate(`/product/${slug}`); // Navigate to the product details page
  };

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
                  value="Флексит"
                  onChange={() => handleCategoryChange("Флексит")}
                  checked={selectedCategories.includes("Флексит")}
                />
                Флексит
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Ню Йорк"
                  onChange={() => handleCategoryChange("Ню Йорк")}
                  checked={selectedCategories.includes("Ню Йорк")}
                />
                Ню Йорк
              </label>
            </div>
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
    </>
  );
};

export default Hats;
