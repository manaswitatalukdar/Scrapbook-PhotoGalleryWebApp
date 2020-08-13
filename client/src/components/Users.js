import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "@testing-library/react";

class Users extends Component {
  render() {
    return (
      <div className="Users">
        <h3>Users</h3>
        <div className="header-wrapper"></div>
      </div>
    );
  }
}

export default Users;
