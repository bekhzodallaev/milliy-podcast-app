import React from "react";
import classes from "./MainContent.module.css";
import ArrowRight from "../../../../assets/arrow-right.svg";
import Navbar from "../Navbar/Navbar";

const MainContent: React.FC = (props) => {
  return (
    <div className={classes.main_content}>
      <Navbar />
      <div className={classes.main_container_1}>
        <div className={classes.left_side}>
          <div className={classes.main_text}>
            Discover the world of podcasts with us
          </div>
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
