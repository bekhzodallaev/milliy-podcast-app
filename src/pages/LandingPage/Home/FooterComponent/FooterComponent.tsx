import React from "react";
import classes from "./FooterComponent.module.css";
import Logo from "../../../../assets/Logo/logo.png";
import PodcastLogo from "../../../../assets/Logo/podcast.svg";
import { useTranslation } from "react-i18next";
const date = new Date().getFullYear();

const FooterComponent = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.footer_container}>
      <div className={classes.footer_container_content}>
        <div className={classes.footer_info}>
          <div className={classes.podcast_logo}>
            <img src={Logo} alt="" />
            <img src={PodcastLogo} alt="" />
          </div>
          <div className={classes.links}>
            <ul>
              <li>
                {" "}
                <a href="#">{t("footer.about")}</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">{t("footer.pricing")}</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">{t("footer.faq")}</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">{t("footer.contact")}</a>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.footer_details}>
          <div className={classes.rights}>
            <p>
              &copy; {date} {t("footer.rights")}
            </p>
          </div>
          <div className={classes.terms_services}>
            <ul>
              <li>
                <a href="#">{t("footer.policy")}</a>
              </li>
              <li>
                <a href="#">{t("footer.terms")}</a>
              </li>
              <li>
                <a href="#">{t("footer.cookies")}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
