import React, { useState } from "react";
import styled from "styled-components";
import Axios from 'axios';


const FormBody = styled.div`
  margin-top: 70px;
  margin-left: 275px;
  float: left;
  text-align: center;
  color: rgb(29,29,29);
  background-color:  rgba(240, 221, 200,0.9);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 1px;
  padding-top: 100px;
  height: 400px;
  width: 400px;
`;


const RegistrationForm = () => {

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [message, setMessage] = useState(' ');

  const register=()=>{
    Axios.post('http://localhost:5000/register',{
      username: usernameReg,
      password: passwordReg
    }).then((response)=>{
      console.log(response);
      setMessage('Registered successfully!')
    });
  };

  return (
    <FormBody>
      <h3>Register</h3>
      <p>{message}</p>
            <input type="name" name="name" placeholder="Enter your Username" onChange={(e)=>{setUsernameReg(e.target.value)}}/>
            <br/>
            <br/>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e)=>{setPasswordReg(e.target.value)}}
            />
            <br/><br/>
            <button type="submit"  className="submitBtnReg" onClick={register}>
              Submit
            </button>
            <p>If already an user go to <strong>login</strong>.</p>
    </FormBody>
  );
};

export default RegistrationForm;
