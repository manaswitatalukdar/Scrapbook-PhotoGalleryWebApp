import React, { useState } from "react";
import styled from "styled-components";
import Axios from 'axios';


const FormBody = styled.div`
  margin-top: 70px;
  float: left;
  text-align: center;
  color: white;
  background-color: rgba(29, 26, 29, 0.9);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 1px;
  padding-top: 100px;
  height: 400px;
  width: 400px;
`;


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
          setLoginStatus(response.data.username+ ' you have successfully logged in')
        }
        
    });
  };

  return (
    <FormBody>
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
            <button type="submit"  className="submitBtnLog" onClick={login}>
              Submit
            </button>
            <p>{loginStatus}</p>
    </FormBody>
  );
};

export default LoginForm;
