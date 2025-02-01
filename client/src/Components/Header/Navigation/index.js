import Button from "react-bootstrap/esm/Button";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    // Toggle Submenu Visibility
    const handleSubmenuToggle = (index) => {
        setActiveSubmenu(activeSubmenu === index ? null : index);
    };

    return (
        <nav className="navigation">
            <div className="container">
                <div className="row align-items-center">
                    {/* Sidebar Toggle Button */}
                    <div className="col-12 col-md-2 navPart1">
                        <div className="catWrapper">
                            <Button
                                className="allCatTab align-items-center"
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            >
                                <span className="icon1 mr-2">
                                    <IoMenu />
                                </span>
                                <span className="text">Всички категории</span>
                                <span className="icon2 ml-2">
                                    <FaAngleDown />
                                </span>
                            </Button>

                            {/* Sidebar */}
                            <div className={`sidebarNav ${isSidebarOpen ? "open" : ""}`}>
                                <ul>
                                    <li>
                                        <Button
                                            className="sidebar-item"
                                            onClick={() => handleSubmenuToggle(0)}
                                        >
                                            Електроника
                                            <FaAngleRight className="angle_right_sidebar" />
                                        </Button>
                                        {/* Submenu */}
                                        <div className={`submenu ${activeSubmenu === 0 ? "open" : ""}`}>
                                            <Link to="/electronics/smartphones"><Button>Смартфони</Button></Link>
                                            <Link to="/electronics/laptops"><Button>Лаптопи</Button></Link>
                                            <Link to="/electronics/pc"><Button>Компютри</Button></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <Button
                                            className="sidebar-item"
                                            onClick={() => handleSubmenuToggle(0)}
                                        >
                                            Мода
                                            <FaAngleRight className="angle_right_sidebar" />
                                        </Button>
                                        {/* Submenu */}
                                        <div className={`submenu ${activeSubmenu === 0 ? "open" : ""}`}>
                                            <Link to="/fashion/t-shirts"><Button>Тениски</Button></Link>
                                            <Link to="/fashion/shoes"><Button>Обувки</Button></Link>
                                            <Link to="/fashion/hats"><Button>Шапки</Button></Link>
                                        </div>
                                    </li>
                                    {/*!!!!!!!!!!!!!!!!!!!!!!!!*/}
                                    <li>
                                        <Button
                                            className="sidebar-item"
                                            onClick={() => handleSubmenuToggle(0)}
                                        >
                                            Пекарна
                                            <FaAngleRight className="angle_right_sidebar" />
                                        </Button>
                                        {/* Submenu */}
                                        <div className={`submenu ${activeSubmenu === 0 ? "open" : ""}`}>
                                            <Link to="/bakery/cakes"><Button>Торти</Button></Link>
                                            <Link to="/bakery/sweets"><Button>Сладкиши</Button></Link>
                                            <Link to="/bakery/bread"><Button>Хляб</Button></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <Button
                                            className="sidebar-item"
                                            onClick={() => handleSubmenuToggle(0)}
                                        >
                                            Хр.стоки
                                            <FaAngleRight className="angle_right_sidebar" />
                                        </Button>
                                        {/* Submenu */}
                                        <div className={`submenu ${activeSubmenu === 0 ? "open" : ""}`}>
                                            <Link to="/grocery/vegetables"><Button>Зеленчуци</Button></Link>
                                            <Link to="/grocery/fruits"><Button>Плодове</Button></Link>
                                            <Link to="/grocery/snacks"><Button>Зърнени култури</Button></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <Button
                                            className="sidebar-item"
                                            onClick={() => handleSubmenuToggle(0)}
                                        >
                                            Други
                                            <FaAngleRight className="angle_right_sidebar" />
                                        </Button>
                                        {/* Submenu */}
                                        <div className={`submenu ${activeSubmenu === 0 ? "open" : ""}`}>
                                            <Link to="/mobiles/accessories"><Button>Аксесоарии</Button></Link>
                                            <Link to="/mobiles/gagets"><Button>Джаджи</Button></Link>
                                            <Link to="/mobiles/cases"><Button>Кейсове</Button></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Horizontal Menu */}
                    <div className="col-12 col-md-10 navPart2 d-flex justify-content-between">
                        <ul className="list list-inline">
                            {[
                                { name: "Начало", path: "/", subItems: [] },
                                { name: "Мода", path: "/fashion", subItems: [
                                    { name: "Тениски", path: "/fashion/t-shirts" },
                                    { name: "Обувки", path: "/fashion/shoes" },
                                    { name: "Шапки", path: "/fashion/hats" },
                                ] },
                                { name: "Електроника", path: "/electronics", subItems: [
                                    { name: "Смартфони", path: "/electronics/smartphones" },
                                    { name: "Лаптопи", path: "/electronics/laptops" },
                                    { name: "Компютри", path: "/electronics/pc" },
                                ] },
                                { name: "Пекарна", path: "/bakery", subItems: [
                                    { name: "Торти", path: "/bakery/cakes" },
                                    { name: "Сладкиши", path: "/bakery/sweets" },
                                    { name: "Хляб", path: "/bakery/bread" },
                                ] },
                                { name: "Хр.стоки", path: "/grocery", subItems: [
                                    { name: "Зеленчуци", path: "/grocery/vegetables" },
                                    { name: "Плодове", path: "/grocery/fruits" },
                                    { name: "Зърнени култури", path: "/grocery/snacks" },
                                ] },
                                { name: "Други", path: "/mobiles", subItems: [
                                    { name: "Аксесоарии", path: "/mobiles/accessories" },
                                    { name: "Джаджи", path: "/mobiles/gagets" },
                                    { name: "Кейсове", path: "/mobiles/cases" },
                                ] },
                                { name: "Свържи се с нас", path: "/contact", subItems: [] },
                            ].map((item, index) => (
                                <li className="list-inline-item nav-item" key={index}>
                                    <Link to={item.path} className="nav-link">
                                        {item.name}
                                    </Link>
                                    {item.subItems.length > 0 && (
                                        <div className="submenu shadow">
                                            {item.subItems.map((subItem, subIndex) => (
                                                <Link to={subItem.path} key={subIndex}>
                                                    <Button>{subItem.name}</Button>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navigation;
