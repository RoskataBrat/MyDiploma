import React from "react";
import Slider from "react-slick";
import dynki from "../../assets/images/dynki.jpg";
import esen from "../../assets/images/esen.jpg";
import modno from "../../assets/images/modno.jpg";
import new_season_first from "../../assets/images/new_season_1.webp";
import new_season_second from "../../assets/images/new_season_2.webp";
import new_season_third from "../../assets/images/new_season_3.webp";
import spring_offers from "../../assets/images/spring_offers.webp";

const HomeBanner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true, // Enables autoplay
        autoplaySpeed: 3000, // Time between slides in milliseconds (e.g., 3 seconds)
    };

    return (
        <div className="container mt-3">
            <div className="homeBannerSection">
                <Slider {...settings}>
                    <div className="item">
                        <img src={spring_offers} alt="Dynki Banner" className="w-100" />
                    </div>
                    <div className="item">
                        <img src={new_season_first} alt="Esen Banner" className="w-100" />
                    </div>
                    <div className="item">
                        <img src={new_season_second} alt="Modno Banner" className="w-100" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default HomeBanner;
