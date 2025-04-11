import ProductModal from "../../Components/ProductModal";
import { useState,useContext } from "react";
import brauni from "../../assets/images/brauni.webp";
import { Button } from "react-bootstrap";
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import kroasan_ketyring from "../../assets/images/bakery_cakes_kroasan_ketyring.jpg";
import baklava_shan_fustuk from "../../assets/images/bakery_cakes_baklava_shan_fustuk.jpg";
import myfin from "../../assets/images/bakery_myfin.jpg";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";

const Sweets = () => {
  const navigate = useNavigate();
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const { toggleLikeProduct, likedProducts } = useContext(MyContext); // Access context here

  const products = [
    { id: 1, name: "Сахер", brand: "Неделя", category: "cakes", price: 100, image: brauni },
    { id: 2, name: "Кроасан - Кетъринг", category: "kroasans", slug:"ketyring", price: 10.00, image: kroasan_ketyring },
    { id: 3, name: "Баклава - Шан Фъстък", category: "baklavas", slug:"baklava", price: 50.00, image: baklava_shan_fustuk },
    { id: 4, name: "Мъфин - шоколадов", category: "cakes", slug:"myphin", price: 50.00, image: myfin }
  ];

  const viewProductDetails = (slug) => {
    navigate(`/product/${slug}`); // Navigate to the product details page
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
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
      (selectedBrand === "all" || product.brand === selectedBrand) &&
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
                  value="cakes"
                  onChange={() => handleCategoryChange("cakes")}
                  checked={selectedCategories.includes("cakes")}
                />
                Кексове
              </label>
              <label>
                <input
                  type="checkbox"
                  value="bread"
                  onChange={() => handleCategoryChange("kroasans")}
                  checked={selectedCategories.includes("kroasans")}
                />
                Кроасани
              </label>
              <label>
                <input
                  type="checkbox"
                  value="baklavas"
                  onChange={() => handleCategoryChange("baklavas")}
                  checked={selectedCategories.includes("baklavas")}
                />
                Баклави
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
    </>
  );
};
export default Sweets;
