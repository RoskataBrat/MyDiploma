import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Listing from "./Pages/Listing";
import ProductPage from "./Components/ProductPage";
import AboutUs from "./Pages/AboutUs";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ProductModal from "./Components/ProductModal";
import Checkout from "./Pages/Checkout";
import Electronics from "./Components/Electronics";
import Fashion from "./Components/Fashion";
import Bakery from "./Components/Bakery";
import Grocery from "./Components/Grocery";
import Mobiles from "./Components/Mobiles";
import Smartphones from "./Pages/Smartphones";
import Laptops from "./Pages/Laptops";
import PC from "./Pages/PC";
import T_Shirts from "./Pages/T-Shirts";
import Shoes from "./Pages/Shoes";
import Hats from "./Pages/Hats";
import Cakes from "./Pages/Cakes";
import products from "./Components/ProductData";
import LikedProducts from "./Components/LikedProducts";
import Sweets from "./Pages/Sweets";
import Bread from "./Pages/Bread";
import Vegetables from "./Pages/Vegetables";
import Fruits from "./Pages/Fruits";
import CornyFoods from "./Pages/CornyFoods";
import Accessories from "./Pages/Accessories";
import Gagets from "./Pages/Gagets";
import Cases from "./Pages/Cases";
import ProductsPage from "./Components/ProductsPage";

// Create context for global state management
export const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState("");
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [cart, setCart] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  

  useEffect(() => {
  }, []);

  const addToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);

    if (productToAdd) {
      setCart((prevCart) => {
        const existingProduct = prevCart.find(
          (product) => product.id === productToAdd.id
        );
        if (existingProduct) {
          return prevCart.map((product) =>
            product.id === productToAdd.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          );
        } else {
          return [...prevCart, { ...productToAdd, quantity: 1 }];
        }
      });
    }
  };

  const toggleLikeProduct = (product) => {
    setLikedProducts((prevLikedProducts) => {
      const isAlreadyLiked = prevLikedProducts.find((p) => p.id === product.id);
      if (isAlreadyLiked) {
        return prevLikedProducts.filter((p) => p.id !== product.id); // Remove from liked
      } else {
        return [...prevLikedProducts, product]; // Add to liked
      }
    });
  };

  const values = {
    countryList,
    setselectedCountry,
    selectedCountry,
    isOpenProductModal,
    setisOpenProductModal,
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isLogin,
    setIsLogin,
    cart,
    setCart,
    addToCart,
    likedProducts,
    setLikedProducts,
    toggleLikeProduct,
    user,
    setUser
  };

  return (
    <MyContext.Provider value={values}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cat/:id" element={<Listing />} />
          <Route path="/products" element={<ProductsPage></ProductsPage>}></Route>
          <Route
            path="/product/:productSlug"
            element={<ProductPage cart={cart} setCart={setCart} />}
          />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route
            path="/signin"
            element={isLogin ? <Navigate to="/" /> : <SignIn />}
          />
          <Route
            path="/signup"
            element={isLogin ? <Navigate to="/" /> : <SignUp />}
          />
          <Route
            path="/checkout"
            element={isLogin ? <Checkout /> : <Navigate to="/signin" />}
          />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/electronics/smartphones" element={<Smartphones />} />
          <Route path="/electronics/laptops" element={<Laptops />} />
          <Route path="/electronics/pc" element={<PC />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/fashion/t-shirts" element={<T_Shirts />} />
          <Route path="/fashion/shoes" element={<Shoes />} />
          <Route path="/fashion/hats" element={<Hats />} />
          <Route path="/bakery" element={<Bakery />} />
          <Route path="/bakery/cakes" element={<Cakes></Cakes>}></Route>
          <Route path="/bakery/sweets" element={<Sweets></Sweets>}></Route>
          <Route path="/bakery/bread" element={<Bread></Bread>}></Route>
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/grocery/vegetables" element={<Vegetables></Vegetables>}></Route>
          <Route path="/grocery/fruits" element={<Fruits></Fruits>}></Route>
          <Route path="/grocery/snacks" element={<CornyFoods></CornyFoods>}></Route>
          <Route path="/mobiles" element={<Mobiles></Mobiles>} />
          <Route path="/mobiles/accessories" element={<Accessories></Accessories>} />
          <Route path="/mobiles/gagets" element={<Gagets></Gagets>} />
          <Route path="/mobiles/cases" element={<Cases></Cases>} />
          <Route path="/contact" element={<AboutUs />} />
          <Route
            path="/liked-products"
            element={<LikedProducts />}
          />
        </Routes>
        <Footer />
        {isOpenProductModal && <ProductModal addToCart={addToCart} />}
      </Router>
    </MyContext.Provider>
  );
}

export default App;
