import React from "react";
import styles from "./Contacts.module.css";
import EmailLogo from "../../../../assets/LandingPageAssets/HomePage/AboutAssets/Message.svg";
import PhoneLogo from "../../../../assets/LandingPageAssets/HomePage/AboutAssets/Calling.svg";
import InstaLogo from "../../../../assets/LandingPageAssets/HomePage/AboutAssets/InstaLogo.svg";
import LinkedinLogo from "../../../../assets/LandingPageAssets/HomePage/AboutAssets/LinkedinLogo.svg";
import WhatsAppLogo from "../../../../assets/LandingPageAssets/HomePage/AboutAssets/WhatsApp.svg";
import TelegramLogo from "../../../../assets/LandingPageAssets/HomePage/AboutAssets/TelegramLogo.svg";
import { useTranslation } from "react-i18next";
import ReusableContacts from "./ReusableContacts";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container} id="contact">
      <div className={styles.introduction}>
        <h1 className={styles.title}>{t("contact.title")}</h1>
        <p className={styles.text}>{t("contact.text")}</p>
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
          <label htmlFor="name">{t("contact.name")}</label>
          <input
            type="text"
            id="name"
            placeholder={t("contact.inputName")}
            className={styles.input}
          />
        </div>
        <div className={styles.input_email}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder={t("contact.inputEmail")}
            className={styles.input}
          />
        </div>
        <div className={styles.input_role}>
          <label htmlFor="role">{t("contact.inputRole")}</label>
          <select name="role" id="role" className={styles.select}>
            <option value="" disabled selected>
              {t("contact.optionRole")}
            </option>

            <option value="user">{t("user")}</option>
            <option value="podcaster">{t("contact.podcaster")}</option>
          </select>
        </div>
        <div className={styles.input_number}>
          <label htmlFor="phone">{t("contact.phone")}</label>
          <input
            type="number"
            id="phone"
            placeholder={t("contact.phoneNumber")}
            className={styles.input}
          />
        </div>
        <div className={styles.input_country}>
          <label htmlFor="country">{t("contact.country")}</label>
          <select name="country" id="country" className={styles.select}>
            <option value="" disabled selected>
              {t("contact.optionCountry")}
            </option>
            <option value="USA">USA</option>
            <option value="England">England</option>
            <option value="Japan">Japan</option>
          </select>
        </div>
        <div className={styles.input_postal_code}>
          <label htmlFor="postal_code">{t("contact.postalcode")}</label>
          <input
            type="text"
            name="postal_code"
            id="postal_code"
            className={styles.input}
          />
        </div>
        <div className={styles.input_subject}>
          <label htmlFor="Subject">{t("contact.subject")}</label>
          <textarea
            name="Subject"
            id="Subject"
            cols={30}
            rows={10}
            placeholder={t("contact.textareaPlaceholder")}
            className={styles.input_textarea}
          ></textarea>
        </div>
        <button type="submit" className={styles.submit}>
          {t("contact.submitBtn")}
        </button>
      </form>
      <div>
        {" "}
        <h1 className={styles.heading}>{t("contact.heading")}</h1>
        <h1 className={styles.heading}>{t("contact.followUs")}</h1>
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
