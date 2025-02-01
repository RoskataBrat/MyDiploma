import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../ProductData";
import QuantityBox from "../../Components/QuantityBox";
import RelatedProducts from "../../Pages/ProductDetails/RelatedProducts";
import { Button } from "react-bootstrap";
import { BsCartFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { useContext } from "react";
import { MyContext } from "../../App";

const ProductPage = ({ cart, setCart }) => {
    const { productSlug } = useParams();
    const product = products.find((item) => item.slug === productSlug);

    const [selectedSize, setSelectedSize] = useState(null);
    const [activeTab, setActiveTab] = useState("description");
    const [reviews, setReviews] = useState([
        { name: "Rinku Verma", date: "01/03/1993", message: "This is a fantastic product!" },
    ]);
    const [reviewForm, setReviewForm] = useState({ name: "", message: "" });

    const { toggleLikeProduct, likedProducts } = useContext(MyContext);

    const isLiked = likedProducts.some((p) => p.id === product.id);

    // Add product to cart
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
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    // Remove product from cart
    const handleRemoveFromCart = () => {
        setCart(cart.filter((item) => item.id !== product.id));
    };

    if (!product) {
        return <h1>Product Not Found</h1>;
    }

    const isInCart = cart.some((item) => item.id === product.id);

    return (
        <>
            <section className="productDetails section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 pl-5">
                            <img src={product.image} alt={product.name} style={{ width: "100%" }} />
                        </div>
                        <div className="col-md-7 pl-5">
                            <h2 className="hd text-capitalize">{product.name}</h2>
                            <ul className="list list-inline">
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <span className="text mr-2">Brand:</span>
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
                                {product.oldPrice && <span className="oldPrice">${product.oldPrice}</span>}
                                <span className="netPrice text-danger ml-2">${product.price}</span>
                            </div>
                            <span className={`badge ${product.stock ? "badge-success" : "badge-danger"}`}>
                                {product.stock ? "IN STOCK" : "OUT OF STOCK"}
                            </span>
                            <p className="mt-3">{product.description}</p>

                            <div className="d-flex align-items-center">
                                <QuantityBox></QuantityBox>
                                {isInCart ? (
                                    <Button
                                        className="btn-danger btn-lg btn-big btn-round ml-3"
                                        onClick={handleRemoveFromCart}
                                    >
                                        Remove from Cart
                                    </Button>
                                ) : (
                                    <Button
                                        className="btn-blue btn-lg btn-big btn-round ml-3"
                                        onClick={handleAddToCart}
                                    >
                                        <BsCartFill></BsCartFill>&nbsp;&nbsp;&nbsp;Add to Cart
                                    </Button>
                                )}
                                <Button onClick={() => toggleLikeProduct(product)}
                                    className={isLiked ? "liked-button active" : "liked-button"}>
                                    <FaRegHeart></FaRegHeart>{isLiked ? "Liked" : "Like"}
                                </Button>
                                <Button className="btn-blue btn-lg btn-big btn-circle ml-3">
                                    <MdOutlineCompareArrows></MdOutlineCompareArrows>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<RelatedProducts></RelatedProducts>*/}
            </section>
        </>
    );
};

export default ProductPage;

