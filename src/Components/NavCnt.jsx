import React from "react";
import { Link } from "react-router-dom";

function NavCnt({ navIcon, setNavIcon }) {
  return (
    <div
      className="text-white full-screen merienda-dream1"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh", // Full viewport height
        backgroundColor: "black", // Optional: Add a background color
      }}
    >
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <ul
              className="fs-3 fw-bold lh-lg align-items-center mt-2"
              style={{ listStyleType: "none", padding: 0, margin: 0 }}
            >
              <li
                className="hover-item"
                style={{
                  transition: "color 0.3s, transform 0.3s",
                }}
              >
                {/* <Link
                  to="/"
                  style={{
                    textDecoration: "none", // Remove the underline
                    color: "inherit", // Inherit the color from the parent element (e.g., black or white)
                  }}
                  onClick={() => setNavIcon(true)}
                >
                  Home
                </Link> */}
              </li>
              <li
                className="hover-item"
                style={{
                  transition: "color 0.3s, transform 0.3s",
                }}
              >
                <Link
                  to="/services"
                  style={{
                    textDecoration: "none", // Remove the underline
                    color: "inherit", // Inherit the color from the parent element (e.g., black or white)
                  }}
                  onClick={() => setNavIcon(true)}
                >
                  Services
                </Link>
              </li>
              <li
                className="hover-item"
                style={{
                  transition: "color 0.3s, transform 0.3s",
                }}
              >
                <Link
                  to="/gallery"
                  style={{
                    textDecoration: "none", // Remove the underline
                    color: "inherit", // Inherit the color from the parent element (e.g., black or white)
                  }}
                  onClick={() => setNavIcon(true)}
                >
                  Gallery
                </Link>
              </li>
              <li
                className="hover-item"
                style={{
                  transition: "color 0.3s, transform 0.3s",
                }}
              >
                Reels
              </li>
              <li
                className="hover-item"
                style={{
                  transition: "color 0.3s, transform 0.3s",
                }}
              >
                <Link
                  to="/packages"
                  style={{
                    textDecoration: "none", // Remove the underline
                    color: "inherit", // Inherit the color from the parent element (e.g., black or white)
                  }}
                  onClick={() => setNavIcon(true)}
                >
                  Packages
                </Link>
              </li>
              <li
                className="hover-item"
                style={{
                  transition: "color 0.3s, transform 0.3s",
                }}
              >
                Youtube Live
              </li>
              <li
                className="hover-item"
                style={{
                  transition: "color 0.3s, transform 0.3s",
                }}
              >
                <Link
                  to="/reviews"
                  style={{
                    textDecoration: "none", // Remove the underline
                    color: "inherit", // Inherit the color from the parent element (e.g., black or white)
                  }}
                  onClick={() => setNavIcon(true)}
                >
                  Reviews
                </Link>
              </li>
              <li
                className="hover-item"
                style={{
                  transition: "color 0.3s, transform 0.3s",
                }}
              >
                About Us
              </li>
              <li
                className="hover-item"
                style={{
                  transition: "color 0.3s, transform 0.3s",
                }}
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavCnt;
