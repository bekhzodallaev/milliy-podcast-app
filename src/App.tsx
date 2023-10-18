import React from "react";
import PodcastInfo from "./podcast-info/PodcastInfo";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import DiscoverComponent from "./discover-component/DiscoverComponent";

function App() {
  return (
    <div className="App">
      <div>
        <div className="navbar-content">
          <Navbar />
        </div>

        <PodcastInfo />
        <DiscoverComponent />
      </div>
    </div>
  );
}

export default App;
