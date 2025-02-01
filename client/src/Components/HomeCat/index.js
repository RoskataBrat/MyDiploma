import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import vryhna from "../../assets/images/vryhna_dreha.jpg";
import pant from "../../assets/images/pantaloni.jpg";
import denim from "../../assets/images/denim.jpg";

const HomeCat = () =>{

    return(
        <section className="homeCat">
            <div className="container">
            <h3 className="mb-4 hd">Категории</h3>
            <Swiper
                slidesPerView={5}
                spaceBetween={5}
                navigation={true}
                slidesPerGroup={1}
                pagination={{
                clickable: true,
                 }}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="item text-center">
                        <img src={vryhna}></img>
                        <h6>Връхна дреха</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item text-center">
                        <img src={vryhna}></img>
                        <h6>Връхна дреха</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item text-center">
                        <img src={vryhna}></img>
                        <h6>Връхна дреха</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item text-center">
                        <img src={vryhna}></img>
                        <h6>Връхна дреха</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item text-center">
                        <img src={vryhna}></img>
                        <h6>Връхна дреха</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item text-center">
                        <img src={vryhna}></img>
                        <h6>Връхна дреха</h6>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
           </section>
    )
}

export default HomeCat;