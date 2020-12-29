import React, { Component } from "react";
import styled from "styled-components";
import "../App.css";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";


const Form = (props) => {
    return(
        <React.Fragment>
<RegistrationForm />
        <LoginForm/>
        </React.Fragment>
        
    );
};

export default Form;