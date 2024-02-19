import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

export const Carousel = ({ items }) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {items?.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.href} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
