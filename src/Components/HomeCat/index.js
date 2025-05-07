import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import vryhna from "../../assets/images/vryhna_dreha.jpg";
import pant from "../../assets/images/pantaloni.jpg";
import denim from "../../assets/images/denim.jpg";
import { Link } from "react-router-dom";

const HomeCat = () => {
    return (
        <section className="homeCat">
            <div className="container">
                <h3 className="mb-4 hd">Категории</h3>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={15}
                    navigation={true}
                    slidesPerGroup={1}
                    pagination={{ clickable: true }}
                    modules={[Navigation]}
                    breakpoints={{
                        // When window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        // When window width is >= 480px
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        // When window width is >= 768px
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        // When window width is >= 1024px
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 25,
                        },
                        // When window width is >= 1200px
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="item text-center">
                        <i class="fa-solid fa-shirt"></i>
                            <li><Link to = "../Fashion"><h6>Дрехи</h6></Link></li>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                        <i class="fa-solid fa-laptop"></i>
                            <li><Link to = "../Electronics"><h6>Техника</h6></Link></li>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                        <i class="fa-solid fa-cake-candles"></i>
                            <li><Link to = "../Bakery"><h6>Пекарна</h6></Link></li>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                        <i class="fa-brands fa-apple"></i>
                            <li><Link to = "../Grocery"><h6>Плодове / Зеленчуци</h6></Link></li>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                        <i class="fa-solid fa-keyboard"></i>
                            <li><Link to = "../Mobiles"><h6>Други</h6></Link></li>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default HomeCat;

