import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";

const FormBody = styled.div`
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.9);
  padding-top: 30px;
  position: relative;
  padding-bottom: 100px;
  margin: 80px 500px;
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
      <h3>Sign In Form</h3>
      <br />
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.password) {
            errors.password = "Password must have atleast 1 character";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="name" name="name" placeholder="Name" />
            <br />
            <ErrorMessage name="name" component={Error} />
            <br />
            <Field type="email" name="email" placeholder="Email" />
            <br />
            <ErrorMessage name="email" component={Error} />
            <br />
            <Field type="password" name="password" placeholder="Password" />
            <br />
            <ErrorMessage name="password" component={Error} />
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
