import React from "react";
import { Link } from "react-router-dom";
import "../Cart.css";
import { Button } from "react-bootstrap";

const Cart = ({ cart, setCart }) => {
  const handleQuantityChange = (id, action) => {
      setCart((prevCart) =>
          prevCart.map((product) =>
              product.id === id
                  ? {
                        ...product,
                        quantity: action === "increase" ? product.quantity + 1 : Math.max(1, product.quantity - 1),
                    }
                  : product
          )
      );
  };
  

  const handleRemoveProduct = (id) => {
      setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  const calculateTotal = () =>
      cart.reduce(
          (total, product) =>
              total + (typeof product.price === "number" ? product.price * product.quantity : 0),
          0
      );

  return (
      <div id="cart">
          <div className="products">
              <h2>Your Cart</h2>
              <p>There are {cart.length} products in your cart</p>
              {cart.map((product) => (
                  <div key={product.id} className="product">
                      <img src={product.image} alt={product.name} className="product-image" />
                      <p>{product.name}</p>
                      <span className="unit-price">
                        ${Number(product.price).toFixed(2)}
                    </span>


                      <div className="quantity-controls">
                          <button
                              className="decrease"
                              onClick={() => handleQuantityChange(product.id, "decrease")}
                          >
                              -
                          </button>
                          <input
                              type="number"
                              className="quantity"
                              value={product.quantity}
                              readOnly
                          />
                          <button
                              className="increase"
                              onClick={() => handleQuantityChange(product.id, "increase")}
                          >
                              +
                          </button>
                      </div>
                      <span className="subtotal">
                        ${(Number(product.price) * product.quantity).toFixed(2)}
                    </span>

                      <button className="remove" onClick={() => handleRemoveProduct(product.id)}>
                          Remove
                      </button>
                  </div>
              ))}
          </div>
          <div id="cart-totals">
              <h3>Cart Totals</h3>
              <p>
                  Total: <span>${calculateTotal().toFixed(2)}</span>
              </p>
              <Link to="/checkout">
                  <Button className="checkout-button">Checkout</Button>
              </Link>
          </div>
      </div>
  );
};
export default Cart;
