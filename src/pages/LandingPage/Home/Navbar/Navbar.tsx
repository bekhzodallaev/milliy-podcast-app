import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import classes from "./Navbar.module.css";
import Logo from "../../../../assets/Logo/logo.png";
import PodcastLogo from "../../../../assets/Logo/podcast.svg";
import MenuVector1 from "../../../../assets/LandingPageAssets/HomePage/MenuAssets/Vector 1.svg";
import MenuVector2 from "../../../../assets/LandingPageAssets/HomePage/MenuAssets/Vector 1.svg";
import MenuVector3 from "../../../../assets/LandingPageAssets/HomePage/MenuAssets/Vector 3.svg";
import CancelIcon from "../../../../assets/LandingPageAssets/HomePage/MenuAssets/Group 1.svg";
import LanguageSelector from "../../../../assets/LanguageSelector/LanguageSelector";
import { useTranslation } from "react-i18next";
import Home from "../../../../main-app/Homepage/MainAppHome";
const Navbar: React.FC = () => {
  const { t } = useTranslation();

  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contact");
  };
  const handleSignUpClick = () => {
    navigate("/welcome");
  };

  const handleAboutUsClick = () => {
    navigate("/aboutus");
  };
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollToFAQ) {
      const faqSection = document.getElementById("faq");
      if (faqSection) {
        window.scrollTo({
          top: faqSection.offsetTop - 100,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

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
                  onClick={handleAboutUsClick}
                >
                  {t("navbar.about")}
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
                  {t("navbar.faq")}
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  className={classes.navbar_links}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  onClick={handleContactClick}
                >
                  {t("navbar.contact")}
                </Link>
              </li>
            </ul>
            <div className={classes.lng_container_mobile}>
              <LanguageSelector />
            </div>
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
                onClick={handleAboutUsClick}
              >
                {t("navbar.about")}
              </Link>
            </li>
            <li>
              <Link
                to="faq"
                className={classes.navbar_links}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {t("navbar.faq")}
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className={classes.navbar_links}
                spy={true}
                smooth={true}
                offset={-100}
                onClick={handleContactClick}
              >
                {t("navbar.contact")}
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.lng_container}>
          <LanguageSelector />
        </div>
        <div className={classes.signup_button}>
          <button className="singup_btn" onClick={handleSignUpClick}>
            {t("navbar.sign_up")}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
