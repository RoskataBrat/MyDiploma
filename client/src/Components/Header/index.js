import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/bacola-logo.png";
import Button from "react-bootstrap/Button";
import CountryDropdown from "../CountryDropdown";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { MyContext } from "../../App"; // Context for global state
import sigma from "../../assets/images/sigmamale.jpg";
import "../../styles/ProfileHeader.css";

const Header = () => {
  const context = useContext(MyContext);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const { cart, likedProducts, user, isLogin, setIsLogin, setUser } = context; // Extract data from context
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0); // Calculate total cart items

  const toggleProfileDropdown = () => setProfileDropdownOpen(!isProfileDropdownOpen);

  const handleLogout = () => {
    setIsLogin(false); // Log out
    setUser(null);
    localStorage.removeItem("token"); // Clear token
    localStorage.removeItem("user"); // Clear user data
    setProfileDropdownOpen(false);
  };

  return (
    <>
      <div className="headerWrapper">
        {/* Top Strip */}
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              !!! WARNING !!! The winter season offers are available to 18.12.2024!!!
            </p>
          </div>
        </div>

        {/* Header Section */}
        <div className="header">
          <div className="container">
            <div className="row">
              {/* Logo */}
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>

              {/* Search, Country Selector, and Cart/Profile Section */}
              <div className="col-sm-10 d-flex align-items-center part2">
                {/* Country Dropdown */}
                {context.countryList.length !== 0 && <CountryDropdown />}
                <CountryDropdown></CountryDropdown>
                {/* Search Box */}
                <SearchBox />

                {/* Cart and Profile Section */}
                <div className="part3 d-flex align-items-center ml-auto">
                  {/* Liked Products */}
                  <Link to="/liked-products" className="liked-button">
                    <i className="fas fa-heart"></i>
                    <span className="liked-count">{likedProducts.length}</span>
                  </Link>

                  {/* Cart Section */}
                  <div className="ml-auto cartTab d-flex align-items-center">
                    <span className="price">$3.29</span>
                    <div className="position-relative ml-2">
                      <Link to="/cart">
                        <Button className="circle ml-2">
                          <IoBagOutline />
                        </Button>
                        <span className="count d-flex align-items-center justify-content-center">
                          {cartItemCount}
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* Profile Section */}
                  {isLogin ? (
                    <div className="profile-section position-relative">
                      <Button
                        className="circle ml-3"
                        onClick={toggleProfileDropdown}
                      >
                        <img
                          src={user?.profileImage || sigma}
                          alt="Profile"
                          className="profile-image rounded-circle"
                        />
                      </Button>

                      {/* Profile Dropdown */}
                      {isProfileDropdownOpen && (
                        <div className="profile-dropdown position-absolute bg-white shadow p-3">
                          <p className="profile-name mb-1">
                            {user?.name || "User"}
                          </p>
                          <p className="profile-email mb-3">
                            {user?.email || "user@example.com"}
                          </p>
                          <Button
                            className="btn-blue btn-round w-100"
                            onClick={handleLogout}
                          >
                            Sign Out
                          </Button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link to="/signIn">
                      <Button className="btn-blue btn-round ml-3">
                        Sign In
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <Navigation />
      </div>
    </>
  );
};

export default Header;


