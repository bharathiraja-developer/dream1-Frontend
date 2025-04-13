import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Reviews.css"; // Import CSS
import image from "../icons/earth.png";
import image2 from "../images/8.mp4";
import image3 from "../images/9.mp4";

const TravelSlider = () => {
  const [rotation, setRotation] = useState(0);

  const handleSwipe = () => {
    setRotation((prevRotation) => prevRotation + 90); // Rotate by 20 degrees per swipe
  };

  return (
    <div
      className="container-fluid bg-black"
      style={{ height: "100vh", marginTop: "60px" }}
    >
      {/* Background Circle */}
      <div className="background-circle">
        <img
          src={image} // Ensure this is correctly imported
          alt="Rotating Background"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.5s ease-in-out",
          }}
        />
      </div>

      {/* Swiper */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={handleSwipe}
        className="swiper-container"
      >
        <SwiperSlide className="slide">
          <img
            src={"https://www.dummyimage.com/600x300/636363/fff"}
            style={{ width: "100px", height: "50px" }}
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src={"https://www.dummyimage.com/600x300/636363/fff"}
            style={{ width: "100px", height: "50px" }}
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src={"https://www.dummyimage.com/600x300/636363/fff"}
            style={{ width: "100px", height: "50px" }}
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src={"https://www.dummyimage.com/600x300/636363/fff"}
            style={{ width: "100px", height: "50px" }}
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src={"https://www.dummyimage.com/600x300/636363/fff"}
            style={{ width: "100px", height: "50px" }}
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src={"https://www.dummyimage.com/600x300/636363/fff"}
            style={{ width: "100px", height: "50px" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TravelSlider;
