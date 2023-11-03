import React from "react";
import PodcastInfo from "./PodcastInfo/PodcastInfo";
import classes from "./Home.module.css";
import MainContent from "./MainContent";
import PodcastTreasure from "./PodcastTreasure";
import DiscoverComponent from "./DiscoverComponent/DiscoverComponent";
import FooterComponent from "./FooterComponent/FooterComponent";
import Testimonials from "./TestimonialsComponent/Testimonials";

function Home() {
  return (
    <div className={classes.home}>
      <div>
        {/* Include Navbar and Main Content */}
        <MainContent />

        {/* Including Podcast Info */}
        <PodcastInfo />

        {/* TODO: Here should be Reusable Components */}
        <DiscoverComponent />

        <Testimonials />
        {/* Including Podcast Treasure */}
        <PodcastTreasure />
        <FooterComponent />
      </div>
    </div>
  );
}

export default Home;