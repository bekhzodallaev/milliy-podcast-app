import React from "react";

import "./PodcastTreasure.css";

const PodcastTreasure = () => {
  return (
    <div className="podcast-treasure">
      <div className="main-container">
        <div className="main-container-content">
          <p className="unlock-treasure">Unlock Podcast Treasures</p>
          <p className="unlock-tresure-content">
            Delve into a vast audio landscape as we guide you through
            captivating stories
          </p>
        </div>
        <div>
          <button className="create-account-button">Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default PodcastTreasure;
