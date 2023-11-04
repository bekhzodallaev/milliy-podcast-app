import React from "react";
import classes from "./WelcomePage.module.css";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";

import podcast from "../../../assets/podcast.svg";
import logo from "../../../assets/logo.png";

const Welcome = () => {
  return (
    <div className={classes.welcome_page}>
      <div className={classes.circle_container}>
        <Link to={"/"}>
          <AiOutlineLeft className={classes.arrow_left_icon} />
        </Link>
      </div>
      <div className={classes.main_container}>
        <div className={classes.left_side}></div>
        <div className={classes.right_side}>
          <div className={classes.logo_container}>
            <div className={classes.main_title}>
              <p className={classes.main_title_content}>Welcome to</p>
              <div className={classes.podcast_logo}>
                <img src={logo} alt="" />
                <img src={podcast} alt="" className={classes.podcast} />
              </div>
            </div>
            <p className={classes.content_text}>
              Dive into the world of podcasts like never before. Discover,
              listen, and engage with your favorite shows
            </p>
          </div>
          <div className={classes.login_buttons}>
            <button className={classes.signin_button}>Sign In</button>
            <button className={classes.create_account_button}>
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
