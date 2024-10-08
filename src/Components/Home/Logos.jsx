import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';

import "./logos.css"

const Logos = () => {
  return (
    <>
      <div className='container-fluid bg-dark'>
        <div className='row'>
          <div className='col'>
            <div className='d-flex flex-wrap justify-content-center align-items-center py-3'>
              <Swiper
                className="mySwiper"
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={{ 
                  delay: 3000,  
                  disableOnInteraction: false 
                }}
              >

                <SwiperSlide><p className="m-0 fs-3">30% OFF</p></SwiperSlide>
                <SwiperSlide><p className="m-0 fs-3">FREE HOMEDELIVERY</p></SwiperSlide>
                <SwiperSlide><p className="m-0 fs-3">BUMPER WINTER OFFER</p></SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logos;
