import React, { useContext, useState } from "react";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";  // Импортирайте useNavigate
import "../../styles/Checkout.css";
import visa from "../../assets/images/visa.png";
import mastercard from "../../assets/images/mastercard.webp";

const countryCityData = {
  България: ["София", "Пловдив", "Варна"],
  САЩ: ["Ню Йорк", "Лос Анджелис", "Чикаго"],
  Канада: ["Торонто", "Ванкувър", "Монреал"],
  Германия: ["Берлин", "Мюнхен", "Хамбург"],
};

function Checkout() {
  const { cart, setCart } = useContext(MyContext);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    cardNumber: "",
    nameOnCard: "",
    expMonth: "",
    expYear: "",
    cvv: "",
    country: "",
    city: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardType, setCardType] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();  // Декларираме навигацията

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setCustomerInfo({ ...customerInfo, country, city: "" });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const placeOrder = async () => {
    if (
      !customerInfo.name ||
      !customerInfo.email ||
      !customerInfo.address ||
      !customerInfo.phone ||
      !customerInfo.country ||
      !customerInfo.city ||
      (paymentMethod === "card" && (!customerInfo.cardNumber || !cardType))
    ) {
      alert("Моля, попълнете всички задължителни полета.");
      return;
    }

    const orderDetails = {
      customerName: customerInfo.name,
      email: customerInfo.email,
      address: customerInfo.address,
      phone: customerInfo.phone,
      total: calculateTotal(),
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      paymentMethod,
      cardType: paymentMethod === "card" ? cardType : null,
      status: "Очаква обработка",
    };

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderDetails),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Server error:", errorText);
        throw new Error("Неуспешно изпращане на поръчката.");
      }

      const data = await response.json();

      setOrderPlaced(true);
      setCart([]);
      if (data.orderId) {
        alert(`Вашата поръчка е създадена успешно! Номер: ${data.orderId}`);
        navigate("/order-success");  // Пренасочване към success страницата
      }
    } catch (error) {
      console.error("Error during order placement:", error);
      alert("Възникна грешка. Моля, опитайте отново.");
    }
  };

  return (
    <div className="checkout-container">
      <h1>Поръчка</h1>
      <div className="checkout-sections">
        {/* Order Summary */}
        <div className="checkout-summary">
          <h2>Обобщение на поръчката</h2>
          {cart.length === 0 ? (
            <p>Вашата количка е празна.</p>
          ) : (
            <>
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    <div className="checkout-item">
                      <span>{item.name}</span>
                      <span> {item.quantity} x {item.price.toFixed(2)} лв.</span>
                    </div>
                  </li>
                ))}
              </ul>
              <h3>Общо: {calculateTotal()} лв.</h3>
            </>
          )}
        </div>

        {/* Shipping + Payment */}
        <div className="checkout-details">
          <h2>Данни за доставка</h2>
          <form>
            <div className="form-group">
              <label>Име</label>
              <input name="name" value={customerInfo.name} onChange={handleInputChange} />
            </div>

            <div className="form-group">
              <label>Имейл</label>
              <input name="email" value={customerInfo.email} onChange={handleInputChange} />
            </div>

            <div className="form-group">
              <label>Адрес</label>
              <textarea name="address" value={customerInfo.address} onChange={handleInputChange} />
            </div>

            <div className="form-group">
              <label>Телефон</label>
              <input name="phone" value={customerInfo.phone} onChange={handleInputChange} />
            </div>

            <div className="form-group">
              <label>Държава</label>
              <select value={customerInfo.country} onChange={handleCountryChange}>
                <option value="">Изберете държава</option>
                {Object.keys(countryCityData).map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Град</label>
              <select
                name="city"
                value={customerInfo.city}
                onChange={handleInputChange}
                disabled={!customerInfo.country}
              >
                <option value="">Изберете град</option>
                {customerInfo.country &&
                  countryCityData[customerInfo.country].map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
              </select>
            </div>

            {/* 🔁 Payment Method Selection */}
            <div className="form-group">
              <label>Метод на плащане</label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="card">Кредитна/Дебитна карта</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>

            {paymentMethod === "card" && (
              <>
                <div className="form-group">
                  <label>Тип карта</label>
                  <select value={cardType} onChange={(e) => setCardType(e.target.value)}>
                    <option value="Visa">Visa</option>
                    <option value="MasterCard">MasterCard</option>
                  </select>
                  <div className="accepted-cards">
                    <img src={visa} alt="Visa" />
                    <img src={mastercard} alt="MasterCard" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Име на картата</label>
                  <input name="nameOnCard" value={customerInfo.nameOnCard} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                  <label>Номер на карта</label>
                  <input name="cardNumber" value={customerInfo.cardNumber} onChange={handleInputChange} placeholder="1111-2222-3333-4444" maxLength="19" />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Месец на изтичане</label>
                    <select name="expMonth" value={customerInfo.expMonth} onChange={handleInputChange}>
                      <option value="">Месец</option>
                      {["01","02","03","04","05","06","07","08","09","10","11","12"].map(m => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Година</label>
                    <select name="expYear" value={customerInfo.expYear} onChange={handleInputChange}>
                      <option value="">Година</option>
                      {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))} 
                    </select> 
                  </div>
                </div>

                <div className="form-group">
                  <label>CVV</label>
                  <input name="cvv" value={customerInfo.cvv} onChange={handleInputChange} maxLength="4" />
                </div>
              </>
            )}

            {paymentMethod === "paypal" && (
              <div className="form-group">
                <p>След натискане на бутона за поръчка ще бъдете пренасочени към PayPal.</p>
              </div>
            )}
          </form>
        </div>
      </div>

      <button className="place-order-btn" onClick={placeOrder} disabled={cart.length === 0}>
        Изпрати поръчка
      </button>
    </div>
  );
}

export default Checkout;


