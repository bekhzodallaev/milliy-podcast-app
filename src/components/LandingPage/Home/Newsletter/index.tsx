import classes from "./Newsletter.module.css";
import { AiOutlineRight } from "react-icons/ai";

const Newsletter = () => {
  return (
    <div className={classes.newsletter_main}>
      <div className={classes.newsletter_container}>
        <div className={classes.left_side}>
          <div className={classes.left_side_title}>
            <p className={classes.container_title}>
              Get the Latest Updates <br /> Here
            </p>
            <p className={classes.container_content}>
              Subscribe to our newsletter for updates, promotions, and <br />
              exclusive content.
            </p>
          </div>
          <div className={classes.input_button}>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email Address"
              className={classes.email_input}
            />
            <button type="submit" className={classes.subscribe_button}>
              Subscribe <AiOutlineRight />
            </button>
          </div>
          <p className={classes.footer_content}>
            By subscribing you agree to with our
            <p className={classes.privicy_policy}> Privacy policy</p> and
            provide
            <br />
            consent to receive updates from our company.
          </p>
        </div>
        <div className={classes.right_side_picture}></div>
      </div>
    </div>
  );
};

export default Newsletter;
