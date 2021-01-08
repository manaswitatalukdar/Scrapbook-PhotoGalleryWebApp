import React, { useState, useEffect } from "react";
import "../App.css";
import ScrollAnimation from "react-animate-on-scroll";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Axios from 'axios';
import img from '../images/no-photo.jpg'

const ProtectedRoute = (props) => {
  const username = props.username;
  let image = props.image;
  const [images, setImages] = useState({});
  const [msg, setMsg] = useState('');

  const handleUpload=(event)=>{
    console.log(event.target.files[0]);
    setImages(event.target.files[0]);
  };

  const upload=()=>{
    const form = new FormData();
    form.append('image', images);
    Axios.post('http://localhost:5000/upload',form).then((response)=>{
      if(response.status === 200) {
        setMsg('Image uploaded successfully!')
      }
    })
  }


  if(image === '') image = img;
  else image = "http://localhost:5000/"+image;
  const email = props.email;
  const location = props.location;
  if(props.loggedIn === 'logout') {
    return (<React.Fragment><div className="profileinfo">
    <div className="portfolio">
      <div className="profileCard">
      <div className="information">
        
              <h1><strong>About</strong></h1>
              <br/><br/>
              <p style={{fontSize: `16px`}}>
               Username: {username} <br/>
               Email: {email} <br/>
               Location: {location} <br/>
              </p>  
            </div>
      <img
            src={image}
            style={{
              height: `400px`,
              width: `380px`,
             borderTopRightRadius: `5px`,
             borderBottomRightRadius: `5px`,
             float: `right`,
             objectFit: `cover`
            }}/>
        </div> 
        <ScrollAnimation
            duration={3}
            animateIn="bounceInLeft">
              <div style={{fontFamily: `'Abril Fatface', cursive`, fontSize: `80px`, marginTop: `200px`, marginLeft: `200px`}}>studio</div>
              </ScrollAnimation>
              <div>
              <input type="file" name="file" onChange={handleUpload}/>
              <span onClick={upload}>upload</span>
              <p>{msg}</p>
              </div>
    </div>
   
    </div></React.Fragment>)
  }
    return (<React.Fragment><p className="profilestatus">{props.username}</p></React.Fragment>)
};

const Profile = () => {

  const [loggedIn, setLoggedIn] = useState('login/register');
  const [username, setUsername] = useState('Please login to view your profile');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState({});
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
        setUsername(response.data.username);
        setEmail(response.data.email);
        setLocation(response.data.location);
        setImage(response.data.profile_picture);
      }
    });
  }, [loggedIn]);

  return (
    <div className="profile">
      <Link to="/login" style={{ textDecoration: "none" }} onClick={profile}>
          <span className="loginButton">{loggedIn}</span>
        </Link>
        
        <ProtectedRoute loggedIn={loggedIn} username={username} image={image} location={location} email={email} />
    </div>
  )};

export default Profile;