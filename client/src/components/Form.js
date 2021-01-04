import React, { Component } from "react";
import styled from "styled-components";
import "../App.css";
import LoginForm from "./LoginForm";
import image from "../images/authentication.png"

const FormBody = styled.div`
margin-top: 50px;
float: left;
text-align: center;
color: white;
background-image: url(${image});
background-position: center;
background-size: cover;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
padding-top: 100px;
height: 450px;
width: 400px;
`;

const Form = () => {
    return(
        <React.Fragment>
        <LoginForm/>
        <FormBody/>
        </React.Fragment>
        
    );
};

export default Form;