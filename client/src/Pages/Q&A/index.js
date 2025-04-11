import React, { useEffect, useState } from "react";
import "../../styles/AboutUs.css";
import about from "../../assets/images/aboutUs.jpg";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";

const faqData = [
  {
    question: "Как мога да направя поръчка?",
    answer:
      "Изберете желаните продукти, добавете ги в количката и следвайте стъпките за поръчка. Не е необходимо да имате регистрация, но тя ви дава допълнителни предимства.",
  },
  {
    question: "Какви са начините на плащане?",
    answer:
      "Приемаме плащане с дебитна/кредитна карта, наложен платеж при доставка, банков превод и PayPal.",
  },
  {
    question: "Колко време отнема доставката?",
    answer:
      "Доставката обикновено отнема от 1 до 3 работни дни, в зависимост от местоположението и наличността на продуктите.",
  },
  {
    question: "Как мога да върна продукт?",
    answer:
      "Можете да върнете продукт в рамките на 14 дни след получаване, при условие че е в оригиналното си състояние. Свържете се с нас за инструкции.",
  },
  {
    question: "Има ли отстъпки за редовни клиенти?",
    answer:
      "Да! Имаме програма за лоялност, чрез която получавате специални оферти и персонализирани намаления.",
  },
];

const Q_and_A = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="about-us">
      {/* Banner Section */}
      <div className="banner relative w-full h-72 overflow-hidden">
        <img
          src={about}
          alt="Our Story"
          className="banner-image w-full h-full object-cover brightness-75"
        />
        <div className="banner-text absolute inset-0 flex justify-center items-center text-white text-4xl font-bold">
          Въпроси и отговори
        </div>
      </div>

      <div className="container px-4 py-8 space-y-12">
        {/* Mission Section - Заменен */}
        <div className="mission text-center space-y-4">
          <h2 className="mission-title text-3xl font-bold text-gray-800">Клиентът е винаги прав</h2>
          <p className="mission-description text-gray-600 max-w-2xl mx-auto">
            Ние сме модерен онлайн магазин, посветен на това да направим пазаруването по-лесно, удобно и приятно. Нашата мисия е да предложим богат избор от стоки, бърза доставка и отлично обслужване, защото вярваме, че всеки клиент заслужава най-доброто.
          </p>
        </div>

        {/* Features Icons */}
        {/*<div className="features flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center">
            <TbTruckDelivery size={100} color="orange" />
            <h3 className="text-xl font-semibold mt-2">Бърза доставка</h3>
          </div>
          <div className="flex flex-col items-center">
            <MdOutlineVerifiedUser size={100} color="green" />
            <h3 className="text-xl font-semibold mt-2">Високо качество</h3>
          </div>
          <div className="flex flex-col items-center">
            <AiOutlineGlobal size={100} color="darkblue" />
            <h3 className="text-xl font-semibold mt-2">Търговия по света</h3>
          </div>
        </div>*/}

        {/* Text with Image and Video */}
        {/*<div className="text-with-image-video flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">
              The Most Powerful Way to Connect with Every Audience
            </h3>
            <p className="text-gray-600">
              Whether you want to motivate or train team members, sell products or services, or entertain and inform subscribers, video does it best. And Brightcove provides you with the most reliable, scalable, and secure platform to deliver it on.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://nixanbal.com/media/k2/items/cache/07e866daa207cbbb799efea1f264fd34_L.jpg"
              alt="Video Thumbnail"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>*/}

        {/* FAQ Section */}
        <div className="faq-section max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Често задавани въпроси</h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`border-b border-gray-300 pb-4 transition-all duration-300 ${
                  openIndex === index ? "bg-gray-50 rounded" : ""
                }`}
              >
                <button
                  className="w-full text-left text-lg font-medium text-blue-700 flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="text-2xl">{openIndex === index ? "-" : "+"}</span>
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600 transition-all duration-300">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        {/*<div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <img
                src="/path-to-image1.jpg"
                alt="Team Member 1"
                className="w-32 h-32 mx-auto rounded-full shadow-lg object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">John Doe</h3>
              <p className="text-gray-600">CEO</p>
            </div>
            <div>
              <img
                src="/path-to-image2.jpg"
                alt="Team Member 2"
                className="w-32 h-32 mx-auto rounded-full shadow-lg object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div>
              <img
                src="/path-to-image3.jpg"
                alt="Team Member 3"
                className="w-32 h-32 mx-auto rounded-full shadow-lg object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">Alice Johnson</h3>
              <p className="text-gray-600">Project Manager</p>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default Q_and_A;


