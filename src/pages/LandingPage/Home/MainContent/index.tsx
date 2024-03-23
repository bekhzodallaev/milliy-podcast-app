import React from "react";
import classes from "./MainContent.module.css";
import ArrowRight from "../../../../assets/LandingPageAssets/HomePage/MainContentAssets/arrow-right.svg";
import Navbar from "../Navbar/Navbar";
import { useTranslation } from "react-i18next";

const MainContent: React.FC = (props) => {
  const { t } = useTranslation();
  return (
    <div className={classes.main_content}>
      <Navbar />
      <div className={classes.main_container_1}>
        <div className={classes.left_side}>
          <div className={classes.main_text}>{t("discoverHeading")}</div>
          <div className={classes.content_text}>
            Experience a new way to enjoy podcasts with our innovative app.
            Browse, and share your favorite shows anytime, anywhere.
          </div>
          <div className={classes.main_buttons}>
            <button className={classes.browse_episodes}>
              Browse Episodes <img src={ArrowRight} alt="" />{" "}
            </button>
            <button className={classes.become_podcaster}>
              <span> Become a podcaster</span>
            </button>
          </div>
        </div>
        <div className={classes.right_side}></div>
      </div>
    </div>
  );
};

export default MainContent;
