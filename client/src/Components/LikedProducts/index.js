import React, { useContext } from "react";
import { MyContext } from "../../App";
import "../../styles/LikedProducts.css";

function LikedProducts() {
  const { likedProducts, setLikedProducts } = useContext(MyContext);

  const handleRemoveProduct = (id) => {
    const updatedProducts = likedProducts.filter((product) => product.id !== id);
    setLikedProducts(updatedProducts);
  };

  return (
    <div id="cart">
      <div className="products">
        <h2>Твоите харесани продукти</h2>
        <p>Има {likedProducts.length} продукти в твоя списък</p>
        {likedProducts.length > 0 ? (
          likedProducts.map((product) => (
            <div key={product.id} className="product">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <p>{product.name}</p>
              <span className="unit-price">
                {typeof product.price === "number" ? product.price.toFixed(2) : "0.00"} лв.
              </span>
              <button
                className="remove"
                onClick={() => handleRemoveProduct(product.id)}
              >
                Премахни
              </button>
            </div>
          ))
        ) : (
          <p>Все още няма продукти</p>
        )}
      </div>
    </div>
  );
}

export default LikedProducts;
