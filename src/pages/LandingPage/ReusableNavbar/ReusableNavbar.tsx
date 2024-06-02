import React, { useState } from "react";
import styles from "./ReusableNavbar.module.css";
import Logo from "../../../assets/Logo/logo.png";
import { ReactComponent as PodcastLogo } from "../../../assets/Logo/podcast-black.svg";
import { ReactComponent as MenuVector1 } from "../../../assets/LandingPageAssets/HomePage/MenuAssets/Vector 1.svg";
import { ReactComponent as MenuVector2 } from "../../../assets/LandingPageAssets/HomePage/MenuAssets/Vector 1.svg";
import { ReactComponent as MenuVector3 } from "../../../assets/LandingPageAssets/HomePage/MenuAssets/Vector 3.svg";
import { ReactComponent as CancelIcon } from "../../../assets/LandingPageAssets/HomePage/MenuAssets/Group 1.svg";

import { Link } from "react-router-dom";
// const navigate = useNavigate();

// const handleContactClick = () => {
//   navigate("/contact");
// };
// const handleSignUpClick = () => {
//   navigate("/welcome");
// };

// const handleAboutUsClick = () => {
//   navigate("/aboutus");
// };

const ReusableNavbar = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className={styles.header_container}>
      <nav className={styles.reusable_nav}>
        <section className={styles.logo}>
          <div
            className={styles.menu_bar}
            onClick={() => setToggle((oldVal) => !oldVal)}
          >
            {toggle ? (
              <CancelIcon />
            ) : (
              <>
                <MenuVector1 />
                <MenuVector2 />
                <MenuVector3 />
              </>
            )}
          </div>
          <img src={Logo} alt="Podcast Logo" />
          <PodcastLogo className={styles.podcast_svg} />
        </section>
        {toggle && (
          <div className={styles.mobile_links}>
            <ul>
              <li>
                <Link to="/aboutus" className={styles.link}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="/#faq" className={styles.link}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className={styles.link}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        )}
        <ul className={styles.links}>
          <li>
            <Link to="/aboutus" className={styles.links}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/#faq" className={styles.links}>
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/contact" className={styles.links}>
              CONTACT
            </Link>
          </li>
        </ul>

        <button className={styles.signup_btn}>Sign Up</button>
      </nav>
    </div>
  );
};

export default ReusableNavbar;
