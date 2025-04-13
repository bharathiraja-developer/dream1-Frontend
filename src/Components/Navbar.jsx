import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../icons/logo2.png";
import logo1 from "../icons/Logo-removebg-preview.png";
import { Link, useParams } from "react-router-dom";
import NavCnt from "./NavCnt";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navmenus() {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a className="nav-link active text-white" aria-current="page" href="#">
          Active
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">
          Link
        </a>
      </li>
    </ul>
  );
}

function NavMenuIcon({ navIcon, setNavIcon }) {
  return (
    <div className="nav-menu">
      <div className="logo-container">
        <img
          src={Logo}
          alt="logo"
          style={{
            height: "58px",
            width: "45px",
            marginLeft: "20px",
            paddingBottom: "10px",
          }}
        />
        <h2
          className="menu-logo text-white merienda-dream1 fs-2"
          style={{ marginLeft: "10px", marginTop: "5px" }}
        >
          Dream
          <span
            style={{
              background: "linear-gradient(to top, #222DF3, #3DE6FD)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
            className="fs-1"
          >
            1
          </span>{" "}
          Studio
        </h2>
      </div>

      {/* Right-aligned icons container */}
      <div className="right-icons">
        {/* Menu Icon */}
        <Link
          to="/"
          style={{
            textDecoration: "none", // Remove the underline
            color: "inherit", // Inherit the color from the parent element (e.g., black or white)
          }}
          onClick={() => setNavIcon(true)}
        >
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-filled/80/FFFFFF/home.png"
            alt="home"
            className="home-icon"
          />
        </Link>
        <img
          className="menu-icon"
          src={
            navIcon
              ? "https://img.icons8.com/ios-filled/50/FFFFFF/menu--v6.png"
              : "https://img.icons8.com/sf-black-filled/64/FFFFFF/x.png"
          }
          alt="menubar"
          onClick={() => setNavIcon(!navIcon)}
        />
      </div>
    </div>
  );
}

function Navbar({ navIcon, setNavIcon }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar bg-body-dark fixed-top">
      <div className="container-fluid">
        {/* Left - Logo & Branding */}
        <div className="navbar-brand d-flex align-items-center m-0">
          <img
            src={Logo}
            alt="logo"
            style={{
              height: "58px",
              width: "45px",
              marginLeft: "0px",
              paddingBottom: "10px",
            }}
          />
          <h2
            className="menu-logo text-white merienda-dream1 fs-2 m-0"
            style={{ marginLeft: "10px", marginTop: "5px" }}
          >
            Dream
            <span
              style={{
                background: "linear-gradient(to top, #222DF3, #3DE6FD)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
              className="fs-1"
            >
              1
            </span>{" "}
            Studio
          </h2>
        </div>

        {/* Right - Icons (Home & Menu) */}
        <div className="d-flex ms-auto">
          {/* Home Icon */}
          <Link
            to="/"
            className="navbar-toggler"
            type="button"
            aria-label="Home"
            style={{ border: "none", background: "transparent" }}
          >
            <i
              className="bi bi-house-door-fill"
              style={{ fontSize: "1.6rem", color: "white" }}
            ></i>
          </Link>

          {/* Navbar Toggle Icon */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Sidebar Menu */}
        <div
          className="offcanvas offcanvas-end bg-black"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <img
              src={Logo}
              alt="logo"
              style={{
                height: "58px",
                width: "45px",
                marginLeft: "20px",
                paddingBottom: "10px",
              }}
            />
            <h2
              className="menu-logo text-white merienda-dream1 fs-3"
              style={{ marginLeft: "10px", marginTop: "5px" }}
            >
              Dream
              <span
                style={{
                  background: "linear-gradient(to top, #222DF3, #3DE6FD)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
                className="fs-2"
              >
                1
              </span>{" "}
              Studio
            </h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <NavCnt isOpen={isOpen} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

{
  /**
  <div className="navbar-container left-0">
      <div className="navbar position-fixed top-0 left-0 w-100">
        <NavMenuIcon navIcon={navIcon} setNavIcon={setNavIcon} />
      </div>
    </div>
  */
}
