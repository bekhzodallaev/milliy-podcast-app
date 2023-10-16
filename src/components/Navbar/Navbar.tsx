import React from "react";
import { Button } from "@mui/material";

import "./Navbar.css";
import Logo from "../../assets/logo.png";
import PodcastLogo from "../../assets/podcast.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Main Logo" />
        <img src={PodcastLogo} alt="Podcast Logo" />
      </div>
      <div className="navbar-buttons">
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
      <div className="signup-button">
        <Button size="small" style={{ color: "white" }}>
          Sign Up
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
