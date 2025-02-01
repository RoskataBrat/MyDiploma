import React from "react";
import Slider from "react-slick";
import dynki from "../../assets/images/dynki.jpg";
import esen from "../../assets/images/esen.jpg";
import modno from "../../assets/images/modno.jpg";


const HomeBanner = () =>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true
      };
    return(
        <div className="container mt-3">
            <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src={dynki} className="w-100"></img>
                </div>
                <div className="item">
                    <img src={esen} className="w-100"></img>
                </div>
                <div className="item">
                    <img src={modno} className="w-100"></img>
                </div>
            </Slider>
        </div>
        </div>
    )
}

export default HomeBanner;