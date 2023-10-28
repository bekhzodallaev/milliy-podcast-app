import React from "react";

import classes from "./Newsletter.module.css";

import { AiOutlineRight } from "react-icons/ai";

const Newsletter = () => {
  return (
    <div className={classes.newsletter_main}>
      <div className={classes.newsletter_container}>
        <div className={classes.left_side}>
          <div className={classes.left_side_title}>
            <p>Get the Latest Updates Here</p>
            <p>
              Subscribe to our newsletter for updates, promotions, and exclusive
              content.
            </p>
          </div>
          <div>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email Address"
            />
            <button type="submit">
              Subscribe <AiOutlineRight />
            </button>
          </div>
          <p></p>
        </div>
        <div className={classes.right_side_picture}></div>
      </div>
    </div>
  );
};

export default Newsletter;
