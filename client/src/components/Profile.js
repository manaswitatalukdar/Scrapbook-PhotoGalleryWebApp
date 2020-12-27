import React, { useState, useEffect } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { render } from "@testing-library/react";
import Axios from 'axios';


const Profile = () => {

  const [loggedIn, setLoggedIn] = useState('login/register');
  const [username, setUsername] = useState('Please login to view your profile');

  Axios.defaults.withCredentials= true;

  const profile=()=>{
    if(loggedIn.length === 6){
      Axios.get('http://localhost:5000/logout').then((response)=>{
        console.log(response);
      });
    }
  }

  useEffect(() => {
    Axios.get('http://localhost:5000/profile').then((response)=>{
      console.log(response);
      if(!response.data.message){
        setLoggedIn('logout');
        setUsername('Username: '+response.data.username);
      }
    });
  }, [loggedIn]);

  return (
    <div className="profile">
      <Link to="/login" style={{ textDecoration: "none" }} onClick={profile}>
          <span className="loginButton">{loggedIn}</span>
        </Link>
        <p className="profileinfo">{username}</p>
    </div>
  )};

export default Profile;
