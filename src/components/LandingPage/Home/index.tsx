import React from "react";
import PodcastInfo from "./PodcastInfo/PodcastInfo";
import classes from "./Home.module.css";
import MainContent from "./MainContent";
import DiscoverComponent from "./DiscoverComponent/DiscoverComponent";

function Home() {
  return (
    <div className={classes.home}>
      <div>
        <MainContent />

        <PodcastInfo />

        <DiscoverComponent />
      </div>
    </div>
  );
}

export default Home;
