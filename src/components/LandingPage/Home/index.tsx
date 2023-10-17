import React from "react";
import PodcastInfo from "./PodcastInfo/PodcastInfo";
import "./Home.css";
import Navbar from "./Navbar/Navbar";
import MainContent from "./MainContent";

function Home() {
  return (
    <div className="App">
      <div>
        <div className="navbar-content">
          <Navbar />
        </div>

        <MainContent />

        <PodcastInfo />
      </div>
    </div>
  );
}

export default Home;
