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
        <h2>Your Liked Products</h2>
        <p>There are {likedProducts.length} products in your list</p>
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
                ${typeof product.price === "number" ? product.price.toFixed(2) : "0.00"}
              </span>
              <button
                className="remove"
                onClick={() => handleRemoveProduct(product.id)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>No products liked yet.</p>
        )}
      </div>
    </div>
  );
}

export default LikedProducts;
