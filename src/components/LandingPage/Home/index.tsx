import React from "react";
import PodcastInfo from "./PodcastInfo/PodcastInfo";
import "./Home.css";
import MainContent from "./MainContent";
import PodcastTreasure from "./PodcastTreasure";

function Home() {
  return (
    <div className="home">
      <div>
        {/* Include Navbar and Main Content */}
        <MainContent />

        {/* Including Podcast Info */}
        <PodcastInfo />

        {/* TODO: Here should be Reusable Components */}

        {/* Including Podcast Treasure */}
        <PodcastTreasure />
      </div>
    </div>
  );
}

export default Home;
