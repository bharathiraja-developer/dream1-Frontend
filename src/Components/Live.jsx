import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Live = () => {
  const [inputValue, setInputValue] = useState("");
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    // alert(`Submitted: ${inputValue}`);
    const response = await axios.post(
      "https://dream1-backend.onrender.com/update",
      {
        newUrl: inputValue,
      }
    );
    if (response.data.success) {
      setLoad(false);
      navigate("/");
    }
    console.log("✅ Response:", response.data);
  };

  return (
    <div className="d-flex vh-100 bg-black text-white justify-content-center align-items-center">
      {load ? (
        <div class="spinner-border text-primary" role="status"></div>
      ) : (
        <form onSubmit={handleSubmit} className="text-center">
          <input
            type="text"
            className="form-control mb-3 bg-dark text-white border-white"
            placeholder="Enter text here"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="btn btn-light">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Live;
