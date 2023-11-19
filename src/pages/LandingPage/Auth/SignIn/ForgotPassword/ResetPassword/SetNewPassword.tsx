import React from "react";
import Navbar from "../../../ReusbaleNavbar";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

import classes from "./styles.module.css";

const SetNewPassword = () => {
  const navigate = useNavigate();

  const handleGoBackLoginClick = () => {
    navigate("/signin");
  };

  const handleResetPasswordClick = () => {
    navigate("/updated-password");
  };
  return (
    <div>
      <Navbar />

      <div className={classes.main_container}>
        <div className={classes.title_container}>
          <p className={classes.title_container_title}>Set new Password</p>
          <p className={classes.title_container_content}>
            Enter a new password for your account
          </p>
        </div>
        <div className={classes.input_container}>
          <input
            type="text"
            className={classes.input_style}
            placeholder="New Password"
          />
          <input
            type="text"
            className={classes.input_style}
            placeholder="Confirm Password"
          />
        </div>
        <div className={classes.buttons_container}>
          <button
            className={classes.signin_button}
            onClick={handleResetPasswordClick}
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;
