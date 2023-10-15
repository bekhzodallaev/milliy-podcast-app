import PodcastInfo from "./podcast-info/PodcastInfo";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
function App() {
  return (
    <div className="App">
      <Navbar />
      <PodcastInfo />
    </div>
  );
}

export default App;
