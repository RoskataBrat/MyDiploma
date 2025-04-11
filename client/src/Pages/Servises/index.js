import React, {useEffect} from "react";
import "../../styles/Services.css"; // Import your CSS file
import about from "../../assets/images/aboutUs.jpg";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import courier from "../../assets/images/courier_order.jpg";
import courier_ok from "../../assets/images/courier.jpg";
import global_orders from "../../assets/images/global_ordering.jpeg";

const Services = () => {
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
          <h1>Поръчка онлайн</h1>
            <p>
              Ние вярваме, че пазаруването трябва да бъде лесно, удобно и достъпно за всеки. 
              В нашия онлайн магазин можете да направите поръчка само с няколко клика — 
              по всяко време и от всяко място.
            </p>
            <h2>
              Изберете любимите си продукти и ние ще се погрижим за останалото
            </h2>
            <button>Започнете сега</button>
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
          <h1>Промоции и отстъпки</h1>
            <p>
              За нас е важно да ви радваме не само с качествени продукти, но и с
              атрактивни цени. Затова редовно предлагаме специални отстъпки, сезонни 
              намаления и изненадващи оферти.
            </p>
            <h2>
              Следете нашите кампании и не пропускайте страхотните възможности
            </h2>
            <button>Разгледайте текущите оферти</button>
          </div>
          <div className="image-content">
            <img
              src={courier_ok}
              alt="Family playing and enjoying time at home"
            />
          </div>
        </div>

        <div className="text-image-section">
          <div className="text-content">
          <h1>Доставка</h1>
            <p>
              Разбираме колко е важно поръчките ви да пристигат навреме и в перфектно състояние. 
              Работим с надеждни куриерски партньори, за да гарантираме бърза и сигурна доставка 
              до вашата врата или офис.
            </p>
            <h2>
              Очаквайте пратката си с усмивка — ние се грижим за останалото
            </h2>
            <button>Вижте условията за доставка</button>
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
          <h2 className="subtitle">Meet Our Team</h2>
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

export default Services;
