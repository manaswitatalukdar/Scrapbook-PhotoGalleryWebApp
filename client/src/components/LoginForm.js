import React, { useState } from "react";
import styled from "styled-components";
import Axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import "../App.css";

const FormBody = styled.div`
  margin-top: 50px;
  margin-left: 275px;
  float: left;
  text-align: center;
  color: rgb(29,29,29);
  background-color:  rgba(240, 221, 200,0.9);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  
  padding-top: 80px;
  height: 450px;
  width: 400px;
`;


const LoginForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const history = useHistory();

  const login=()=>{
    Axios.post('http://localhost:5000/login',{
      username: username,
      password: password
    }).then((response)=>{
        if(response.data.message){
          setLoginStatus(response.data.message);
        }
        else{
          setLoginStatus('loggedin');
          history.push('/profile');
        }
        
    });
  };

  return (
    <FormBody>
      <h3 style={{fontFamily: `'Righteous', cursive`}}>Login</h3>
      <br />
           <svg height="23px" 
           width="25px" 
           aria-hidden="true" 
           focusable="false" 
           data-prefix="fas" 
           data-icon="user" 
           className="svg-inline--fa fa-user fa-w-14" 
           role="img"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512">
              <path fill="black" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>

            <input type="name" name="name" placeholder="Enter your Username" onChange={(e)=>{setUsername(e.target.value)}}/>
            <br/>
            <br/>
            <svg 
            height="23px"
            width="25px"
            aria-hidden="true" 
            focusable="false" 
            data-prefix="fas" 
            data-icon="unlock-alt" 
            className="svg-inline--fa fa-unlock-alt fa-w-14" 
            role="img" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 448 512">
              <path fill="currentColor" d="M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zM264 408c0 22.1-17.9 40-40 40s-40-17.9-40-40v-48c0-22.1 17.9-40 40-40s40 17.9 40 40v48z"></path></svg>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e)=>{setPassword(e.target.value)}}
            />
            <br/><br/><br/>
            <button type="submit"  className="submitBtnLog" onClick={login}>
              Login
            </button>
            <p style={{fontSize: `11px` , color: `red`}}>{loginStatus}</p>
            <p>Not a user? <Link to="/register" >Register</Link></p>
    </FormBody>
  );
};

export default LoginForm;
