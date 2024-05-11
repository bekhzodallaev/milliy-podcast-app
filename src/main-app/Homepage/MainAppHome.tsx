import React from "react";
import Bar from "../../assets/MainAppAssets/MainHomepage/menu-04.svg";
import ProfilePhoto from "../../assets/MainAppAssets/MainHomepage/image 106.png";
import NotificationLogo from "../../assets/MainAppAssets/MainHomepage/notification-03.svg";
import SearchLogo from "../../assets/MainAppAssets/MainHomepage/search.svg";
import { ReactComponent as HomeLogo } from "../../assets/MainAppAssets/MainHomepage/home-01.svg";
import { ReactComponent as WatchShows } from "../../assets/MainAppAssets/MainHomepage/video-replay.svg";
import { ReactComponent as PlaylistLogo } from "../../assets/MainAppAssets/MainHomepage/playlist-03.svg";
import podcastData from "./cardsTrendingData";
import podcastEpisodesData from "./cardsEpisodesData";
import styles from "./Homepage.module.css";
import ReusableTrendingCards from "./ReusabeTrendingCards";
import ReusableEpisodesCards from "./ReusableEpisodesCards";

const MainAppHome = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={`${styles.logo} ${styles.flex_item}`}>
          <img src={Bar} alt="Podcast Bar" />
          <p>milliypodcast</p>
        </div>
        <form className={`${styles.form} ${styles.flex_item}`}>
          <button type="submit" className={styles.btn}>
            {/* <SearchLogo /> */}
            <img src={SearchLogo} alt="Search Logo" />
          </button>
          <input
            type="text"
            placeholder="Search for podcasts"
            className={styles.input}
          />
        </form>
        <div className={`${styles.profile} ${styles.flex_item}`}>
          <img src={NotificationLogo} alt="Notification logo" />
          <img src={ProfilePhoto} alt="Profile photo" />
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.left_menu}>
          <div className={styles.discover}>
            <HomeLogo />
            <p>Discover</p>
          </div>
          <div className={styles.discover}>
            <WatchShows />
            <p>Watch shows</p>
          </div>
          <div className={styles.discover}>
            <PlaylistLogo />
            <p>Your Library</p>
          </div>
        </section>
        <section className={styles.main_content}>
          <p className={styles.type_podcast}>Popular & Trending</p>
          <div className={styles.popular_cards}>
            {podcastData.map((podcast: any, index: number) => {
              return (
                <ReusableTrendingCards
                  title={podcast.title}
                  author={podcast.author}
                  image={podcast.image}
                  key={index}
                />
              );
            })}
          </div>
          <p>Episodes</p>
          <div className={styles.episodes}>
            {podcastEpisodesData.map((podcast: any, index: number) => {
              return (
                <ReusableEpisodesCards
                  img={podcast.img}
                  author={podcast.podcast_author}
                  title={podcast.podcast_title}
                  description={podcast.description}
                />
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainAppHome;
