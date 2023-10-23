import React from "react";
import { Button } from "@mui/material";

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
          <Button variant="text" style={{ color: "white" }}>
            About
          </Button>
          <Button variant="text" style={{ color: "white" }}>
            FAQ
          </Button>
          <Button variant="text" style={{ color: "white" }}>
            Contact
          </Button>
        </div>
        <div className={classes.signup_button}>
          <Button size="small" style={{ color: "white" }}>
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
