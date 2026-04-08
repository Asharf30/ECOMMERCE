import React from "react";
import Product from "./Product";
import "./SlideProduct.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";


function SlideProduct({ data, title }) {
  return (
    <div className="slide_products slide">
      <div className="container">
        <div className="top_slide">
          <h2 style={{ fontSize: "32px", textTransform: "capitalize" }}>
            {title}
          </h2>
          <p style={{ color: " #7b7b7b" }}>
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div>
          <Swiper
            loop={true}
            autoplay={{
              delay: 1000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            slidesPerView={2}
            slidesPerGroup={1}
            spaceBetween={12}
            speed={600}
            navigation={true}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 14 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 18 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            className="productSwiper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <Product item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default SlideProduct;
