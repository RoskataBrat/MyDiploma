import ProductItem from "../../Components/ProductItem/ProductItem";
import ProductModal from "../../Components/ProductModal";
import QuantityBox from "../../Components/QuantityBox";
import ProductAll from "../ProductAll";
import { Button } from "react-bootstrap";
import { BsCartFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import React, { useState } from 'react';
import RelatedProducts from "./RelatedProducts";


const ProductDetails = () =>{

    const [selectedSize, setSelectedSize] = useState(null); // State to track the selected size

    const handleSizeClick = (size) => {
        setSelectedSize(size); // Update the selected size
    };

    const [activeTab, setActiveTab] = useState('description');
    const [reviews, setReviews] = useState([
        { name: 'Rinku Verma', date: '01/03/1993', message: 'This is a fantastic product!' },
    ]);
    const [reviewForm, setReviewForm] = useState({ name: '', message: '' });

    const handleReviewSubmit = (e) => {
        e.preventDefault();

        if (reviewForm.name && reviewForm.message) {
        // Add the new review to the list
        setReviews([
            ...reviews,
            {
            name: reviewForm.name,
            date: new Date().toLocaleDateString(),
            message: reviewForm.message,
            },
        ]);
        // Reset the form
        setReviewForm({ name: '', message: '' });
        }
    };
      
    return(
        <>
        <section className="productDetails section">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 pl-5">
                        <ProductAll></ProductAll>
                    </div>

                    <div className="col-md-7 pl-5">
                        <h2 className="hd text-capitalize">Индиго Джинси</h2>
                        <ul className="list list-inline">
                            <li className="list-inline-item">
                                <div className="d-flex align-items-center">
                                    <span className="text mr-2">Brand : </span>
                                    <span>Welch's</span>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <div className="d-flex align-items-center">
                                    <span className="text mr-2">SKU : </span>
                                    <span>SHSHSHHSHS</span>
                                </div>
                            </li>
                        </ul>
                        <div className="d-flex info mb-3">
                            <span className="oldPrice">$20.00</span>
                            <span className="netPrice text-danger ml-2">$14.00</span>
                        </div>
                        <span className="badge badge-success">IN STOCK</span>
                        <p className='mt-3'>За да удължите живота на вашите дънкови дрехи, винаги перете на ниска температура и обърнати на обратно. 
                                По този начин не само запазвате цвета и тъканта, но и намалявате употребата на електическа енергия.
                        </p>

                        <div class="selection-container">
                            <div className="size-container">
                                <p className="size-title">Размер:</p>
                                <div className="size-options">
                                    {['S', 'M', 'L', 'XL', '2XL'].map((size) => (
                                    <div
                                        key={size}
                                        className={`size-box ${selectedSize === size ? 'selected' : ''}`}
                                        onClick={() => handleSizeClick(size)}
                                    >
                                        {size}
                                    </div>
                                    ))}
                                </div>
                            </div>

                           
                            <div class="color-container">
                                <p class="color-title">Цвят:</p>
                                <div class="color-options">
                                    <div class="color-box" style={{background: '#000'}} title="Черно"></div>
                                    <div class="color-box" style={{background: '#fff'}} title="Бяло"></div>
                                    <div class="color-box" style={{background: '#FF0000'}} title="Червено"></div>
                                    <div class="color-box" style={{background: '#0066FF'}} title="Синьо"></div>
                                    <div class="color-box" style={{background: '#33FF00'}} title="Зелено"></div>
                                </div>
                            </div>
                        </div>



                        <div className="d-flex align-items-center">
                            <QuantityBox></QuantityBox>
                            <Button className='btn-blue btn-lg btn-big btn-round ml-3'><BsCartFill></BsCartFill>&nbsp;&nbsp;&nbsp;Add to Cart</Button>
                            <Button className='btn-blue btn-lg btn-big btn-circle ml-3'><FaRegHeart></FaRegHeart></Button>
                            <Button className='btn-blue btn-lg btn-big btn-circle ml-3'><MdOutlineCompareArrows></MdOutlineCompareArrows></Button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container-review">
                <div className="product-details-container">
                    {/* Tabs */}
                    <div className="tabs">
                        <button
                        className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
                        onClick={() => setActiveTab('description')}
                        >
                        Description
                        </button>
                        <button
                        className={`tab-button ${activeTab === 'additional' ? 'active' : ''}`}
                        onClick={() => setActiveTab('additional')}
                        >
                        Additional Info
                        </button>
                        <button
                        className={`tab-button ${activeTab === 'reviews' ? 'active' : ''}`}
                        onClick={() => setActiveTab('reviews')}
                        >
                        Reviews ({reviews.length})
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="tab-content">
                        {activeTab === 'description' && (
                        <div>
                            <p>This product is crafted with high-quality materials and offers exceptional durability.</p>
                        </div>
                        )}
                        {activeTab === 'additional' && (
                        <div>
                            <p>Dimensions: 10 x 15 x 20 cm. Weight: 1.5 kg. Material: Stainless steel.</p>
                        </div>
                        )}
                        {activeTab === 'reviews' && (
                        <div className="reviews-tab">
                            {/* Customer Reviews */}
                            <div className="reviews-section">
                            <h3>Customer reviews</h3>
                            <div className="review-summary">
                                <span>4.8 out of 5</span>
                                <div className="stars">★★★★☆</div>
                            </div>
                            <div className="rating-bars">
                                {['5', '4', '3', '2', '1'].map((star, index) => (
                                <div className="rating-bar" key={index}>
                                    <span>{star} star</span>
                                    <div className="bar">
                                    <div className="fill" style={{ width: `${Math.random() * 100}%` }}></div>
                                    </div>
                                </div>
                                ))}
                            </div>

                            {/* Reviews List */}
                            <div className="qa-section">
                                {reviews.map((review, index) => (
                                <div className="qa" key={index}>
                                    <strong>{review.name}</strong> <span>{review.date}</span>
                                    <p>{review.message}</p>
                                </div>
                                ))}
                            </div>
                            </div>

                            {/* Add a Review */}
                            <div className="add-review">
                            <h3>Write a review</h3>
                            <form onSubmit={handleReviewSubmit}>
                                <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={reviewForm.name}
                                    onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                                    placeholder="Enter your name"
                                    required
                                />
                                </div>
                                <div className="form-group">
                                <label htmlFor="message">Your Review</label>
                                <textarea
                                    id="message"
                                    value={reviewForm.message}
                                    onChange={(e) => setReviewForm({ ...reviewForm, message: e.target.value })}
                                    placeholder="Write your review"
                                    required
                                ></textarea>
                                </div>
                                <button type="submit" className="submit-button">
                                Submit Review
                                </button>
                            </form>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>

            <RelatedProducts></RelatedProducts>

        </section>
        </>
    )
}

export default ProductDetails;