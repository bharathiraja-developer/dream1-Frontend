import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import "./Footer.css"; // Import the CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Studio Name */}
        <div className="footer-brand">
          <h2 className="fw-bold">Dream 1 Studio</h2>
          <p>Capturing moments, creating memories.</p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="https://www.facebook.com/Dream1Studio">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/dream1_studio?igsh=MTJ5cHVsODRyY2Z5OA%3D%3D&utm_source=qr">
            <FaInstagram />
          </a>
          <a href="https://api.whatsapp.com/send?phone=917010473169&text=Hi%20Dream1%20studio!%0A%0AI%20am%20interested%20in%20your%20services,%20and%20need%20to%20know%20about%20pricing%20details.">
            <FaWhatsapp />
          </a>
          <a href="https://youtube.com/@dream1studio991?si=nq8zrA94sutc2hcj">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        © {new Date().getFullYear()} Dream 1 Studio. All Rights Reserved.
      </div>
    </footer>
  );
}
