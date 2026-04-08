import React from "react";
// import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import bannerHero1 from "../../Images/banner_Hero1.jpg";
import bannerHero2 from "../../Images/banner_Hero2.jpg";
import bannerHero3 from "../../Images/banner_Hero3.jpg";
import "./Slider.css";
// import "./responsive.css";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
function Slider() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>
                  Microsoft xbox <br /> 360 Controller
                </h3>
                <p style={{ color: "#7b7b7b" }}>Windows Xp/10/7/8 P3, tv Box</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img
                src={bannerHero1}
                alt="Microsoft Xbox 360 Controller"
                className="slider_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Level up your gaming</h4>
                <h3>
                  Wireless gaming <br /> headset pro
                </h3>
                <p style={{ color: "#7b7b7b" }}>
                  Crystal-clear sound, deep bass, and all-day comfort for every
                  match.
                </p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img
                src={bannerHero2}
                alt="Microsoft Xbox 360 Controller"
                className="slider_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Smart tech, better life</h4>
                <h3>
                  Portable speaker <br /> with premium sound
                </h3>
                <p style={{ color: "#7b7b7b" }}>
                  Compact design, powerful audio, and long battery life for
                  every trip.
                </p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img
                src={bannerHero3}
                alt="Microsoft Xbox 360 Controller"
                className="slider_img"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Slider;
