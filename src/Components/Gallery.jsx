import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";
import "./Gallery.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

const images = [
  { src: ".././Gallery/1.jpg", alt: "Flag of India" },
  { src: ".././Gallery/2.jpg", alt: "2" },
  { src: ".././Gallery/3.jpg", alt: "3" },
  { src: ".././Gallery/4.jpg", alt: "4" },
  { src: ".././Gallery/5.jpg", alt: "5" },
  { src: ".././Gallery/6.jpg", alt: "6" },
  { src: ".././Gallery/7.jpg", alt: "7" },
  { src: ".././Gallery/8.jpg", alt: "8" },
  { src: ".././Gallery/9.jpg", alt: "9" },
  { src: ".././Gallery/10.jpg", alt: "10" },
  { src: ".././Gallery/11.jpg", alt: "11" },
  { src: ".././Gallery/12.jpg", alt: "12" },
  { src: ".././Gallery/13.jpg", alt: "13" },
  { src: ".././Gallery/14.jpg", alt: "14" },
  { src: ".././Gallery/15.jpg", alt: "15" },
  { src: ".././Gallery/16.jpg", alt: "16" },
  { src: ".././Gallery/17.jpg", alt: "17" },
  { src: ".././Gallery/18.jpg", alt: "18" },
  { src: ".././Gallery/19.jpg", alt: "19" },
];

function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div
      className="App body"
      style={{
        backgroundColor: "#000000",
        marginTop: "60px",
        padding: "0px 18px 0px 18px",
      }}
    >
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[
          lgThumbnail,
          lgZoom,
          lgAutoplay,
          lgFullscreen,
          lgRotate,
          lgShare,
        ]}
      >
        {images.map((image, index) => {
          return (
            <a href={image.src} key={index}>
              <img className="img" alt={image.alt} src={image.src} />
            </a>
          );
        })}
      </LightGallery>
    </div>
  );
}

export default Gallery;
