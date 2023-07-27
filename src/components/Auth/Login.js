import axios from "axios";
import { Form, Field, Formik } from "formik";
import React, { useState } from "react";
import logo from "../../assets/img/logowork.webp";
import { Link } from "react-router-dom/cjs/react-router-dom";
import "../../assets/css/login.css";
import { FaUserAlt, FaLock } from "react-icons/fa";
const Login = () => {
  const INITIALVALUES = {
    email: "",
    password: "",
  };
  return (
    <Formik
      initialValues={INITIALVALUES}
      onSubmit={async (values, { resetForm }) => {
        // dispatch(authApi(values, history));
        // handleAuth(values);
        resetForm();
      }}
    >
      <Form>
        <div className="main-container">
          <div className="container">
            <div className="row justify-content-center align-items-center min-vh-100">
              <div className=" col-sm-8 col-md-8 col-lg-5 col-xl-5">
                <div className="card-login  p-3 mb-5  rounded">
                  <div className="card-body">
                    <div className="card-title text-center mb-4 login-logo">
                      <img src={logo} />
                      <div>WORKFLOW SYSTEM</div>
                    </div>

                    <>
                      <div className="form-group">
                        <label
                          htmlFor="username"
                          className="text-light font-weight-bold"
                        >
                          Email
                        </label>
                        <div className="group-input">
                          <FaUserAlt className="user-icon" />
                          <Field
                            name="email"
                            type="text"
                            className="form-control input"
                            id="username"
                            placeholder="Username"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="password"
                          className="text-light font-weight-bold"
                        >
                          Password
                        </label>
                        <div className="group-input">
                          <FaLock className="user-icon" />
                          <Field
                            type="password"
                            name="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                          />
                        </div>
                      </div>{" "}
                    </>

                    <Link to="/task">
                      <button
                        type="submit"
                        className="btn   btn-fill btn-block mb-2"
                      >
                        Login
                      </button>
                    </Link>
                  </div>
                  {/* <div>version 0.1</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default Login;
