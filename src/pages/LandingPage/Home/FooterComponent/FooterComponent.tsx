import React from "react";
import classes from "./FooterComponent.module.css";
import Logo from "../../../../assets/logo.png";
import PodcastLogo from "../../../../assets/podcast.svg";
const date = new Date().getFullYear();

const FooterComponent = () => {
  return (
    <div className={classes.footer_container}>
      <div className={classes.footer_container_content}>
        <div className={classes.footer_info}>
          <div className={classes.podcast_logo}>
            <img src={Logo} alt="" />
            <img src={PodcastLogo} alt="" />
          </div>
          <div className={classes.links}>
            <ul>
              <li>
                {" "}
                <a href="#">ABOUT</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">PRICING</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">FAQ</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">CONTACT</a>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.footer_details}>
          <div className={classes.rights}>
            <p>&copy; {date} Podcast. All rights reserved</p>
          </div>
          <div className={classes.terms_services}>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Cookies Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
