import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./ImageSlider.css";
import image1 from "../images/7.mp4";
import image2 from "../images/8.mp4";
import image3 from "../images/9.mp4";
import image4 from "../images/10.mp4";
import image5 from "../images/11.mp4";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image1,
  image2,
  image3,
  image4,
  image5,
];

const ImageSlider = () => {
  return (
    <>
      <div className="slider-container">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 150, // Change video every 5 seconds
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile
            480: { slidesPerView: 2 }, // Small tablets
            768: { slidesPerView: 3 }, // Tablets
            1024: { slidesPerView: 4 }, // Laptops
            1200: { slidesPerView: 5 }, // Large screens
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <video
                className="slider-video border border-light border-3"
                muted
                loop
              >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="slider-container">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 150, // Change video every 5 seconds
            disableOnInteraction: false,
            reverseDirection: true,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile
            480: { slidesPerView: 2 }, // Small tablets
            768: { slidesPerView: 3 }, // Tablets
            1024: { slidesPerView: 4 }, // Laptops
            1200: { slidesPerView: 5 }, // Large screens
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <video
                className="slider-video border border-light border-3"
                muted
                loop
              >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ImageSlider;
