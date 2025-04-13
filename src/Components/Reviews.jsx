import React, { useEffect } from "react";
import NavCnt from "./NavCnt";

const Reviews = ({ navIcon, setNavIcon }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: "#000000", marginTop: "60px" }}>
      {navIcon ? (
        <div
          class="elfsight-app-73df6445-cda4-4d6c-b83e-b9a78f156e51"
          data-elfsight-app-lazy
        ></div>
      ) : (
        <NavCnt navIcon={navIcon} setNavIcon={setNavIcon} />
      )}
    </div>
  );
};

export default Reviews;
