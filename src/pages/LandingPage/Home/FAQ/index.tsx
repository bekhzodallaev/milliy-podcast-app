import React from "react";
import QuestionComponent from "./QuestionComponent";
import classes from "./FAQ.module.css";
import { useTranslation } from "react-i18next";

// Define an interface for the translated question object
interface TranslatedQuestion {
  title: string;
  content: string;
}

const FAQComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.faq_component} id="faq">
      <div className={classes.faq_header}>
        <p className={classes.faq_header_title}>{t("faq.faq_header_title")}</p>
        <p className={classes.faq_header_content}>
          {t("faq.faq_header_content")}
        </p>
      </div>
      <div className={classes.questions}>
        {Object.keys(t("faqQuestions")).map((questionId) => {
          // Use unknown type to assert the type of the translation result
          const question: unknown = t(`faqQuestions.${questionId}`);
          // Then assert it to TranslatedQuestion
          const translatedQuestion = question as TranslatedQuestion;
          return (
            <QuestionComponent
              key={questionId}
              title={translatedQuestion.title}
              content={translatedQuestion.content}
              icon="" // You can provide an empty string or adjust your QuestionComponent to not require an icon
            />
          );
        })}
      </div>
    </div>
  );
};

export default FAQComponent;
