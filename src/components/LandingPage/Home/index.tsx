import React from "react";
import PodcastInfo from "./PodcastInfo/PodcastInfo";
import classes from "./Home.module.css";
import MainContent from "./MainContent";

function Home() {
  return (
    <div className={classes.home}>
      <div>
        <MainContent />

        <PodcastInfo />
      </div>
    </div>
  );
}

export default Home;
