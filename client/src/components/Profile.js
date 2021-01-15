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
  const [uploaded, setUploaded] = useState(false);

  const handleUpload=(event)=>{
    console.log(event.target.files[0]);
    setImages(event.target.files[0]);
  };

  const upload=()=>{
    const form = new FormData();
    form.append('image', images);
    Axios.post('http://localhost:5000/upload',form, {
      onUploadProgress: progressEvent => {
        console.log('Upload Progress: ' + Math.round(progressEvent.loaded/progressEvent.total *100) + '%')
      }
    }).then((response)=>{
      if(response.status === 200) {
        setMsg('Image uploaded successfully!');
        setUploaded(true);
      }
    })
  }


  if(image === '') image = img;
  else image = "http://localhost:5000/"+image;
  const email = props.email;
  const location = props.location;
  const photos = props.photos;

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
        <div style={{marginLeft: `300px`,marginTop: `200px`}}>
              <input type="file" name="file" onChange={handleUpload}/>
              <button onClick={upload}>upload</button>
              <p>{msg}</p>
              </div>
        
        <ScrollAnimation
            duration={2}
            animateIn="bounceInLeft">
              <div style={{fontFamily: `'Abril Fatface', cursive`, fontSize: `80px`, marginTop: `150px`, marginLeft: `500px`}}>studio</div>
              </ScrollAnimation>
           
            
             
    </div>
    <ul className="image-viewer">
          {photos.map((photo) => (
            <li
              key={photo}
              style={{
                listStyle: `none`,
                transition: `0.7s ease-in-out`,
              }}
              
            >
              <img
                src={"http://localhost:5000/"+photo}
                style={{
                  height: `400px`,
                  width: `400px`,
                  marginTop: `8px`,
                  objectFit: `cover`
                }}
              />
            </li>
          ))}
        </ul>
        {uploaded ? <img
                src={"http://localhost:5000/"+ images.name}
                style={{
                  height: `400px`,
                  width: `400px`,
                  marginTop: `8px`,
                  marginLeft: `40px`,
                  objectFit: `cover`
                }}
              />: null}
   <div style={{minHeight: `100px`}}></div>
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
  const [photos, setPhotos] = useState([]);
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
        setPhotos(response.data.images);
      }
    });
  }, [loggedIn]);

  return (
    <div className="profile">
      <Link to="/login" style={{ textDecoration: "none" }} onClick={profile}>
          <span className="loginButton">{loggedIn}</span>
        </Link>
        
        <ProtectedRoute loggedIn={loggedIn} username={username} image={image} location={location} email={email} photos={photos} />
    </div>
  )};

export default Profile;