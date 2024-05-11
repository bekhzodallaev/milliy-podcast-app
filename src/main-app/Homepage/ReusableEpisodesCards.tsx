import React from "react";
import styles from "./Homepage.module.css";

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
        <img src={img} alt={author} />
        <div>
          <p>{title}</p>
          <p>{author}</p>
        </div>
      </section>
      <section className={styles.description}>
        <p>{description}</p>
      </section>
      <section className={styles.podcast_play}>
        <button type="button">10 min</button>
        <a href="#">Add to library</a>
      </section>
    </div>
  );
};

export default ReusableEpisodesCards;
