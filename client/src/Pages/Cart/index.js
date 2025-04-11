import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSubscription } from "../../context/SubscriptionContext"; // Import subscription context
import "../../styles/Cart.css";

const Cart = ({ cart, setCart }) => {
  const { isSubscribed } = useSubscription(); // Access subscription status

  const handleQuantityChange = (id, action) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity:
                action === "increase"
                  ? product.quantity + 1
                  : Math.max(1, product.quantity - 1),
            }
          : product
      )
    );
  };

  const handleRemoveProduct = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, product) => {
        // Apply 20% discount if subscribed
        const discountedPrice = isSubscribed
          ? product.price * 0.8 // 20% discount
          : product.price;
        return total + discountedPrice * product.quantity;
      },
      0
    );
  };

  return (
    <div id="cart">
      <div className="products">
        <h2>Твоята количка</h2>
        <p>Има {cart.length} продукти в твоята количка</p>
        {cart.map((product) => (
          <div key={product.id} className="product">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <p>{product.name}</p>
            <span className="unit-price">
              {isSubscribed
                ? (product.price * 0.8).toFixed(2) // Display discounted price if subscribed
                : product.price.toFixed(2)} лв.
            </span>

            <div className="quantity-controls">
              <button
                className="decrease"
                onClick={() => handleQuantityChange(product.id, "decrease")}
              >
                -
              </button>
              <input type="number" className="quantity" value={product.quantity} readOnly />
              <button
                className="increase"
                onClick={() => handleQuantityChange(product.id, "increase")}
              >
                +
              </button>
            </div>
            <span className="subtotal">
              {(isSubscribed ? product.price * 0.8 : product.price) * product.quantity} лв.
            </span>

            <button className="remove" onClick={() => handleRemoveProduct(product.id)}>
              Премахни
            </button>
          </div>
        ))}
      </div>
      <div id="cart-totals">
        <h3>Сметка в количката</h3>
        <p className="price">
          Сума: <span>{calculateTotal().toFixed(2)} лв.</span>
        </p>
        <Link to="/checkout">
          <Button className="checkout-button">Купи</Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
