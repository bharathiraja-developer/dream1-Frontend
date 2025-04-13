import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const reviews = [
  {
    name: "Elakkiya Mano",
    comment:
      "Taking photos of infant which is not easier. Arun having more patience and interacted with my baby a lot. Such an amazing photos and an awesome edits. Attached just sample copies. If it is possible I could attach the entire album. Especially the front page of the album is…… literally no words to say. From Bottom of my heart I’m saying this we are really really satisfied. Anybody wants to choose him, you can blindly trust his work and output. Particularly his way of choosing album is another level. Kuddos for the entire team.",
  },
  {
    name: "Kalpana Arumugam",
    comment:
      "It's was so pleasure to choose Dream1 studio....they gave me precious moments of my engagement event...The pics were so attractive...I am very happy to know this dream1studio❤️..Arun was so friendly,,,he plans about the event very and he was so caring about client's requests...And editor kishore I almost tortured him about edited pics and photo album sheets...he was so friendly he kept my words and made my lifetime moments ⚘️so precious... Thank u dream1studio and entire team.",
  },
  {
    name: "Divya balu",
    comment:
      "The friendly approach in this studio and photographer... Good quality and professional .. Clarity is very nice...excellent work",
  },
  {
    name: "Dinesh GMB",
    comment:
      "Your studio photos & album's very nice excellent work totally super....",
  },
  {
    name: "Aravinth VGP",
    comment:
      "Thank you everyone for your for the world to me that you love the images and that you enjoy having me there on you very special day.",
  },
  {
    name: "Krishna Kumar",
    comment:
      "Birthday shoot and baby props studio are superb and interactions are good",
  },
  {
    name: "Gokula Kanna S",
    comment: "Doing good. Keep it up team",
  },
  {
    name: "R Veeramanikandan",
    comment: "Excellent 👌",
  },
  {
    name: "Gangadharan P",
    comment: "Nice experience with Dream1 studio",
  },
];

export default function Reviews() {
  const swiperRef = useRef(null);

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
  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-4 text-white mt-4">
        What Clients Say
      </h2>
      <div
        className="carousel"
        style={{ minHeight: "20vh", marginBottom: "40px" }}
      >
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
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <React.Fragment className="bg-gray-900 rounded-2xl p-6 shadow-lg text-center h-full mx-2 wrap">
                <p className="text-lg italic mb-4 text-white">
                  “{review.comment}”
                </p>
                <h4 className="text-xl font-semibold text-white">
                  {review.name}
                </h4>
              </React.Fragment>
            </SwiperSlide>
          ))}
        </Swiper>

        <MdOutlineNavigateNext className="icon-next" onClick={goToNextSlide} />
      </div>
    </>
  );
}
