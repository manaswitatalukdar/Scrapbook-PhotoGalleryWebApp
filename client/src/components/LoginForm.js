import React, { useState } from "react";
import styled from "styled-components";
import Axios from 'axios';

const LoginForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const login=()=>{
    Axios.post('http://localhost:5000/login',{
      username: username,
      password: password
    }).then((response)=>{
        if(response.data.message){
          setLoginStatus(response.data.message);
        }
        else{
          setLoginStatus(response.data.username)
        }
        
    });
  };

  return (
    <React.Fragment>
      <h3>Login</h3>
      <br />
            <input type="name" name="name" placeholder="Enter your Username" onChange={(e)=>{setUsername(e.target.value)}}/>
            <br/>
            <br/>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e)=>{setPassword(e.target.value)}}
            />
            <br/><br/>
            <button type="submit"  className="submitBtn" onClick={login}>
              Submit
            </button>
            <h1>{loginStatus}</h1>
    </React.Fragment>
  );
};

export default LoginForm;
