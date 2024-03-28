import classes from "./PodcastTreasure.module.css";
import { useTranslation } from "react-i18next";
const PodcastTreasure = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.podcast_treasure}>
      <div className={classes.main_container}>
        <div className={classes.main_container_content}>
          <p className={classes.unlock_treasure}>{t("unlockTreasure.title")}</p>
          <p className={classes.unlock_tresure_content}>
            {t("unlockTreasure.content")}
          </p>
        </div>
        <div>
          <button className={classes.create_account_button}>
            {t("unlockTreasure.accountBtn")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PodcastTreasure;
