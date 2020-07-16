import React from "react";
import "../App.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Carousel() {
  return (
    <div className="Slides">
      <Slide>
        <div className="slide1">
          <div style={{ height: `600px` }}></div>
        </div>

        <div className="slide2">
          <div style={{ height: `600px` }}></div>
        </div>

        <div className="slide3">
          <div style={{ height: `600px` }}></div>
        </div>
      </Slide>
    </div>
  );
}

export default Carousel;
