import React from "react";
import PodcastInfo from "./podcast-info/PodcastInfo";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

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
