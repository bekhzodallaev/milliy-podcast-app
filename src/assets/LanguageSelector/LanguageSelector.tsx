import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSelector.module.css";
interface Language {
  code: string;
  lang: string;
  shortForm: string;
}

const languages: Language[] = [
  { code: "en", lang: "English", shortForm: "English" },
  { code: "uz", lang: "Uzbek", shortForm: "Uzbek" },
  { code: "ru", lang: "Russian", shortForm: "Russian" },
];

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguageCode = e.target.value;
    i18n.changeLanguage(selectedLanguageCode);
  };

  return (
    <div>
      <select
        name="lng-select"
        id="lng-select"
        onChange={changeLanguage}
        value={i18n.language}
        className={styles.input_select}
      >
        {languages.map((lng) => (
          <option key={lng.code} value={lng.code} className={styles.option}>
            {lng.shortForm}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
