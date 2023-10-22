import React from "react";
import classes from "./MainContent.module.css";

import Navbar from "../Navbar/Navbar";

const MainContent: React.FC = (props) => {
  return (
    <div className={classes.main_content}>
      <div className={classes.navbar_content}>
        <Navbar />
      </div>
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
            <button className={classes.browse_episodes}>Browse Episodes</button>
            <button className={classes.become_podcaster}>
              Become a podcaster
            </button>
          </div>
        </div>
        <div className={classes.right_side}></div>
      </div>
    </div>
  );
};

export default MainContent;
