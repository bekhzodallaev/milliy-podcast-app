import React from "react";
import Navbar from "../ReusbaleNavbar";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineArrowLeft } from "react-icons/ai";

import classes from "./SignUp.module.css";

const SignUp = () => {
  const navigate = useNavigate();

  const handleGoBackLoginClick = () => {
    navigate("/signin");
  };

  const handleCreateAccountClick = () => {
    navigate("/verify-account");
  };
  return (
    <div>
      <Navbar />

      <div className={classes.main_container}>
        <div className={classes.title_container}>
          <p className={classes.title_container_title}>Create Account</p>
          <p className={classes.title_container_content}>
            Begin your podcast adventure and discover a world of audio
            exploration
          </p>
        </div>
        <div className={classes.input_container}>
          <input
            type="text"
            className={classes.input_style}
            placeholder="Full Name"
          />
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
        </div>
        <div className={classes.buttons_container}>
          <button
            className={classes.signin_button}
            onClick={handleCreateAccountClick}
          >
            Create Account
          </button>
          <button className={classes.google_signin}>
            <FcGoogle />
            Google
          </button>
          <button
            className={classes.back_to_login}
            onClick={handleGoBackLoginClick}
          >
            <AiOutlineArrowLeft />
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
