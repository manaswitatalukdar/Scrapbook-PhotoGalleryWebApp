import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import * as Yup from "yup";

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

const Error = styled.div`
  font-size: 12px;
  color: tomato;
`;

const LoginForm = () => {
  return (
    <FormBody>
      <h3>Login Form</h3>
      <br />
      <Formik
        initialValues={{ id: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log("Logging in", values);
          }, 500);
        }}
        //validation
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="name" name="name" placeholder="Enter your Username" />
            <br />
            <ErrorMessage name="name" component={Error} />
            <br />
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <br />
            <ErrorMessage name="email" component={Error} />
            <br />
            <button type="submit" disabled={isSubmitting} className="submitBtn">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </FormBody>
  );
};

export default LoginForm;
