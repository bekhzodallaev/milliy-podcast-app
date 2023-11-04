import React, { ReactNode } from "react";
import classes from "./Navbar.module.css";

import logo from "../../../../assets/logo.png";
import podcast from "../images/podcast.png";

interface NavbarProps {
  rightSide?: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ rightSide }) => (
  <div className={classes.navbar}>
    <div className={classes.container}>
      <div className={classes.left_side}>
        <img src={logo} alt="Logo" />
        <img src={podcast} alt="Logo" className={classes.podcast_logo} />
      </div>
      <div className={classes.right_side}>{rightSide}</div>
    </div>
  </div>
);

export default Navbar;
