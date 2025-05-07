import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/OrderSuccess.css"; // Ако искате да добавите стилизация

function OrderSuccess() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="order-success-container">
      <h1>Вашата поръчка е успешно подадена!</h1>
      <p>Благодарим ви за покупката! Вашето поръчване ще бъде обработено скоро.</p>
      <button className="go-home-btn" onClick={goToHomePage}>Начало</button>
    </div>
  );
}

export default OrderSuccess;
