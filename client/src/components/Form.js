import React, { Component } from "react";
import styled from "styled-components";
import "../App.css";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";


const FormBody = styled.div`
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.9);
  padding-top: 30px;
  position: relative;
  padding-bottom: 100px;
  margin: 70px 450px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 1px;
`;

const Form = () => {
    return(
        <FormBody>
<RegistrationForm />
<br/><br/>
        <LoginForm/>
        </FormBody>
        
    );
};

export default Form;