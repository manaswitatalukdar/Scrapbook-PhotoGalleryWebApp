import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "@testing-library/react";

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <h3>Profile</h3>
        <div className="aaltu"></div>
      </div>
    );
  }
}

export default Profile;
