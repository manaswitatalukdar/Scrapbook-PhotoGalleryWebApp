import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "@testing-library/react";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h3>About</h3>
        <div className="aaltu"></div>
      </div>
    );
  }
}

export default About;
