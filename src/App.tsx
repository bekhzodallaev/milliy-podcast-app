import React from "react";
import PodcastInfo from "./components/LandingPage/Home/PodcastInfo/PodcastInfo";
import "./App.css";
import Navbar from "./components/LandingPage/Home/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div>
        <div className="navbar-content">
          <Navbar />
        </div>

        <PodcastInfo />
      </div>
    </div>
  );
}

export default App;
