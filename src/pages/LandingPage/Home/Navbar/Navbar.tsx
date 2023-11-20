import React from "react";
import { useNavigate, Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import Logo from "../../../../assets/logo.png";
import PodcastLogo from "../../../../assets/podcast.svg";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/welcome");
  };

  const handleAboutUsClick = () => {
    navigate("/aboutus");
  };
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
              <Link to="/aboutus" className={classes.navbar_links}>
                About
              </Link>
            </li>
            <li>
              <Link to="/faq" className={classes.navbar_links}>
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className={classes.navbar_links}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.signup_button}>
          <button className="singup_btn" onClick={handleSignUpClick}>
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
