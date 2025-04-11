import React, {useEffect} from "react";
import "../../styles/Services.css"; // Import your CSS file
import about from "../../assets/images/aboutUs.jpg";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import courier from "../../assets/images/courier_order.jpg";
import courier_ok from "../../assets/images/courier.jpg";
import global_orders from "../../assets/images/global_ordering.jpeg";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="about-us">
      {/* Full-Width Banner Section */}
      <div className="banner relative">
        <img
          src={about}
          alt="About Us"
          className="banner-image"
        />
        <div className="banner-text">Нашите услуги</div>
      </div>

      <div className="container">
        {/* Mission Section */}
        <div className="mission">
          <h2 className="mission-title">Клиентът е винаги прав</h2>
          <p className="mission-description">
            Ние сме модерен онлайн магазин, посветен на това да направим пазаруването по-лесно, удобно и приятно. Нашата мисия е да предложим богат избор от стоки, бърза доставка и отлично обслужване, защото вярваме, че всеки клиент заслужава най-доброто.
          </p>

        </div>

        <div className="text-image-section">
          <div className="text-content">
            <h1>Бърза доставка</h1>
            <p> 
            Нашата мисия е да улесним ежедневието на хората. Ние се стремим да осигурим удобство, скорост и качество при всяка поръчка. Разберете повече за нас, как работим и какво ни вдъхновява.
            </p>
          </div>
          <div className="image-content">
            <img
              src={courier}
              alt="Family playing and enjoying time at home"
            />
          </div>
        </div>

        <div className="text-image-section">
          <div className="text-content">
            <h1>Високо качество</h1>
            <p>
              Ние вярваме, че всеки заслужава най-доброто. Затова предлагаме продукти с високо качество, които отговарят на най-високите стандарти. Открийте повече за нас, нашите ценности и стремежа ни към съвършенство.
            </p>
          </div>
          <div className="image-content_left">
            <img
              src={courier_ok}
              alt="Family playing and enjoying time at home"
            />
          </div>
        </div>

        <div className="text-image-section">
          <div className="text-content">
            <h1>Търговия по света</h1>
            <p>
              Стремим се да свържем хората с най-добрите продукти от цял свят. Чрез нашата глобална мрежа предлагаме качество, достъпност и разнообразие, за да направим пазаруването по-удобно и достъпно за всеки.
            </p>
          </div>
          <div className="image-content">
            <img
              src={global_orders}
              alt="Family playing and enjoying time at home"
            />
          </div>
        </div>

        {/* Team Section */}
        {/*<div className="team-section">
          <h2 className="subtitle">Виж нашия екип</h2>
          <div className="team-members">
            <div className="team-member">
              <img
                src="/path-to-image1.jpg"
                alt="John Doe - CEO"
                className="team-image"
              />
              <h3 className="member-name">John Doe</h3>
              <p className="member-role">CEO</p>
            </div>

            <div className="team-member">
              <img
                src="/path-to-image2.jpg"
                alt="Jane Smith - CTO"
                className="team-image"
              />
              <h3 className="member-name">Jane Smith</h3>
              <p className="member-role">CTO</p>
            </div>

            <div className="team-member">
              <img
                src="/path-to-image3.jpg"
                alt="Alice Johnson - Project Manager"
                className="team-image"
              />
              <h3 className="member-name">Alice Johnson</h3>
              <p className="member-role">Project Manager</p>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default AboutUs;
