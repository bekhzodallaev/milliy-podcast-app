import React from "react";
import QuestionComponent from "./QuestionComponent";
import podcastFAQ from "./questions";
import classes from "./FAQ.module.css";
import { useTranslation } from "react-i18next";

const FAQComponent: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.faq_component} id="faq">
      <div className={classes.faq_header}>
        <p className={classes.faq_header_title}>{t("faq.faq_header_title")} </p>
        <p className={classes.faq_header_content}>
          {t("faq.faq_header_content")}
        </p>
      </div>
      <div className={classes.questions}>
        {podcastFAQ.map((question) => (
          <QuestionComponent
            key={question.id}
            title={question.title}
            content={question.content}
            icon={question.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
