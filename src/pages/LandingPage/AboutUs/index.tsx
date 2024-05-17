import React from "react";
import ReusableNavbar from "../ReusableNavbar/ReusableNavbar";
import styles from "./AboutUs.module.css";
import FooterComponent from "../Home/FooterComponent/FooterComponent";
// const navigate = useNavigate();
// const handleAboutUsClick = () => {
//   navigate("/main-app");
// };
const AboutUs = () => {
  return (
    <div>
      <header>
        <ReusableNavbar />
      </header>
      <main>
        <section className={styles.main_content}>
          <h1>Our Story, Our Mission</h1>
          <p>
            Welcome to the about page of Echoes of Dreams! Here, we invite you
            to learn more about our podcast journey, our team, and our mission
            to share stories that resonate deeply with the human experience.
            Discover the inspiration behind our podcast, our commitment to
            authenticity, and our passion for storytelling. Join us as we
            explore the beauty of love, the pain of loss, and the hope of second
            chances through the power of narrative
          </p>
        </section>
        <section className={styles.main_content}>
          <p>
            Step behind the mic and uncover the heart and soul of Echoes of
            Dreams. In this section, we invite you to peek behind the curtain
            and learn more about the faces and voices behind the podcast. From
            our humble beginnings to our shared vision for touching hearts and
            inspiring minds, discover the journey that led us here. Get to know
            our team, our values, and our unwavering dedication to crafting
            compelling stories that leave a lasting impact. Welcome to the
            heartbeat of Echoes of Dreams
          </p>
          <h1>Behind the Mic</h1>
        </section>
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
};

export default AboutUs;
