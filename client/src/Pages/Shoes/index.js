import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { IoMdHeartEmpty } from "react-icons/io";
import { TfiFullscreen } from "react-icons/tfi";
import ReactPaginate from "react-paginate";
import "../../styles/Electronics.css";
import shoes_nike_gold from "../../assets/images/shoes_nike_gold.jpg";
import shoes_jordan from "../../assets/images/jordan.webp";
import { MyContext } from "../../App";

const Shoes = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const sizes = ["37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47"];

   const { toggleLikeProduct, likedProducts } = useContext(MyContext); // Access context here

  const productsPerPage = 6; // Number of products to display per page
  const products = [
    { id: 1, name: "Найк", brand: "Nike", slug: "nikeG", price: 79.0, image: shoes_nike_gold },
    { id: 2, name: "Найк", brand: "Nike", slug: "nikeG", price: 79.0, image: shoes_nike_gold },
    { id: 3, name: "Найк", brand: "Nike", slug: "nikeG", price: 79.0, image: shoes_nike_gold },
    { id: 4, name: "Найк-Джордан", brand: "Nike", slug: "nikeJ", price: 79.0, image: shoes_jordan },
    { id: 5, name: "Найк-Джордан", brand: "Nike", slug: "nikeJ", price: 79.0, image: shoes_jordan },
    { id: 6, name: "Найк-Джордан", brand: "Nike", slug: "nikeJ", price: 79.0, image: shoes_jordan },
    // Add more products as needed
  ];

  const toggleSize = (size) => {
    setSelectedSizes((prevSelected) =>
      prevSelected.includes(size)
        ? prevSelected.filter((s) => s !== size) // Remove size if already selected
        : [...prevSelected, size] // Add size if not selected
    );
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
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

  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);
  const displayedProducts = filteredProducts.slice(
    currentPage * productsPerPage,
    currentPage * productsPerPage + productsPerPage
  );

  const viewProductDetails = (slug) => {
    navigate(`/product/${slug}`); // Navigate to the product details page
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
                value="all"
                onChange={() => handleCategoryChange("all")}
                checked={selectedCategories.includes("all")}
              />
              Всичко
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
                value="Adidas"
                onChange={() => handleCategoryChange("Adidas")}
                checked={selectedCategories.includes("Adidas")}
              />
              Адидас
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

        {/* Product List */}
        <div className="product-container">
  {filteredProducts.map((product) => {
     const isLiked = likedProducts.some((p) => p.id === product.id); // Check if product is liked
     return(
    <div key={product.id} className="item productItem2" onClick={() => viewProductDetails(product.slug)}>
      <div className="imgWrapper">
        <img src={product.image} alt={product.name} />
        <span className="badge badge-primary">50%</span>
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

  {/* Pagination */}
  {/*<div className="pagination-container">
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageChange}
      containerClassName={"pagination"}
      activeClassName={"active"}
    />
  </div>*/}
</div>

    </>
  );
};

export default Shoes;
