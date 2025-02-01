import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { IoMdHeartEmpty } from "react-icons/io";
import { TfiFullscreen } from "react-icons/tfi";
import "../../Pages/Electronics.css";
import iphone from "../../assets/images/iphone.jpg";
import samsungA54 from "../../assets/images/samsungA54.jpg";
import huawei_mate_40 from "../../assets/images/huawei_mate_40.jpg";
import redmiA3 from "../../assets/images/redmi a3.jpg";

const Smartphones = () => {
  const navigate = useNavigate();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [products, setProducts] = useState([
    { id: 1, name: "iPhone", brand: "iPhone", price: 899, slug: "iphone", image: iphone },
    { id: 2, name: "Samsung A54", brand: "Samsung", price: 250, slug: "samsung-a54", image: samsungA54 },
    { id: 3, name: "Xiaomi Redmi Note", brand: "Xiaomi", price: 199, slug: "xiaomi-redmi-note", image: redmiA3 },
    { id: 4, name: "Huawei Mate 40", brand: "Huawei", price: 800, slug: "huawei-mate-40", image: huawei_mate_40 },
  ]);

  // Add a new product dynamically
  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  // Function to expose addProduct dynamically
  Smartphones.addProduct = addProduct;

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
            <h4>Брандове:</h4>
            <label>
              <input
                type="checkbox"
                value="Samsung"
                onChange={() => handleCategoryChange("Samsung")}
                checked={selectedCategories.includes("Samsung")}
              />
              Samsung
            </label>
            <label>
              <input
                type="checkbox"
                value="iPhone"
                onChange={() => handleCategoryChange("iPhone")}
                checked={selectedCategories.includes("iPhone")}
              />
              iPhone
            </label>
            <label>
              <input
                type="checkbox"
                value="Xiaomi"
                onChange={() => handleCategoryChange("Xiaomi")}
                checked={selectedCategories.includes("Xiaomi")}
              />
              Xiaomi
            </label>
            <label>
              <input
                type="checkbox"
                value="Huawei"
                onChange={() => handleCategoryChange("Huawei")}
                checked={selectedCategories.includes("Huawei")}
              />
              Huawei
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
  );
};

export default Smartphones;
