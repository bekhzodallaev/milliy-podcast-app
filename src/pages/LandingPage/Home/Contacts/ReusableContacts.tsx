import React from "react";
import styles from "./Contacts.module.css";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <div className={`${styles.card_container} ${className} `}>
      <img src={imageSrc} alt={imgDescription} />
      <h3 className={styles.contact_title}>{title}</h3>
      <button className={styles.contact_btn}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {t("contact.followUs")}
        </a>
      </button>
    </div>
  );
};

export default ReusableContacts;
