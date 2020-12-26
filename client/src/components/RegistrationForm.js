import React, { useState } from "react";
import Axios from 'axios';


const RegistrationForm = () => {

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const register=()=>{
    Axios.post('http://localhost:5000/register',{
      username: usernameReg,
      password: passwordReg
    }).then((response)=>{
      console.log(response);
    });
  };

  return (
    <React.Fragment>
      <h3>Register</h3>
      <br />
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
            <button type="submit"  className="submitBtn" onClick={register}>
              Submit
            </button>
    </React.Fragment>
  );
};

export default RegistrationForm;
