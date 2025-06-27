import React, { useState, useContext, useMemo } from "react";
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

const originalProducts = [
  { id: 1, name: "Тениска - Calvin Klein", brand: "Калвин Клейн", slug: "cklein", price: 80, image: tshirt_cklein },
  { id: 2, name: "Тениска - Gucci", brand: "Gucci", slug: "gucci", price: 70, image: tshirt_gucci },
  { id: 3, name: "Тениска - The north face", brand: "The nort face", slug: "nortface", price: 60, image: tshirt_theNortFace },
  { id: 4, name: "Тениска - Polo", brand: "Polo", slug: "polo", price: 90, image: thsirt_polo },
  { id: 5, name: "Тениска - Adidas", brand: "Adidas", slug: "adidasT", price: 60, image: teniska_adidas_blue },
  { id: 6, name: "Тениска - Nike", brand: "Nike", slug: "nikeT", price: 60, image: teniska_nike_blue_red },
];

const T_Shirts = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortOrder, setSortOrder] = useState("original");
  const [priceFilter, setPriceFilter] = useState("");

  const { toggleLikeProduct, likedProducts } = useContext(MyContext);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    const newRange = [...priceRange];
    newRange[name === "min" ? 0 : 1] = Math.min(Math.max(Number(value), 0), 2000);
    if (newRange[0] > newRange[1]) newRange[0] = newRange[1];
    setPriceRange(newRange);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value);
  };

  const filteredProducts = useMemo(() => {
    let sortedProducts = [...originalProducts];

    if (selectedCategories.length > 0) {
      sortedProducts = sortedProducts.filter((product) =>
        selectedCategories.includes(product.brand)
      );
    }

    sortedProducts = sortedProducts.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (sortOrder === "asc") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "desc") {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (priceFilter === "lowest") {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    } else if (priceFilter === "highest") {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    }

    return sortedProducts;
  }, [selectedCategories, priceRange, sortOrder, priceFilter]);

  const viewProductDetails = (slug) => {
    navigate(`/product/${slug}`);
  };

  return (
    <div className="electronics-page">
      <div className="filters">
        <div className="filter-section">
          <h4>Брандове:</h4>
          {["Adidas", "Nike", "Калвин Клейн", "Gucci", "The nort face", "Polo"].map((brand) => (
            <label key={brand}>
              <input
                type="checkbox"
                value={brand}
                onChange={() => handleCategoryChange(brand)}
                checked={selectedCategories.includes(brand)}
              />
              {brand}
            </label>
          ))}
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

        <div className="sort-filter">
          <label>Подреди по:</label>
          <select value={sortOrder} onChange={handleSortChange}>
            <option value="original">Оригинална подредба</option>
            <option value="asc">Азбучен ред (А-Я)</option>
            <option value="desc">Обратен ред (Я-А)</option>
          </select>
        </div>

        <div className="price-filter">
          <label>Филтър по цена:</label>
          <select value={priceFilter} onChange={handlePriceFilterChange}>
            <option value="">Всички</option>
            <option value="lowest">Най-евтиния продукт</option>
            <option value="highest">Най-скъпия продукт</option>
          </select>
        </div>
      </div>

      <div className="product-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const isLiked = likedProducts.some((p) => p.id === product.id);
            return (
              <div key={product.id} className="item productItem2" onClick={() => viewProductDetails(product.slug)}>
                <div className="imgWrapper">
                  <img src={product.image} alt={product.name} />
                  <span className="badge badge-primary">50%</span>
                  <div className="actions">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        viewProductDetails(product.slug);
                      }}
                    >
                      <TfiFullscreen />
                    </Button>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLikeProduct(product);
                      }}
                    >
                      <IoMdHeartEmpty
                        style={{
                          fontSize: "20px",
                          color: isLiked ? "red" : "black",
                        }}
                      />
                    </Button>
                  </div>
                </div>
                <div className="info">
                  <h4>{product.name}</h4>
                  <span className="text-success">В наличност</span>
                  <div className="d-flex">
                    <span className="oldPrice">{product.price + 30}.00 лв.</span>
                    <span className="netPrice text-danger ml-2">{product.price}.00 лв.</span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>Няма намерени продукти.</p>
        )}
      </div>
    </div>
  );
};

export default T_Shirts;
