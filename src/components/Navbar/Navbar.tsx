import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import PodcastLogo from "../../assets/podcast.svg";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
        <img src={PodcastLogo} alt="Logo" />
      </div>
      <div className="navbar-buttons">
        <button>About</button>
        <button>FAQ</button>
        <button>Contact</button>
      </div>
      <div className="signup-button">
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
