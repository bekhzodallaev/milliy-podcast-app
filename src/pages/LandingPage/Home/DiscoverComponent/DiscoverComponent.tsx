import ReusableComponent from "./ReusableComponent";
import styles from "./DiscoverStyles.module.css";
import { useTranslation } from "react-i18next";
const DiscoverComponent = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.parentContainer}>
      <ReusableComponent
        heading={t("discoverPage.heading1")}
        text={t("discoverPage.text1")}
        textClassName={styles.text}
        headingClassName={styles.headingText}
      />
      <ReusableComponent
        heading={t("discoverPage.heading2")}
        text={t("discoverPage.text2")}
        headingClassName={styles.headingText}
        textClassName={styles.text}
      />
      <ReusableComponent
        heading={t("discoverPage.heading3")}
        text={t("discoverPage.text3")}
        headingClassName={styles.headingText}
        textClassName={styles.text}
      />
    </div>
  );
};

export default DiscoverComponent;
