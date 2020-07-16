import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "@testing-library/react";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h3>Home</h3>
      </div>
    );
  }
}

export default Home;
