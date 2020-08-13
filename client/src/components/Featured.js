import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "@testing-library/react";

class Featured extends Component {
  render() {
    return (
      <div className="Featured">
        <h3>Featured</h3>
        <div className="header-wrapper"></div>
      </div>
    );
  }
}

export default Featured;
