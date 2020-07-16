import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import MainPage from "./components/MainPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/" exact component={MainPage} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
