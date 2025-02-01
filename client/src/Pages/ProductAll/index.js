import React, { useState, useEffect } from 'react';
import { Button, Modal, Carousel } from 'react-bootstrap';
import ginsi from "../../assets/images/ginsi.jpg"; // Уверете се, че пътят е коректен
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";

const ProductAll = ()=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const productImages = [
        { src: ginsi, alt: "Product Front" },
        { src: ginsi, alt: "Product Side" }, // Replace these with actual images
        { src: ginsi, alt: "Product Back" },
        { src: ginsi, alt: "Product Angle" }
    ];

    useEffect(() => {
        if (show) {
            magnify("myimage", 3); // Приложи функцията, когато модалът е видим
        }
    }, [show]);

    function magnify(imgID, zoom) {
        var img, glass, w, h, bw;
        img = document.getElementById(imgID);

        if (!img) return; // Предпазва от грешки, ако изображението не е намерено

        /* Създаване на увеличител: */
        glass = document.createElement("DIV");
        glass.setAttribute("class", "img-magnifier-glass");

        /* Вмъкване на увеличител: */
        img.parentElement.insertBefore(glass, img);

        /* Настройки за увеличителя: */
        glass.style.backgroundImage = "url('" + img.src + "')";
        glass.style.backgroundRepeat = "no-repeat";
        glass.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;
        bw = 3;
        w = glass.offsetWidth / 2;
        h = glass.offsetHeight / 2;

        /* Добавяне на слушатели за събития: */
        function moveMagnifier(e) {
            var pos, x, y;
            e.preventDefault();
            pos = getCursorPos(e);
            x = pos.x;
            y = pos.y;

            /* Позициониране на увеличителя: */
            if (x > img.width - w / zoom) x = img.width - w / zoom;
            if (x < w / zoom) x = w / zoom;
            if (y > img.height - h / zoom) y = img.height - h / zoom;
            if (y < h / zoom) y = h / zoom;

            glass.style.left = `${x - w}px`;
            glass.style.top = `${y - h}px`;
            glass.style.backgroundPosition = `-${(x * zoom - w + bw)}px -${(y * zoom - h + bw)}px`;
        }

        function getCursorPos(e) {
            var a, x = 0, y = 0;
            e = e || window.event;
            a = img.getBoundingClientRect();
            x = e.pageX - a.left - window.pageXOffset;
            y = e.pageY - a.top - window.pageYOffset;
            return { x: x, y: y };
        }

        glass.addEventListener("mousemove", moveMagnifier);
        img.addEventListener("mousemove", moveMagnifier);
    }

    return(
    <>
                <div className='badge badge-primary'>23%</div>
                    <div className='row mt-2 productDetailModal'>
                        <div className='col-md-5' style={{width:'80%'}}>
                            <Carousel interval={null} indicators={false} className="product-carousel">
                                {productImages.map((image, index) => (
                                    <Carousel.Item key={index}>
                                        <div className="img-magnifier-container">
                                            <img id="myimage" src={ginsi} width="400" height="400" alt={image.alt} />
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </div>
    </>
    )
}
export default ProductAll;