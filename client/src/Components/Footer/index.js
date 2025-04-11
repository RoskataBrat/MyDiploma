import { RiTShirt2Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="topInfo row">
          <div className="col d-flex align-items-center">
            <span><RiTShirt2Line /></span>
            <span>Свежи продукти всеки ден</span>
          </div>
          <div className="col d-flex align-items-center">
            <span><TbTruckDelivery /></span>
            <span>Безплатна доставка за поръчка над 100 лв.</span>
          </div>
          <div className="col d-flex align-items-center">
            <span><RiDiscountPercentLine /></span>
            <span>Мега остъпки всяка седмица</span>
          </div>
          <div className="col d-flex align-items-center">
            <span><CiBadgeDollar /></span>
            <span>Най-добрите цени на пазара</span>
          </div>
        </div>

        <div className="row mt-5 linksWrap">
          {["За SHOPSPOT"].map((title, index) => (
            <div className="col" key={index}>
              <h5>{title}</h5>
              <ul>
                <li>
                  <Link to="/about-us">За нас</Link>
                </li>
                <li><Link to="/services">Нашите услуги</Link></li>
              </ul>
            </div>
          ))}
           {["ПОМОЩ"].map((title, index) => (
            <div className="col" key={index}>
              <h5>{title}</h5>
              <ul>
                <li><Link to="q&a">Въпроси и отговори</Link></li>
                <li><Link to="payment">Опции за плащане</Link></li>
                <li><Link to="problem_payment">Проблем с плащането</Link></li>
              </ul>
            </div>
          ))}
          {["КОНТАКТИ"].map((title, index) => (
            <div className="col" key={index}>
              <h5>{title}</h5>
              <ul>
                <li>Към екипа: <Link to="#">+359-8888-7777-6666</Link></li>
              </ul>
            </div>
          ))}
        </div>

        <div className="copyright">
          <p>Copyright © 2024. All rights reserved</p>
          <ul className="socials">
            <li>
              <Link to="#"><MdFacebook /></Link>
            </li>
            <li>
              <Link to="#"><FaTwitter /></Link>
            </li>
            <li>
              <Link to="#"><FaInstagram /></Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
