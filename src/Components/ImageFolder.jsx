import React, { useEffect, useState } from "react";
import "./ImageFolder.css"; // Import the CSS file
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

import image1 from "../images/Packages/1.jpeg";
import image2 from "../images/Packages/2.jpeg";
import image3 from "../images/Packages/3.jpeg";
import image4 from "../images/Packages/4.jpeg";
import image5 from "../images/Packages/5.jpeg";
import image6 from "../images/Packages/6.jpeg";
import image7 from "../images/Packages/7.jpeg";
import image8 from "../images/Packages/8.jpeg";
import { Link } from "react-router-dom";
import axios from "axios";

const folders = [
  {
    name: "One Day Event",
    path: "oneday",
    images: [image1, image2, image3, image4],
  },
  {
    name: "Wedding",
    path: "wedding",
    images: [image5, image6, image7, image8],
  },
];

export default function ImageFolders() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("Dream1userInfo");
    if (userInfo) {
      setSubmitted(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() && /^[0-9]{10}$/.test(mobile)) {
      try {
        setSubmitting(true);
        const { data } = await axios.post(
          "https://dream1-backend.onrender.com/add",
          { name, mobile }
        );
        if (data.success) {
          localStorage.setItem(
            "Dream1userInfo",
            JSON.stringify({ name, mobile })
          );
          setSubmitted(true);
          setSubmitting(false);
          alert("Details submitted successfully!");
        }
      } catch (err) {
        setSubmitting(false);
        alert("Something went wrong, please try again later.");
      }
    } else {
      alert("Please enter a valid name and 10-digit mobile number.");
    }
  };

  return (
    <>
      {submitted ? (
        <div className="container-fluid folder-page">
          <div className="row justify-content-center">
            {folders.map((folder, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-10 mb-4">
                <Link to={`/${folder.path}`} style={{ textDecoration: "none" }}>
                  <div className="folder p-3">
                    <div className="folder-tab">{folder.name}</div>
                    <div className="row g-2 folder-content">
                      {folder.images.map((img, idx) => (
                        <div key={idx} className="col-6">
                          <img
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            className="img-fluid folder-image"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div
            className="d-flex justify-content-center align-items-center vh-100"
            style={{ backgroundColor: "black" }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6 col-sm-10">
                  <div className="card shadow rounded-4">
                    <div className="card-body">
                      <h4
                        className="card-title text-center mb-4"
                        style={{ fontFamily: "serif" }}
                      >
                        Enter Your Details To Visit Packages
                      </h4>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label htmlFor="userName" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="userName"
                            defaultValue={name}
                            onBlur={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="userMobile" className="form-label">
                            Mobile Number (10 Digits)
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="userMobile"
                            defaultValue={mobile}
                            onBlur={(e) => setMobile(e.target.value)}
                            placeholder="Enter your mobile number"
                            required
                            pattern="[0-9]{10}"
                          />
                        </div>
                        {submitting ? (
                          <button
                            class="btn btn-primary w-100"
                            type="button"
                            disabled
                          >
                            <span
                              class="spinner-border spinner-border-sm"
                              aria-hidden="true"
                            ></span>
                            <span role="status" className="ms-3">
                              Loading...
                            </span>
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="btn btn-primary w-100"
                          >
                            Submit
                          </button>
                        )}
                      </form>

                      {submitted && (
                        <div className="alert alert-success mt-3 text-center">
                          Submitted successfully!
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
