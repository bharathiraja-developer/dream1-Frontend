import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import Carousel from "./Carousel/Carousel";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Packages from "./Components/Packages";
import "./Carousel/Carousel.css";

import instagram from "./icons/instagram.png";
import whatsapp from "./icons/whatsapp.png";
import facebook from "./icons/facebook.png";
import youtube from "./icons/youtube.png";
import live from "./icons/live.jpg";
import Reviews from "./Components/Reviews";
import TravelSlider from "./Components/TravelSlider ";
import Gallery from "./Components/Gallery";
import Live from "./Components/Live";
import Footer from "./Components/Footer";
import ImageFolder from "./Components/ImageFolder";
import Users from "./Carousel/Users";

function App() {
  const [navIcon, setNavIcon] = useState(true);
  const [url, setUrl] = useState(
    "https://youtube.com/@dream1studio991?si=nq8zrA94sutc2hcj"
  );

  const setUrlfn = async () => {
    const { data } = await axios.get("https://dream1-backend.onrender.com");
    setUrl(data.link);
  };

  useEffect(() => {
    setUrlfn();
  }, []);

  return (
    <>
      <Router>
        <Navbar navIcon={navIcon} setNavIcon={setNavIcon} />
        <div className="social-bar">
          <a
            href={url}
            target="_blank"
            className="social-icon1"
            data-label="youtube"
          >
            <img src={live} alt="YouTube" />
          </a>
          <a
            href="https://www.instagram.com/dream1_studio?igsh=MTJ5cHVsODRyY2Z5OA%3D%3D&utm_source=qr"
            target="_blank"
            className="social-icon"
            data-label="instagram"
          >
            <img src={instagram} alt="Instagram" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=917010473169&text=Hi%20Dream1%20studio!%0A%0AI%20am%20interested%20in%20your%20services,%20and%20need%20to%20know%20about%20pricing%20details."
            target="_blank"
            className="social-icon"
            data-label="whatsapp"
          >
            <img src={whatsapp} alt="WhatsApp" />
          </a>
          <a
            href="https://www.facebook.com/Dream1Studio"
            target="_blank"
            className="social-icon"
            data-label="facebook"
          >
            <img src={facebook} alt="Facebook" />
          </a>
          <a
            href="https://youtube.com/@dream1studio991?si=nq8zrA94sutc2hcj"
            target="_blank"
            className="social-icon"
            data-label="youtube"
          >
            <img src={youtube} alt="YouTube" />
          </a>
        </div>

        <Routes>
          <Route
            path="/"
            element={<Carousel navIcon={navIcon} setNavIcon={setNavIcon} />}
          />
          <Route
            path="/packages"
            element={<ImageFolder navIcon={navIcon} setNavIcon={setNavIcon} />}
          />
          <Route
            path="/oneday"
            element={<Packages navIcon={navIcon} setNavIcon={setNavIcon} />}
          />
          <Route
            path="/wedding"
            element={<Packages navIcon={navIcon} setNavIcon={setNavIcon} />}
          />
          <Route
            path="/reviews"
            element={<Reviews navIcon={navIcon} setNavIcon={setNavIcon} />}
          />
          <Route path="/services" element={<TravelSlider />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/live" element={<Live />} />
          <Route path="/Dream1Users" element={<Users />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
