import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../ProductData";
import QuantityBox from "../../Components/QuantityBox";
import { Button } from "react-bootstrap";
import { BsCartFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { MyContext } from "../../App";
import "../../styles/ProductPage.css";

const ProductPage = ({ cart, setCart }) => {
    const { productSlug } = useParams();
    const product = products.find((item) => item.slug === productSlug);

    const [selectedSize, setSelectedSize] = useState(null);
    const [reviews, setReviews] = useState([]); // Array of reviews
  const [comment, setComment] = useState(""); // Input for the new comment
  const [name, setName] = useState(""); // Input for the reviewer's name
  const [ratings, setRatings] = useState([]); // Array of ratings
  const [selectedTab, setSelectedTab] = useState("comment"); // Active tab: "comment" or "rating"
  const [rating, setRating] = useState(0); // Selected star rating

  // Handle submitting a new review
  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (name.trim() && comment.trim()) {
      const newReview = {
        id: Date.now(),
        name: name.trim(),
        comment: comment.trim(),
      };

      setReviews([...reviews, newReview]); // Add the new review to the list
      setComment(""); // Clear the input fields
      setName("");
    }
  };

  // Handle submitting a new rating
  const handleSubmitRating = (e) => {
    e.preventDefault();
    if (rating > 0) {
      setRatings([...ratings, rating]); // Add the new rating to the list
      setRating(0); // Reset the selected rating
    }
  };

  // Calculate average rating
  const calculateAverageRating = () => {
    if (ratings.length === 0) return 0;
    const total = ratings.reduce((sum, r) => sum + r, 0);
    return (total / ratings.length).toFixed(1);
  };

    const { toggleLikeProduct, likedProducts } = useContext(MyContext);

    const isLiked = likedProducts.some((p) => p.id === product.id);

    const handleAddToCart = () => {
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1, size: selectedSize }]);
        }
    };

    const handleRemoveFromCart = () => {
        setCart(cart.filter((item) => item.id !== product.id));
    };

    // Scroll to top when the component mounts
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    if (!product) {
        return <h1>Продуктът не е намерен</h1>;
    }

    const isInCart = cart.some((item) => item.id === product.id);

    // Check if the product is clothing safely
    const isClothing =
        product.category &&
        ["tshirt", "shirt", "hat", "jacket"].some((category) =>
            product.category.toLowerCase().includes(category)
        );

    // Check if the product is clothing safely
    const isClothingForShoes =
        product.category &&
        ["shoes"].some((category) =>
            product.category.toLowerCase().includes(category)
        );

    // Check if the product is clothing safely
    const isClothingForFood =
        product.category &&
        ["fruits","vegetables","beansgoods"].some((category) =>
            product.category.toLowerCase().includes(category)
        );

    return (
        <>
            <section className="productDetails section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 pl-5">
                            <Zoom>
                                <img src={product.image} alt={product.name} style={{ width: "100%" }} />
                            </Zoom>
                        </div>
                        <div className="col-md-7 pl-5">
                            <h2 className="hd text-capitalize">{product.name}</h2>
                            <ul className="list list-inline">
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <span className="text mr-2">Бранд:</span>
                                        <span>{product.brand || "Unknown"}</span>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <span className="text mr-2">SKU:</span>
                                        <span>{product.sku || "N/A"}</span>
                                    </div>
                                </li>
                            </ul>
                            <div className="d-flex info mb-3">
                                {product.oldPrice && <span className="oldPrice">{product.oldPrice} лв.</span>}
                                <span className="netPrice text-danger ml-2">{product.price} лв.</span>
                            </div>
                            <span className={`badge ${product.stock ? "badge-success" : "badge-danger"}`}>
                                {product.stock ? "НАЛИЧЕН" : "ИЗЧЕРПАН"}
                            </span>
                            <p className="mt-3">{product.description}</p>

                            {/* Size Options for Clothing */}
                            {isClothing && (
                                <div className="mt-4">
                                    <h5>Избери размер:</h5>
                                    <div className="d-flex">
                                        {["S", "M", "L", "XL", "XXL"].map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`btn btn-outline-primary mr-2 ${
                                                    selectedSize === size ? "active" : ""
                                                }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                    {selectedSize === null && (
                                        <p className="text-danger mt-2">Моля изберете размер</p>
                                    )}
                                </div>
                            )}

                            {/* Size Options for Shoes */}
                            {isClothingForShoes && (
                                <div className="mt-4">
                                    <h5>Избери размер:</h5>
                                    <div className="d-flex">
                                        {["37","38","39","40","41","42","43","44","45","46","47",].map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`btn btn-outline-primary mr-2 ${
                                                    selectedSize === size ? "active" : ""
                                                }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                    {selectedSize === null && (
                                        <p className="text-danger mt-2">Моля изберете размер</p>
                                    )}
                                </div>
                            )}

                            {/* Size Options for Food */}
                            {isClothingForFood && (
                                <div className="mt-4">
                                    <h5>Избери грамаж:</h5>
                                    <div className="d-flex">
                                        {["200g","500g","1kg","2kg",].map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`btn btn-outline-primary mr-2 ${
                                                    selectedSize === size ? "active" : ""
                                                }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                    {selectedSize === null && (
                                        <p className="text-danger mt-2">Моля изберете грамаж</p>
                                    )}
                                </div>
                            )}

                            <div className="d-flex align-items-center mt-4">
                                {isInCart ? (
                                    <Button
                                        className="btn-danger btn-lg btn-big btn-round ml-3"
                                        onClick={handleRemoveFromCart}
                                    >
                                        Премахни от количката
                                    </Button>
                                ) : (
                                    <Button
                                        className="btn-blue btn-lg btn-big btn-round ml-3"
                                        onClick={handleAddToCart}
                                        disabled={isClothing && selectedSize === null || isClothingForShoes && selectedSize === null || isClothingForFood && selectedSize === null}
                                    >
                                        <BsCartFill />&nbsp;&nbsp;&nbsp;Добави в количката
                                    </Button>
                                )}
                                <Button onClick={() => toggleLikeProduct(product)}
                                    className={isLiked ? "liked-button active" : "liked-button"}>
                                    <FaRegHeart />{isLiked ? "Liked" : "Like"}
                                </Button>
                                {!<Button className="btn-blue btn-lg btn-big btn-circle ml-3">
                                    <MdOutlineCompareArrows />
                                </Button>}
                            </div>
                            {!<div className="product-page-container">

                                {/* Average Rating Display */}
                                <div className="average-rating">
                                    <h3>Средна оценка: {calculateAverageRating()} / 5</h3>
                                    <p>({ratings.length} оценки)</p>
                                </div>

                                {/* Tab Navigation */}
                                <div className="tab-nav">
                                    <button
                                    className={selectedTab === "comment" ? "active" : ""}
                                    onClick={() => setSelectedTab("comment")}
                                    >
                                    Напиши коментар
                                    </button>
                                    <button
                                    className={selectedTab === "rating" ? "active" : ""}
                                    onClick={() => setSelectedTab("rating")}
                                    >
                                    Оцени продукта
                                    </button>
                                </div>

                                {/* Tab Content */}
                                {selectedTab === "comment" && (
                                    <div className="tab-content">
                                    <h2>Коментари</h2>
                                    <ul className="review-list">
                                        {reviews.length > 0 ? (
                                        reviews.map((review) => (
                                            <li key={review.id} className="review-item">
                                            <strong>{review.name}:</strong> {review.comment}
                                            </li>
                                        ))
                                        ) : (
                                        <p>Няма коментари още. Коментирай първи!</p>
                                        )}
                                    </ul>

                                    <form className="review-form" onSubmit={handleSubmitReview}>
                                        <h3>Напиши коментар</h3>
                                        <input
                                        type="text"
                                        placeholder="Име"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        />
                                        <textarea
                                        placeholder="Коментирай"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        required
                                        ></textarea>
                                        <button type="submit">Изпрати</button>
                                    </form>
                                    </div>
                                )}

                                {selectedTab === "rating" && (
                                    <div className="tab-content">
                                    <h2>Оцени продукта</h2>
                                    <form className="rating-form" onSubmit={handleSubmitRating}>
                                        <div className="stars">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <span
                                            key={star}
                                            className={rating >= star ? "star selected" : "star"}
                                            onClick={() => setRating(star)}
                                            >
                                            ★
                                            </span>
                                        ))}
                                        </div>
                                        <button type="submit">Изпрати оценката</button>
                                    </form>
                                    </div>
                                )}
                                </div>
                            }</div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductPage;




