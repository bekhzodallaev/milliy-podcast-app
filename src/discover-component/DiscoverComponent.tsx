import ReusableComponent from "./ReusableComponent";
import styles from "./DiscoverStyles.module.css";

const DiscoverComponent = () => {
  return (
    <div className={styles.parentContainer}>
      <ReusableComponent
        heading="Easily Search, Subscribe and Download Episodes"
        text=" Our podcast app allows you to effortlessly search for your
              favorite shows, subscribe, and download episodes for offline
              listening"
        buttonText="Search"
        buttonClassName={styles.discoverBtn}
        linkText="Subscribe"
        textClassName={styles.text}
        headingClassName={styles.headingText}
      />
      <ReusableComponent
        heading="Discover New Podcasts and Episodes"
        text="Explore a vast library of podcasts and find new episodes to enjoy, all within our user-friendly app."
        buttonText="Explore"
        buttonClassName={styles.discoverBtn}
        linkText="Enjoy"
        headingClassName={styles.headingText}
        textClassName={styles.text}
      />
      <ReusableComponent
        heading="Personalize Your Podcast Listening Experience"
        text=" Customize your podcast feed, create playlists, and receive
              personalized recommendations based on your interests."
        buttonText="Customize"
        buttonClassName={styles.discoverBtn}
        linkText="Create"
        headingClassName={styles.headingText}
        textClassName={styles.text}
      />
    </div>
  );
};

export default DiscoverComponent;
