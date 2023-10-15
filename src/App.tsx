import React from "react";
import PodcastInfo from "./podcast-info/PodcastInfo";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PodcastInfo />
    </div>
  );
}

export default App;
