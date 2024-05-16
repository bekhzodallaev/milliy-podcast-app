import React from "react";
import styles from "./Homepage.module.css";
interface ReusableCard {
  image: string;
  title: string;
  author: string;
}

const ReusableCard = ({ image, title, author }: ReusableCard) => {
  return (
    <div className={styles.card_item}>
      <img src={image} alt="image text" />
      <p className={styles.podcast_title}>{title}</p>
      <p className={styles.podcast_author}>{author}</p>
    </div>
  );
};

export default ReusableCard;
