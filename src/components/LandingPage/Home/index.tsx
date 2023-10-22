import React from "react";
import PodcastInfo from "./PodcastInfo/PodcastInfo";
import "./Home.css";
import MainContent from "./MainContent";

function Home() {
  return (
    <div className="home">
      <div>
        <MainContent />

        <PodcastInfo />
      </div>
    </div>
  );
}

export default Home;
