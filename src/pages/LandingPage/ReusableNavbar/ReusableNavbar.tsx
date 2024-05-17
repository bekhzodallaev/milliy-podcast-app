import React from "react";
import styles from "./ReusableNavbar.module.css";
import Logo from "../../../assets/Logo/logo.png";
import { ReactComponent as PodcastLogo } from "../../../assets/Logo/podcast-black.svg";
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
  return (
    <div className={styles.header_container}>
      <nav className={styles.reusable_nav}>
        <section className={styles.logo}>
          <img src={Logo} alt="Podcast Logo" />
          <PodcastLogo className={styles.podcast_svg} />
        </section>
        <ul>
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
