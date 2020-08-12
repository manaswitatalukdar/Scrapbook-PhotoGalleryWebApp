import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Profile from "./components/Profile";
import Featured from "./components/Featured";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
            <Route path="/featured" component={Featured} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" exact component={LoginForm} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
