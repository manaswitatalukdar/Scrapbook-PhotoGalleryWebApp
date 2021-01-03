import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Profile from "./components/Profile";
import Featured from "./components/Featured";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import RegistrationForm from "./components/RegistrationForm"
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
            <Route path="/login" exact component={Form} />
            <Route path="/register" exact component={RegistrationForm}/>
            <Route path="/profile" exact component={Profile}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
