import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "@testing-library/react";
import LoginForm from "./LoginForm";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h3>Home</h3>
        <LoginForm />
      </div>
    );
  }
}

export default Home;
