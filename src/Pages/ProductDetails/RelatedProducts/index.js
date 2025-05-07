import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProductItem from '../../../Components/ProductItem/ProductItem';
import { Button } from 'react-bootstrap';
import { FaArrowRightLong } from "react-icons/fa6";

const RelatedProducts = () =>{
    return(
        <>

        <div className="d-flex align-items-center mt-3">
            <div className="info w-75 hd">
                <h3 className="mb-0">BEST SELLER</h3>
                <p className="text-light text-sml mb-0">Do not miss the current offers until the end of January.</p>
            </div>

            <Button className="viewAllBtn ml-auto">View All <FaArrowRightLong className="ml-2"></FaArrowRightLong></Button>

        </div>

        <div className="product_row_ w-100 mt-4">
                            <Swiper
                                slidesPerView={5}
                                spaceBetween={0}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Navigation]}
                                className="mySwiper"
                            >

                                    <SwiperSlide>
                                        <ProductItem></ProductItem>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem></ProductItem>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem></ProductItem>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem></ProductItem>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem></ProductItem>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem></ProductItem>
                                    </SwiperSlide>

                                   
                                </Swiper>
        </div>


        <div className="d-flex align-items-center mt-3 mt-5">
            <div className="info w-75 hd">
                <h3 className="mb-0">RECENTLY VIEWED PRODUCTS</h3>
                <p className="text-light text-sml mb-0">Do not miss the current offers until the end of March.</p>
            </div>

            <Button className="viewAllBtn ml-auto">View All <FaArrowRightLong className="ml-2"></FaArrowRightLong></Button>

        </div>

        <div className="product_row_ w-100 mt-4">
                            <Swiper
                                slidesPerView={5}
                                spaceBetween={0}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Navigation]}
                                className="mySwiper"
                            >

                                    <SwiperSlide>
                                        <ProductItem></ProductItem>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem></ProductItem>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem></ProductItem>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem></ProductItem>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem></ProductItem>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem></ProductItem>
                                    </SwiperSlide>

                                   
                                </Swiper>
        </div>
        </>
    )
}
export default RelatedProducts;