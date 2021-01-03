import React, { Component } from "react";
import styled from "styled-components";
import "../App.css";
import LoginForm from "./LoginForm";
import image from "../images/authentication.png"

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

const Form = (props) => {
    return(
        <React.Fragment>
        <LoginForm/>
        <FormBody>
            <img src={image} 
            style={{ 
                height: `230px`,
                width: `300px`,}}/>
        </FormBody>
        </React.Fragment>
        
    );
};

export default Form;