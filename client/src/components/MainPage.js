import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Carousel from "./Carousel";
import Nav from "./Navbar";
import Scroll from "./Scroll";

class MainPage extends Component {
  render() {
    return (
      <div className="Main">
        <Nav />
        <Carousel />
        <Scroll />
      </div>
    );
  }
}

export default MainPage;
