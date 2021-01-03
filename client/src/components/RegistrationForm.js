import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from 'axios';
import image from '../images/background10.png'
import { Link, useHistory } from "react-router-dom";

const FormBody = styled.div`
margin-left: 180px;
padding: 20px 50px;
color: white;
background-image:url( ${image});
background-position: center;
background-size: cover;

z-index: 1px;
height: 530px;
width: 1000px;
`;


const RegistrationForm = () => {

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [locationReg, setLocationReg] = useState('');
  const [errorname, setErrorname] = useState('');
  const [errorpwd, setErrorpwd] = useState('');
  const [errormail, setErrormail] = useState('');
  const [errorlocation, setErrorlocation] = useState('');
  const [message, setMessage] = useState(' ');
  const history = useHistory();
  const [img, setImg] = useState({image});

  const uploaddp=(event)=>{
    console.log(event.target.files[0]);
    setImg(event.target.files[0]);
  };


  const register=()=>{
    const form = new FormData();
    if(usernameReg.length === 0 || passwordReg.length === 0 || emailReg.length === 0 || locationReg.length === 0){
      if(usernameReg.length === 0){
     setErrorname('It is a necessary field');
   }
    if(passwordReg.length === 0){
     setErrorpwd('It is a necessary field');
   }
    if(emailReg.length === 0){
     setErrormail('It is a necessary field');
   } 
     if(locationReg.length === 0){
     setErrorlocation('It is a necessary field');
   }
 }
 else{
  form.append('username', usernameReg)
  form.append('password', passwordReg);
  form.append('email', emailReg);
  form.append('location', locationReg);
  form.append('image', img);
    Axios.post('http://localhost:5000/register',form).then((response)=>{
  if(response.data === 'Username already exists') setMessage(response.data);
  
  else{
    setMessage('Registered successfully!')
    history.push('/login');
  }

 
});}
   
  };

  return (
    <div style={{backgroundColor: `rgb(25, 74, 72)`, paddingTop: `20px`, paddingBottom: `100px`}}>
<FormBody>
      <h3 style={{textAlign:'center'}}>Registration Form</h3>
      <span style={{float: `left`}}>
      <p style={{color: `tomato`}}>{message}</p>
      <label>Username: </label><br/>
            <input type="name" name="name" onChange={(e)=>{setUsernameReg(e.target.value)}} style={{width:`400px`}}/>
            <p style={{color: `tomato`, fontSize: `12px`}}>{errorname}</p>
    
            
            <label>Password: </label>
            <br/>
            <input
              type="password"
              name="password"
              onChange={(e)=>{setPasswordReg(e.target.value)} }
              style={{width:`400px`}}
            />
            <p style={{color: `tomato`, fontSize: `12px`}}>{errorpwd}</p>
            
            <label>Email: </label>
            <br/>
            <input
              type="email"
              name="email"
              onChange={(e)=>{setEmailReg(e.target.value)}}
              style={{width:`400px`}}
            />
            <p style={{color: `tomato`, fontSize: `12px`}}>{errormail}</p>
           
            <label>Location: </label>
            <br/>
            <input
              type="location"
              name="location"
              onChange={(e)=>{setLocationReg(e.target.value)}}
              style={{width:`400px`}}
            />
            <p style={{color: `tomato`, fontSize: `12px`}}>{errorlocation}</p>
            </span>
            <span style={{float: `left`, marginLeft: `200px`,marginTop: `50px`}}>
             <form encType="multipart/form-data">
               <label>Profile Picture:</label><br/>
      <input type="file" name="file" onChange={uploaddp}/>
      </form></span>
            
            <br/><br/>
           
            <button type="submit"  className="submitBtnReg" onClick={register}>
              Register
            </button>
           
            
    </FormBody>
    </div>
    
  );
};

export default RegistrationForm;
