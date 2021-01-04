import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import image from "../images/background10.png";
import background from "../images/background11.png";

const FormBody = styled.div`
margin-left: 400px;
padding: 40px 110px;
color: white;
background-image: url(${image});
background-position: center;
background-size: cover;
z-index: 1px;
height: 570px;
width: 550px;
box-shadow: 0 10px 10px -1px rgba(0, 0, 0, 0.2);
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
  const [img, setImg] = useState({});

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
    <div style={{backgroundImage: `url(${background})`, backgroundPosition: `center`, backgroundSize: `cover`, paddingTop: `20px`, paddingBottom: `100px`}}>
<FormBody>
      <h3 style={{textAlign:'center', fontFamily: `'Righteous', cursive`}}>Registration Form</h3>
      <span style={{float: `left`}}>
      <p style={{color: `tomato`}}>{message}</p>
      <br/>
            <input type="name" id="name" name="name" placeholder="Username"
             onChange={(e)=>{setUsernameReg(e.target.value)}}
              style={{width:`300px`, color: `white`, backgroundColor: `rgba(0,0,0,0)`,  border: `none`,borderBottom: `solid rgba(255, 255, 255, 0.5) 1px`, outline: `none`}}/>
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
              <path fill="rgba(255,255,255,0.8)" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
            <p style={{color: `tomato`, fontSize: `12px`}}>{errorname}</p>
    
            <br/>
            <input
              type="password" id="password"
              name="password" placeholder="Password"
              onChange={(e)=>{setPasswordReg(e.target.value)} }
              style={{width:`300px`,color: `white`, backgroundColor: `rgba(0,0,0,0)`,  border: `none`,borderBottom: `solid rgba(255, 255, 255, 0.5) 1px`, outline: `none`}}
            />
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
              <path fill="rgba(255,255,255,0.8)" d="M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zM264 408c0 22.1-17.9 40-40 40s-40-17.9-40-40v-48c0-22.1 17.9-40 40-40s40 17.9 40 40v48z"></path></svg>
            <p style={{color: `tomato`, fontSize: `12px`}}>{errorpwd}</p>
            <br/>
            <input
              type="email" id="email"
              name="email" placeholder="Email"
              onChange={(e)=>{setEmailReg(e.target.value)}}
              style={{width:`300px`,color: `white`, backgroundColor: `rgba(0,0,0,0)`,  border: `none`,borderBottom: `solid rgba(255, 255, 255, 0.5) 1px`, outline: `none`}}
            />
            <svg height="23px"
            width="25px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="rgba(255,255,255,0.8)" 
            d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
            <p style={{color: `tomato`, fontSize: `12px`}}>{errormail}</p>
            <br/>
            <input
              type="location" id="location"
              name="location" placeholder="Location"
              onChange={(e)=>{setLocationReg(e.target.value)}}
              style={{width:`300px`,color: `white`, backgroundColor: `rgba(0,0,0,0)`,  border: `none`,borderBottom: `solid rgba(255, 255, 255, 0.5) 1px`, outline: `none`}}
            />
            <svg height="23px"
            width="25px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" className="svg-inline--fa fa-map-marker-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="rgba(255,255,255,0.8)" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
            <p style={{color: `tomato`, fontSize: `12px`}}>{errorlocation}</p>
           <br/>
             <form encType="multipart/form-data">
             <svg height="23px"
            width="25px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="camera" className="svg-inline--fa fa-camera fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="rgba(255,255,255,0.8)" d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path></svg>
            <label style={{marginLeft:`10px`}}>Profile Picture:</label><br/>
             
               <input type="file" name="file" onChange={uploaddp}/>
      </form></span>
            
            
           
            <button type="submit"  className="submitBtnReg" onClick={register}>
              <strong>REGISTER</strong>
            </button>
           
            
    </FormBody>
    </div>
    
  );
};

export default RegistrationForm;
