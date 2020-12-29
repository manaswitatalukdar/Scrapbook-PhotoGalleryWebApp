import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route , Link} from "react-router-dom";
import Carousel from "./Carousel";
import Scroll from "./Scroll";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Carousel />
        <Scroll />
        <div className="footer">
          collaborate with us
          <div className="icons">
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-linkedin"></a>
            <a href="#" className="fa fa-instagram"></a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
