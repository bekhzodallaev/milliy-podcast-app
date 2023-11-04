import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./VerifyAccount.module.css";

const VerifiedAccount = () => {
  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    navigate("/verify-account");
  };
  return (
    <div>
      <div className={classes.main_container}>
        <div className={classes.title_container}>
          <p className={classes.title_container_title}>You are all set</p>
          <p className={classes.title_container_content}>
            Your account has been successfully created. Get ready to explore a
            world of podcasts
          </p>
        </div>

        <div className={classes.buttons_container}>
          <button
            className={classes.signin_button}
            onClick={handleCreateAccountClick}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifiedAccount;
