import React from "react";
import styles from "./Contacts.module.css";
interface ContactProps {
  imageSrc: string;
  title: string;
  imgDescription: string;
  link: string;
  className: string;
}
const ReusableContacts: React.FC<ContactProps> = ({
  imageSrc,
  title,
  imgDescription,
  link,
  className,
}) => {
  return (
    <div className={`${styles.card_container} ${className} `}>
      <img src={imageSrc} alt={imgDescription} />
      <h3 className={styles.contact_title}>{title}</h3>
      <button className={styles.contact_btn}>
        <a href={link}>Follow us</a>
      </button>
    </div>
  );
};

export default ReusableContacts;
