import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import classes from "./Navbar.module.css";
import Logo from "../../../../assets/Logo/logo.png";
import PodcastLogo from "../../../../assets/Logo/podcast.svg";
import MenuVector1 from "../../../../assets/LandingPageAssets/HomePage/MenuAssets/Vector 1.svg";
import MenuVector2 from "../../../../assets/LandingPageAssets/HomePage/MenuAssets/Vector 1.svg";
import MenuVector3 from "../../../../assets/LandingPageAssets/HomePage/MenuAssets/Vector 3.svg";
import CancelIcon from "../../../../assets/LandingPageAssets/HomePage/MenuAssets/Group 1.svg";
import LanguageSelector from "../../../../assets/LanguageSelector/LanguageSelector";
import { MdLanguage } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const { t } = useTranslation();

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
          <div className={`${classes.mobile_links}`}>
            <ul>
              <li>
                <Link
                  to="aboutus"
                  className={classes.navbar_links}
                  spy={true}
                  smooth={true}
                  offset={-100}
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  to="faq"
                  className={classes.navbar_links}
                  spy={true}
                  smooth={true}
                  offset={-100}
                >
                  {t("faq")}
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  className={classes.navbar_links}
                  spy={true}
                  smooth={true}
                  offset={-100}
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
        )}
        <div className={classes.navbar_buttons}>
          <ul>
            <li>
              <Link
                to="aboutus"
                className={classes.navbar_links}
                spy={true}
                smooth={true}
                offset={-100}
              >
                {t("about")}
              </Link>
            </li>
            <li>
              <Link
                to="faq"
                className={classes.navbar_links}
                spy={true}
                smooth={true}
                offset={-100}
              >
                {t("faq")}
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className={classes.navbar_links}
                spy={true}
                smooth={true}
                offset={-100}
              >
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.lng_container}>
          <MdLanguage className={classes.lng_icon} />
          <LanguageSelector />
        </div>
        <div className={classes.signup_button}>
          <button className="singup_btn" onClick={handleSignUpClick}>
            {t("sign_up")}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
