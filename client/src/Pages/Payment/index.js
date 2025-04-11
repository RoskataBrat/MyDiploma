import React, { useEffect } from "react";
import "../../styles/AboutUs.css";
import about from "../../assets/images/aboutUs.jpg";
import { FaCreditCard, FaMoneyBillAlt, FaPaypal } from "react-icons/fa";

const Payment = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="about-us">
      {/* Banner Section */}
      <div className="banner relative w-full h-72 overflow-hidden">
        <img
          src={about}
          alt="Payment Options"
          className="banner-image w-full h-full object-cover brightness-75"
        />
        <div className="banner-text absolute inset-0 flex justify-center items-center text-white text-4xl font-bold">
          Опции за плащане
        </div>
      </div>

      <div className="container px-4 py-12 space-y-16">
        {/* Payment Info Section */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Сигурни и гъвкави начини на плащане</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Нашата цел е да направим пазаруването удобно и достъпно за всички. Предлагаме няколко надеждни метода за плащане, така че да изберете най-удобния за вас. Всички транзакции се обработват сигурно и с грижа за личните ви данни.
          </p>
        </div>

        {/* Icons with Payment Options */}
        <div className="flex justify-between items-start gap-10 overflow-x-auto">
          <div className="flex flex-col items-center max-w-xs text-center">
            <FaCreditCard size={80} className="text-blue-600" />
            <h3 className="text-xl font-semibold mt-4">Карта (дебитна/кредитна)</h3>
            <p className="text-gray-600 mt-2">
              Плащайте бързо и сигурно чрез Visa, MasterCard или Maestro. Поддържаме 3D Secure защита.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xs text-center">
            <FaMoneyBillAlt size={80} className="text-green-600" />
            <h3 className="text-xl font-semibold mt-4">Наложен платеж</h3>
            <p className="text-gray-600 mt-2">
              Платете при получаване – идеален вариант, ако предпочитате да видите продукта преди да го заплатите.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xs text-center">
            <FaPaypal size={80} className="text-indigo-600" />
            <h3 className="text-xl font-semibold mt-4">PayPal</h3>
            <p className="text-gray-600 mt-2">
              Използвайте своя PayPal акаунт за бързи онлайн плащания без споделяне на банкови данни.
            </p>
          </div>
        </div>


        {/* FAQ Style Section */}
        <div className="max-w-3xl mx-auto text-left">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Често задавани въпроси</h3>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Мога ли да платя в брой?</strong> – Да, чрез наложен платеж при доставка.
            </li>
            <li>
              <strong>Плащанията сигурни ли са?</strong> – Да, всички плащания се обработват чрез криптирани връзки и сертифицирани платформи.
            </li>
            <li>
              <strong>Имате ли опция за разсрочено плащане?</strong> – В момента не предлагаме, но работим по добавяне на тази функция.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Payment;

