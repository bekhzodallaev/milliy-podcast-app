import React from "react";
import classes from "./Navbar.module.css";
import Logo from "../../../../assets/logo.png";
import PodcastLogo from "../../../../assets/podcast.svg";

const Navbar: React.FC = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar_container}>
        <div className={classes.navbar_logo}>
          <img src={Logo} alt="Main Logo" />
          <img src={PodcastLogo} alt="Podcast Logo" />
        </div>
        <div className={classes.navbar_buttons}>
          <ul>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className={classes.signup_button}>
          <button className="singup_btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
