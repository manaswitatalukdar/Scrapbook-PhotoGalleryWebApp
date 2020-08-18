import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "@testing-library/react";

class Featured extends Component {
  render() {
    return (
      <div className="background">
        <div className="featured">
          <div className="card">
            <div
              style={{
                fontFamily: ` 'Nanum Myeongjo', serif`,
                fontSize: `45px`,
                fontWeight: `600`,
                color: `teal`,
              }}
            >
              Creative Cloud
            </div>
            <br />
            <br />
            <div
              style={{
                fontSize: `20px`,
                letterSpacing: `0.12em`,
              }}
            >
              get all the features photographs for our contributors here.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Featured;
