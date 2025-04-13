import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  EffectCoverflow,
  Autoplay,
  Keyboard,
} from "swiper/modules";
import { MdOutlineNavigateNext, MdMenu } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Carousel.css";
import image1 from "../images/7.mp4";
import image2 from "../images/8.mp4";
import image3 from "../images/9.mp4";
import image4 from "../images/10.mp4";
import image5 from "../images/11.mp4";
import image6 from "../images/12.mp4";

import { Link } from "react-router-dom";
import NavCnt from "../Components/NavCnt";
import ImageSlider from "./ImageSlider";
import Reviews from "../Components/Reviews";
const slider = [image1, image2, image3, image4, image5, image6];

const Carousel = ({ navIcon, setNavIcon }) => {
  const swiperRef = useRef(null);
  const youtubeRef = useRef(null);

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToYtNextSlide = () => {
    if (youtubeRef.current) {
      youtubeRef.current.swiper.slideNext();
    }
  };
  const goToYtPrevSlide = () => {
    if (youtubeRef.current) {
      youtubeRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="container-fluid bg-black merienda-dream1">
      {navIcon ? (
        <>
          <div className="carousel">
            <GrFormPrevious className="icon-prev" onClick={goToPrevSlide} />
            <Swiper
              ref={swiperRef}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              breakpoints={{
                320: { slidesPerView: 1 }, // 1 slide for small screens
                640: { slidesPerView: 2 }, // 2 slides for medium screens
                1024: { slidesPerView: 3 }, // 3 slides for larger screens
                1440: { slidesPerView: 3 }, // 4 slides for extra-large screens
              }}
              loop={true}
              loopFillGroupWithBlank={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              lazy={true}
              preloadImages={false}
              watchSlidesVisibility={true}
              watchSlidesProgress={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={1000}
              pagination={true}
              modules={[EffectCoverflow, Autoplay]}
              className="mySwiper"
            >
              {slider.map((slide, index) => (
                <SwiperSlide key={index} style={{ position: "relative" }}>
                  <video
                    src={slide}
                    autoPlay
                    loop
                    muted
                    style={{ width: "100%", height: "100%" }}
                  />
                </SwiperSlide>
              ))}
              <div className="button-container">
                <Link
                  to="/packages"
                  className="btn btn-outline-light rounded-pill responsive-button"
                  style={{
                    textDecoration: "none", // Remove the underline
                    // color: "inherit", // Inherit the color from the parent element (e.g., black or white)
                  }}
                >
                  Packages
                </Link>
                {/* <button
                  className="btn btn-outline-light rounded-pill responsive-button"
                  onClick={() => console.log("Button 1 clicked")}
                >
                  Packages
                </button> */}
                <a
                  className="btn btn-outline-light rounded-pill responsive-button"
                  href="https://api.whatsapp.com/send?phone=917010473169&text=Hi%20Dream1%20studio!%0A%0AI%20am%20interested%20in%20your%20services,%20and%20need%20to%20know%20about%20pricing%20details."
                  target="_blank"
                >
                  Book Now
                </a>
                <button
                  className="btn btn-outline-light rounded-pill responsive-button"
                  onClick={() => console.log("Button 3 clicked")}
                >
                  Gallery
                </button>
              </div>
            </Swiper>

            <MdOutlineNavigateNext
              className="icon-next"
              onClick={goToNextSlide}
            />
          </div>
          <div
            style={{
              position: "relative",
              // paddingBottom: "56.25%",
              // height: "50px",
              // overflow: "hidden",
              marginTop: "55px",
            }}
          >
            <GrFormPrevious className="icon-prev1" onClick={goToYtPrevSlide} />
            <div className="carouselYt">
              <Swiper
                ref={youtubeRef}
                effect={"keyboard"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                loop={true}
                loopFillGroupWithBlank={true}
                lazy={true}
                preloadImages={false}
                watchSlidesVisibility={true}
                watchSlidesProgress={true}
                speed={700}
                pagination={true}
                modules={[Keyboard]}
                className="mySwiper1"
              >
                <SwiperSlide
                  style={{ position: "relative" }}
                  className="swiper-slide1"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/tiLAm_FXE-E`}
                    title="YouTube Video"
                    style={{
                      position: "relative",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="iframe-responsive"
                    allowFullScreen
                  ></iframe>
                </SwiperSlide>
                <SwiperSlide
                  style={{ position: "relative" }}
                  className="swiper-slide1"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/i1bVJROZxYw`}
                    title="YouTube Video"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="iframe-responsive"
                  ></iframe>
                </SwiperSlide>
              </Swiper>
            </div>
            <MdOutlineNavigateNext
              className="icon-next1"
              onClick={goToYtNextSlide}
            />
          </div>
          {/* <div
            style={{
              position: "relative",
              //   // paddingBottom: "56.25%",
              //   // height: 0,
              //   // overflow: "hidden",
              //   // marginTop: "55px",
            }}
            class="elfsight-app-73df6445-cda4-4d6c-b83e-b9a78f156e51"
            data-elfsight-app-lazy
          ></div> */}
          <Reviews />

          <div className="location-section merienda-dream1 text-white">
            {/* <h2 className="location-heading">Our Location</h2> */}
            <div className="map-container">
              <div className="address-container">
                <h3>Dream1 Studio in Mannargudi</h3>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.909435051036!2d79.44682809999999!3d10.664137499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a554d9210e5723d%3A0xa3a08ab9f1f288be!2sDream1%20Studio!5e0!3m2!1sen!2sin!4v1737898765618!5m2!1sen!2sin"
                style={{
                  border: "0",
                  width: "80%",
                  height: "450px",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </>
      ) : (
        <NavCnt navIcon={navIcon} setNavIcon={setNavIcon} />
      )}
    </div>
  );
};

export default Carousel;
