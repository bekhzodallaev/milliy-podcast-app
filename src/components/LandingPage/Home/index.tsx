import React from "react";
import PodcastInfo from "./PodcastInfo/PodcastInfo";
import classes from "./Home.module.css";
import MainContent from "./MainContent";
import DiscoverComponent from "./DiscoverComponent/DiscoverComponent";
import FAQComponent from "./FAQ";

function Home() {
  return (
    <div className={classes.home}>
      <MainContent />

      <PodcastInfo />

      <DiscoverComponent />

      <FAQComponent />
    </div>
  );
}

export default Home;
