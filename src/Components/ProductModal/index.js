import React, { useState, useEffect } from "react";
import { Button, Modal, Carousel } from "react-bootstrap";
import { IoCartSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ginsi from "../../assets/images/ginsi.jpg";
import QuantityBox from "../QuantityBox";
import { Link } from 'react-router-dom';
import { IoInformationCircleOutline } from "react-icons/io5";


const ProductModal = ({ addToCart }) => {

    console.log("addToCart function:", addToCart); // Debug log

    const [show, setShow] = useState(false);
    const navigate = useNavigate();
  
    const product = {
      id: 1,
      name: "Casual Indigo Джинсы",
      price: 14.0,
      image: ginsi,
    };
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const safeAddToCart = addToCart || (() => console.warn("addToCart is not defined"));

    const handleAddToCart = () => {
      safeAddToCart(product);
      navigate("/productModal");
    };
  
    const productImages = [
      { src: ginsi, alt: "Product Front" },
      { src: ginsi, alt: "Product Side" }, // Replace these with actual images
      { src: ginsi, alt: "Product Back" },
      { src: ginsi, alt: "Product Angle" },
    ];
  
    useEffect(() => {
      if (show) {
        magnify("myimage", 3); // Apply magnifier only when modal is visible
      }
    }, [show]);
  
    const magnify = (imgID, zoom) => {
      const img = document.getElementById(imgID);
      if (!img) return;
  
      const glass = document.createElement("DIV");
      glass.setAttribute("class", "img-magnifier-glass");
      img.parentElement.insertBefore(glass, img);
  
      const bw = 3;
      const w = glass.offsetWidth / 2;
      const h = glass.offsetHeight / 2;
  
      glass.style.backgroundImage = `url('${img.src}')`;
      glass.style.backgroundRepeat = "no-repeat";
      glass.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;
  
      const moveMagnifier = (e) => {
        const pos = getCursorPos(e);
        let x = pos.x;
        let y = pos.y;
  
        if (x > img.width - w / zoom) x = img.width - w / zoom;
        if (x < w / zoom) x = w / zoom;
        if (y > img.height - h / zoom) y = img.height - h / zoom;
        if (y < h / zoom) y = h / zoom;
  
        glass.style.left = `${x - w}px`;
        glass.style.top = `${y - h}px`;
        glass.style.backgroundPosition = `-${(x * zoom - w + bw)}px -${
          y * zoom - h + bw
        }px`;
      };
  
      const getCursorPos = (e) => {
        const a = img.getBoundingClientRect();
        const x = e.pageX - a.left - window.pageXOffset;
        const y = e.pageY - a.top - window.pageYOffset;
        return { x, y };
      };
  
      glass.addEventListener("mousemove", moveMagnifier);
      img.addEventListener("mousemove", moveMagnifier);
    };
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Open Modal
        </Button>
  
        <Modal className="productModal" show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4 className="mb-1 font-weight-bold">Casual Индиго Джинсы</h4>
            </Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <div className="row mt-2 productDetailModal">
              <div className="col-md-5">
                <Carousel interval={null} indicators={false} className="product-carousel">
                  {productImages.map((image, index) => (
                    <Carousel.Item key={index}>
                      <div className="img-magnifier-container">
                        <img
                          id="myimage"
                          src={image.src}
                          width="400"
                          height="400"
                          alt={image.alt}
                        />
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <div className="col-md-7">
                <div className="d-flex info align-items-center mb-3">
                  <span className="oldPrice lg mr-2">$20.00</span>
                  <span className="netPrice text-danger lg">${product.price}</span>
                </div>
                <span className="badge bg-success">IN STOCK</span>
                <p className="mt-3">
                  За да удължите живота на вашите дънкови дрехи, винаги перете на
                  ниска температура и обърнати на обратно. По този начин не само
                  запазвате цвета и тъканта, но и намалявате употребата на
                  електрическа енергия.
                </p>
                <div className="d-flex align-items-center">
                  <QuantityBox />
                  <Link to="/cart"><Button
                    className="btn-blue btn-lg btn-big btn-round ml-3"
                    onClick={handleAddToCart} 
                  >
                    <IoCartSharp /> Add to Cart
                  </Button></Link>
                 
                </div>
  
                <div className="d-flex align-items-center mt-5 action">
                  <Button
                    className="btn-round btn-sml"
                    variant="outlined"
                  >
                    <FaRegHeart /> &nbsp;ADD TO WISHLIST
                  </Button>
                  <Button
                    className="btn-round btn-sml ml-3"
                    variant="outlined"
                  >
                    <MdOutlineCompareArrows /> &nbsp;COMPARE
                  </Button>
                  <Link to="/product/:id"><Button
                    className="btn-round btn-sml ml3"
                    variant="outlined"
                    >
                      <IoInformationCircleOutline></IoInformationCircleOutline>  &nbsp;INFO
                    </Button></Link>
                </div>
              </div>
            </div>
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  
  export default ProductModal;

