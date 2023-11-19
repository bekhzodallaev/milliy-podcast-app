import React from "react";
import Navbar from "../../../ReusbaleNavbar";
import { useNavigate } from "react-router-dom";

import classes from "./styles.module.css";

const PasswordSuccessful = () => {
  const navigate = useNavigate();

  const handleResetPasswordClick = () => {
    navigate("/signin");
  };
  return (
    <div>
      <Navbar />

      <div className={classes.main_container}>
        <div className={classes.title_container}>
          <p className={classes.title_container_title}>
            Password Reset Successful
          </p>
          <p className={classes.title_container_content}>
            Your password has been successfully reset. You can now sign in with
            your new password
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
        </div>
        <div className={classes.buttons_container}>
          <button
            className={classes.signin_button}
            onClick={handleResetPasswordClick}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordSuccessful;
