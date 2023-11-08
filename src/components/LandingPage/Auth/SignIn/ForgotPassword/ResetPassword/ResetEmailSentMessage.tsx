import React from "react";
import Navbar from "../../../ReusbaleNavbar";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

import classes from "./styles.module.css";

const ResetEmailSentMessage = () => {
  const navigate = useNavigate();

  const handleGoBackLoginClick = () => {
    navigate("/signin");
  };

  const handleResetPasswordClick = () => {
    navigate("/reset-password");
  };
  return (
    <div>
      <div className={classes.main_container}>
        <div className={classes.title_container}>
          <p className={classes.title_container_title}>
            Reset Password Email Sent
          </p>
          <p className={classes.title_container_content}>
            We've sent a password reset link to the email address associated
            with your account. Please check your inbox, including the spam
            folder, and follow the instructions to reset your password
          </p>
        </div>

        <div className={classes.buttons_container}>
          <button
            className={classes.back_to_login}
            onClick={handleResetPasswordClick}
          >
            Didn’t receive the email ? Resend here
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

export default ResetEmailSentMessage;
