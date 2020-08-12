import React from "react";
import "../App.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Carousel() {
  return (
    <Fade>
      <div className="slide1">
        <div style={{ height: `600px` }}></div>
      </div>

      <div className="slide2">
        <div style={{ height: `600px` }}></div>
      </div>

      <div className="slide3">
        <div style={{ height: `600px` }}></div>
      </div>
    </Fade>
  );
}

export default Carousel;
