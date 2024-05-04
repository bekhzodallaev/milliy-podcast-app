import React from "react";
import Bar from "../../assets/MainAppAssets/MainHomepage/menu-04.svg";
import ProfilePhoto from "../../assets/MainAppAssets/MainHomepage/image 106.png";
import NotificationLogo from "../../assets/MainAppAssets/MainHomepage/notification-03.svg";
import SearchLogo from "../../assets/MainAppAssets/MainHomepage/search.svg";

import styles from "./Homepage.module.css";
const MainAppHome = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={`${styles.logo} ${styles.flex_item}`}>
          <img src={Bar} alt="Podcast Bar" />
          <p>milliypodcast</p>
        </div>
        <form className={`${styles.form} ${styles.flex_item}`}>
          <button type="submit" className={styles.btn}>
            {/* <SearchLogo /> */}
            <img src={SearchLogo} alt="Search Logo" />
          </button>
          <input
            type="text"
            placeholder="Search for podcasts"
            className={styles.input}
          />
        </form>
        <div className={`${styles.profile} ${styles.flex_item}`}>
          <img src={NotificationLogo} alt="Notification logo" />
          <img src={ProfilePhoto} alt="Profile photo" />
        </div>
      </header>
      <main></main>
    </div>
  );
};

export default MainAppHome;
