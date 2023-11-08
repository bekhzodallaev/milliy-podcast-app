import React from "react";
import Navbar from "../ReusbaleNavbar";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import classes from "./SignIn.module.css";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };
  const rightSide = (
    <>
      <button className={classes.signup_button} onClick={handleSignUpClick}>
        Sign Up
      </button>
    </>
  );
  return (
    <div>
      <Navbar rightSide={rightSide} />

      <div className={classes.main_container}>
        <div className={classes.title_container}>
          <p className={classes.title_container_title}>Let's join with us</p>
          <p className={classes.title_container_content}>
            Welcome back, fill out the forms below to login to your account,
          </p>
        </div>
        <div className={classes.input_container}>
          <input
            type="text"
            className={classes.input_style}
            placeholder="Email Address"
          />
          <input
            type="text"
            className={classes.input_style}
            placeholder="Password"
          />
          <Link to={"/forgot-password"} className={classes.forgot_password}>
            Forgot your password?
          </Link>
        </div>
        <div className={classes.buttons_container}>
          <button className={classes.signin_button}>Sign In</button>
          <div className={classes.google_signin}>
            <FcGoogle />
            <button className={classes.signin_white}>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
