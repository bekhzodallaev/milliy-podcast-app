import React from "react";
import PodcastInfo from "./PodcastInfo/PodcastInfo";
import "./Home.css";
import MainContent from "./MainContent";
import DiscoverComponent from "./DiscoverComponent/DiscoverComponent";

function Home() {
  return (
    <div className="home">
      <div>
        <MainContent />

        <PodcastInfo />

        <DiscoverComponent />
      </div>
    </div>
  );
}

export default Home;
