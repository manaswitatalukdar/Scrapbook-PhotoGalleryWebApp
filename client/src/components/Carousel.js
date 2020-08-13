import React, { useRef, useState } from "react";
import "../App.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Carousel() {
  const slideRef = useRef();
  const [active, setActive] = useState(1);
  const prev = () => {
    slideRef.current.goBack();
    setActive(active - 1);
    if (active === 1) setActive(3);
  };

  const next = () => {
    slideRef.current.goNext();
    setActive(active + 1);
    if (active === 3) setActive(1);
  };
  const properties = {
    autoplay: false,
    nextArrow: (
      <div style={{ width: "30px", marginLeft: "-60px" }}>
        <div id="bar1"></div>
        <button className="next" onClick={next}>
          next
        </button>
      </div>
    ),
    prevArrow: (
      <div style={{ width: "30px", marginRight: "-60px" }}>
        <button className="prev" onClick={prev}>
          prev
        </button>
        <div id="bar2"></div>
      </div>
    ),
  };

  return (
    <React.Fragment>
      <Fade ref={slideRef} {...properties}>
        <div className="slide1">
          <div style={{ height: `600px` }}>
            <div className={"animate" + active}>keep your memories safe</div>
          </div>
        </div>

        <div className="slide2">
          <div style={{ height: `600px` }}>
            <div className={"animate" + active}>A photo Gallery</div>
          </div>
        </div>

        <div className="slide3">
          <div style={{ height: `600px` }}>
            <div className={"animate" + active}>
              preserve your best moments and share your skills
            </div>
          </div>
        </div>
      </Fade>
    </React.Fragment>
  );
}

export default Carousel;
