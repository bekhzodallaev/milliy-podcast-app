import React from "react";
import styles from "./Contacts.module.css";
import EmailLogo from "../../../../assets/LandingPageAssets/HomePage/AboutAssets/Message.svg";
import PhoneLogo from "../../../../assets/LandingPageAssets/HomePage/AboutAssets/Calling.svg";
import InstaLogo from "../../../../assets/LandingPageAssets/HomePage/AboutAssets/InstaLogo.svg";
import LinkedinLogo from "../../../../assets/LandingPageAssets/HomePage/AboutAssets/LinkedinLogo.svg";
import WhatsAppLogo from "../../../../assets/LandingPageAssets/HomePage/AboutAssets/WhatsApp.svg";
import TelegramLogo from "../../../../assets/LandingPageAssets/HomePage/AboutAssets/TelegramLogo.svg";

import ReusableContacts from "./ReusableContacts";

const AboutUs = () => {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.introduction}>
        <h1 className={styles.title}>Let's work together</h1>
        <p className={styles.text}>
          Let's transform your ideas into reality! Take the first step towards
          collaboration by reaching out and sharing your vision. Your journey to
          success begins with a simple message. Together, we can make it happen!
        </p>
      </div>
      <div className={styles.contacts}>
        <div className={styles.email}>
          <div className={styles.image_container}>
            {" "}
            <img src={EmailLogo} alt="" />
          </div>
          <p className={styles.contact_text}>contact@podcast.app</p>
        </div>
        <div className={styles.number}>
          <div className={styles.image_container}>
            {" "}
            <img src={PhoneLogo} alt="" />
          </div>
          <p className={styles.contact_text}>(48) 123 456 789</p>
        </div>
      </div>
      <form action="submit" className={styles.form_submit}>
        <div className={styles.input_name}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className={styles.input_email}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Email address" />
        </div>
        <div className={styles.input_role}>
          <label htmlFor="role">Role</label>
          <select name="role" id="role">
            <option value="" disabled selected>
              Choose your role
            </option>

            <option value="user">User</option>
            <option value="podcaster">Podcaster</option>
          </select>
        </div>
        <div className={styles.input_number}>
          <label htmlFor="phone">Phone number</label>
          <input
            type="numbe"
            id="phone"
            placeholder="Enter your phone number"
          />
        </div>
        <div className={styles.input_country}>
          <label htmlFor="country">Country</label>
          <select name="country" id="country">
            <option value="" disabled selected>
              Select your country
            </option>
            <option value="USA">USA</option>
            <option value="England">England</option>
            <option value="Japan">Japan</option>
          </select>
        </div>
        <div className={styles.input_postal_code}>
          <label htmlFor="postal_code">Postal code</label>
          <input type="text" name="postal_code" id="postal_code" />
        </div>
        <div className={styles.input_subject}>
          <label htmlFor="Subject">Subject</label>
          <textarea
            name="Subject"
            id="Subject"
            cols={30}
            rows={10}
            placeholder="Please tell us little bit more about your idea."
            className={styles.input_textarea}
          ></textarea>
        </div>
        <button type="submit" className={styles.submit}>
          Submit
        </button>
      </form>
      <div>
        {" "}
        <h1 className={styles.heading}>
          Stay tuned for inspiring podcast episodes.
        </h1>
        <h1 className={styles.heading}>Follow us!</h1>
      </div>
      <div className={styles.parent_card_container}>
        <ReusableContacts
          title="Instagram"
          imageSrc={InstaLogo}
          imgDescription="Instagram Logo"
          link="https://www.instagram.com/"
          className={styles.card}
        />
        <ReusableContacts
          title="Linkedin"
          imageSrc={LinkedinLogo}
          imgDescription="Linkedin Logo"
          link="https://www.linkedin.com/in/bekallaev/"
          className={styles.card}
        />
        <ReusableContacts
          title="WhatsApp"
          imageSrc={WhatsAppLogo}
          imgDescription="WhatsApp Logo"
          link="https://www.whatsapp.com/?lang=en"
          className={styles.card}
        />
        <ReusableContacts
          title="Telegram"
          imageSrc={TelegramLogo}
          imgDescription="Telegram Logo"
          link="https://web.telegram.org/k/"
          className={styles.card}
        />
      </div>
    </div>
  );
};

export default AboutUs;
