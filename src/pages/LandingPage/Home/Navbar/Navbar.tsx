import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import Logo from "../../../../assets/Logo/logo.png";
import PodcastLogo from "../../../../assets/Logo/podcast.svg";
import MenuVector1 from "../../../../assets/LandingPageAssets/HomePage/MenuAssets/Vector 1.svg";
import MenuVector2 from "../../../../assets/LandingPageAssets/HomePage/MenuAssets/Vector 1.svg";
import MenuVector3 from "../../../../assets/LandingPageAssets/HomePage/MenuAssets/Vector 3.svg";
import CancelIcon from "../../../../assets/LandingPageAssets/HomePage/MenuAssets/Group 1.svg";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);

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
          <div className={classes.menu_icon} onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <img
                src={CancelIcon}
                alt="Cancel Logo"
                className={classes.cancel_icon}
              />
            ) : (
              <>
                <img
                  src={MenuVector1}
                  alt="Menu Logo"
                  className={classes.menu_vector}
                />
                <img
                  src={MenuVector2}
                  alt="Menu Logo"
                  className={classes.menu_vector}
                />
                <img
                  src={MenuVector3}
                  alt="Menu Logo"
                  className={classes.last_vector}
                />
              </>
            )}
          </div>
          <img src={Logo} alt="Main Logo" />
          <img src={PodcastLogo} alt="Podcast Logo" />
        </div>
        {toggle && (
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
        )}
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