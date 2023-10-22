import React from "react";
import "./MainContent.css";

import Navbar from "../Navbar/Navbar";

const MainContent: React.FC = (props) => {
  return (
    <div className="main-content">
      <div className="navbar-content">
        <Navbar />
      </div>
      <div className="main-container-1">
        <div className="left-side">
          <div className="main-text">
            Discover the world of podcasts with us
          </div>
          <div className="content-text">
            Experience a new way to enjoy podcasts with our innovative app.
            Browse, and share your favorite shows anytime, anywhere.
          </div>
          <div className="main-buttons">
            <button className="browse-episodes">Browse Episodes</button>
            <button className="become-podcaster">Become a podcaster</button>
          </div>
        </div>
        <div className="right-side"></div>
      </div>
    </div>
  );
};

export default MainContent;
