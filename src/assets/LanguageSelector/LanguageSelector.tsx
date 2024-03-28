import React from "react";
import { useTranslation } from "react-i18next";

interface Language {
  code: string;
  lang: string;
  shortForm: string;
}

const languages: Language[] = [
  { code: "en", lang: "English", shortForm: "EN" },
  { code: "uz", lang: "Uzbek", shortForm: "UZ" },
  { code: "ru", lang: "Russian", shortForm: "RU" },
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
      >
        {languages.map((lng) => (
          <option key={lng.code} value={lng.code}>
            {lng.shortForm}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
