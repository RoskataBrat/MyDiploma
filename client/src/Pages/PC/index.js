import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { TfiFullscreen } from "react-icons/tfi";
import "../../Pages/Electronics.css";
import ProductModal from "../../Components/ProductModal";
import pc_acer from "../../assets/images/pc-acer.jpg";
import pc_imac from "../../assets/images/pc-imac.jpg";
import pc_asus from "../../assets/images/pc_asus.jpg";
import pc_gigabyte from "../../assets/images/pc-gigabyte.jpg";
import pc_hp from "../../assets/images/pc_hp.jpg";

const PC = () => {
  const navigate = useNavigate();
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);

  const products = [
    { id: 1, name: "Acer", brand: "Acer", price: 299, slug: "pc_Acer", image: pc_acer },
    { id: 2, name: "Apple", brand: "Apple", price: 450, slug: "pc_Apple", image: pc_imac },
    { id: 3, name: "ASUS", brand: "ASUS", price: 199, slug: "pc_Asus", image: pc_asus },
    { id: 4, name: "GIGABYTE", brand: "GIGABYTE", price: 800, slug: "pc_gigabyte", image: pc_gigabyte },
    { id: 5, name: "HP", brand: "HP", price: 199, slug: "pc_hp", image: pc_hp },
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

  return (
    <div className="electronics-page">
      {/* Sidebar Filters */}
      <div className="filters">
        <div>
          <div className="filter-section">
            <h4>Brand:</h4>
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
                value="Apple"
                onChange={() => handleCategoryChange("Apple")}
                checked={selectedCategories.includes("Apple")}
              />
              Apple
            </label>
            <label>
              <input
                type="checkbox"
                value="ASUS"
                onChange={() => handleCategoryChange("ASUS")}
                checked={selectedCategories.includes("ASUS")}
              />
              ASUS
            </label>
            <label>
              <input
                type="checkbox"
                value="GIGABYTE"
                onChange={() => handleCategoryChange("GIGABYTE")}
                checked={selectedCategories.includes("GIGABYTE")}
              />
              GIGABYTE
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
  );
};

export default PC;
