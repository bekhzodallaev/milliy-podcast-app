import React from "react";
import styles from "./Homepage.module.css";
import { ReactComponent as Play } from "../../assets/MainAppAssets/MainHomepage/play-circle.svg";

interface ReusableEpisodesCardsProps {
  img: string;
  title: string;
  author: string;
  description: string;
}

const ReusableEpisodesCards = ({
  img,
  title,
  author,
  description,
}: ReusableEpisodesCardsProps) => {
  return (
    <div className={styles.episodes_card}>
      <section className={styles.podcast_info}>
        <img src={img} alt={author} className={styles.podcast_image} />
        <div>
          <p className={styles.podcast_title}>{title}</p>
          <p className={styles.podcast_author}>{author}</p>
        </div>
      </section>
      <section className={styles.description}>
        <p>Description</p>
        <p className={styles.description_text}>{description}</p>
      </section>
      <section className={styles.podcast_play}>
        <button type="button" className={styles.podcast_duration}>
          <Play />
          10 min
        </button>
        <a href="#" className={styles.add_to_library}>
          Add to library
        </a>
      </section>
    </div>
  );
};

export default ReusableEpisodesCards;
