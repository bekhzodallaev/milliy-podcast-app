import classes from "./Newsletter.module.css";
import { AiOutlineRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";
const Newsletter = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.newsletter_main}>
      <div className={classes.newsletter_container}>
        <div className={classes.left_side}>
          <div className={classes.left_side_title}>
            <p className={classes.container_title}>{t("newsletter.title")}</p>
            <p className={classes.container_content}>
              {t("newsletter.header_content")}
            </p>
          </div>
          <div className={classes.input_button}>
            <input
              type="email"
              name=""
              id=""
              placeholder={t("newsletter.inputPlaceholder")}
              className={classes.email_input}
            />
            <button type="submit" className={classes.subscribe_button}>
              {t("newsletter.btnText")} <AiOutlineRight />
            </button>
          </div>
          <p className={classes.footer_content}>
            {t("newsletter.footer_content")}
            <p className={classes.privicy_policy}>
              {t("newsletter.privacy_policy")}
            </p>
            {t("newsletter.footer_last")}
          </p>
        </div>
        <div className={classes.right_side_picture}></div>
      </div>
    </div>
  );
};

export default Newsletter;
