import React, { useState } from "react";
import Navbar from "../../ReusbaleNavbar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ResetEmailSentMessage from "./ResetPassword/ResetEmailSentMessage";
import { useNavigate } from "react-router-dom";

import classes from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();

  const handleResetPasswordClick = () => {
    // Perform any necessary actions before setting emailSent to true
    setEmailSent(true);
  };
  const handleGoBackLoginClick = () => {
    navigate("/signin");
  };

  return (
    <div>
      <div className={classes.navbar}>
        <Navbar />
      </div>
      <div className={classes.main_container}>
        {!emailSent ? ( // Conditional rendering based on emailSent state
          <>
            <div className={classes.title_container}>
              <p className={classes.title_container_title}>Forgot Password ?</p>
              <p className={classes.title_container_content}>
                Enter your registered email address to reset your password
              </p>
            </div>
            <div className={classes.input_container}>
              <input
                type="text"
                className={classes.input_style}
                placeholder="Email Address"
              />
            </div>
            <div className={classes.buttons_container}>
              <button
                className={classes.signin_button}
                onClick={handleResetPasswordClick}
              >
                Send Reset Email
              </button>
              <button
                className={classes.back_to_login}
                onClick={handleGoBackLoginClick}
              >
                <AiOutlineArrowLeft />
                <span className={classes.login_text}> Back to Login</span>
              </button>
            </div>
          </>
        ) : (
          <ResetEmailSentMessage />
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
