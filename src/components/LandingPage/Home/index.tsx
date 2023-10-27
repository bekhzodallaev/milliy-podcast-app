import React from "react";
import PodcastInfo from "./PodcastInfo/PodcastInfo";
import classes from "./Home.module.css";
import MainContent from "./MainContent";
import DiscoverComponent from "./DiscoverComponent/DiscoverComponent";
import Testimonials from "./TestimonialsComponent/Testimonials";

function Home() {
  return (
    <div className={classes.home}>
      <div>
        <MainContent />

        <PodcastInfo />

        <DiscoverComponent />

        <Testimonials />
      </div>
    </div>
  );
}

export default Home;
