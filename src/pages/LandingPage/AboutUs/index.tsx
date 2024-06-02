import React from "react";
import ReusableNavbar from "../ReusableNavbar/ReusableNavbar";
import styles from "./AboutUs.module.css";
import FooterComponent from "../Home/FooterComponent/FooterComponent";
import { useTranslation } from "react-i18next";
// const navigate = useNavigate();
// const handleAboutUsClick = () => {
//   navigate("/main-app");
// };
const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div>
      <header className={styles.header}>
        <ReusableNavbar />
      </header>
      <main className={styles.main}>
        <section className={styles.main_content}>
          <h1>{t("about.heading1")}</h1>
          <p>{t("about.text1")}</p>
        </section>
        <section className={styles.main_content}>
          <p className={styles.order_1}>{t("about.text2")}</p>
          <h1 className={styles.order_2}>{t("about.heading2")}</h1>
        </section>
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
};

export default AboutUs;
