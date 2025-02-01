import React, { useContext, useState } from "react";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";
import "../Checkout.css";

function Checkout() {
  const { cart, setCart } = useContext(MyContext);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const placeOrder = async () => {
    if (!customerInfo.name || !customerInfo.email || !customerInfo.address || !customerInfo.phone) {
      alert("Please fill in all the details.");
      return;
    }

    const orderDetails = {
      customerName: customerInfo.name,
      email: customerInfo.email,
      address: customerInfo.address,
      phone: customerInfo.phone,
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total: calculateTotal(),
      status: "Pending", // Default order status
    };

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderDetails),
      });

      if (!response.ok) {
        throw new Error("Failed to place order.");
      }

      const data = await response.json();
      console.log("Order placed successfully:", data);

      setOrderPlaced(true);
      setCart([]); // Clear the cart after successful order placement
      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      console.error("Error placing order:", error);
      alert("An error occurred while placing your order. Please try again.");
    }
  };

  if (orderPlaced) {
    return (
      <div className="checkout-success">
        <h2>Thank you for your order!</h2>
        <p>Your order has been placed successfully. Redirecting to the home page...</p>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="checkout-cart">
        <h2>Order Summary</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div className="checkout-item">
                  <span>{item.name}</span>
                  <span>
                    {item.quantity} x ${item.price.toFixed(2)} = $
                    {(item.quantity * item.price).toFixed(2)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ${calculateTotal()}</h3>
      </div>

      <div className="checkout-details">
        <h2>Shipping Details</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={customerInfo.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={customerInfo.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              value={customerInfo.address}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={customerInfo.phone}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>

      <button
        className="place-order-btn"
        onClick={placeOrder}
        disabled={cart.length === 0}
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
