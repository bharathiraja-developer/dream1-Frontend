import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Import all images
import image1 from "../images/Packages/1.jpeg";
import image2 from "../images/Packages/2.jpeg";
import image3 from "../images/Packages/3.jpeg";
import image4 from "../images/Packages/4.jpeg";
import image5 from "../images/Packages/5.jpeg";
import image6 from "../images/Packages/6.jpeg";
import image7 from "../images/Packages/7.jpeg";
import image8 from "../images/Packages/8.jpeg";
import image9 from "../images/Packages/9.jpeg";
import image10 from "../images/Packages/10.jpeg";
import image11 from "../images/Packages/11.jpeg";
import image12 from "../images/Packages/12.jpeg";
import image13 from "../images/Packages/13.jpeg";
import image14 from "../images/Packages/14.jpeg";
import image15 from "../images/Packages/15.jpeg";
import image16 from "../images/Packages/16.jpeg";
import image17 from "../images/Packages/17.jpeg";
import "../Carousel/Carousel.css";

function Packages() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();

  // Split URL by "/" and get the last part
  const lastSegment = location.pathname.split("/").pop();

  // Create an array of the images
  const images =
    lastSegment === "oneday"
      ? [image1, image2, image3, image4]
      : [
          image5,
          image6,
          image7,
          image8,
          image9,
          image10,
          image11,
          image12,
          image13,
          image14,
          image15,
          image16,
          image17,
        ];

  return (
    <>
      <div
        className="container-fluid bg-black merienda-dream1 text-white"
        style={{ marginTop: "60px" }}
      >
        {images.map((image, index) => (
          <div
            className={
              index === images.length - 1
                ? "row justify-content-center"
                : "row justify-content-center mb-4"
            }
            key={index}
          >
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <img
                src={image}
                alt={`Package ${index + 1}`}
                className="img-fluid"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Packages;
