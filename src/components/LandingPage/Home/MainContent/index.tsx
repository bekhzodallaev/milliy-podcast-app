import React from "react";
import "./MainContent.css"; // Add your CSS file for styling

import Navbar from "../Navbar/Navbar";

interface YourComponentProps {
  // Add any props you may need
}

const MainContent: React.FC<YourComponentProps> = (props) => {
  return (
    <div className="main-content">
      <div className="navbar-content">
        <Navbar />
      </div>
      <div className="left-side">
        <div className="main-text">Discover the world of podcasts with us</div>
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
  );
};

export default MainContent;
