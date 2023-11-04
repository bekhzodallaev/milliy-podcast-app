import React from "react";
import QuestionComponent from "./QuestionComponent";
import podcastFAQ from "./questions";

import classes from "./FAQ.module.css";

const FAQComponent: React.FC = () => {
  return (
    <div className={classes.faq_component}>
      <div className={classes.faq_header}>
        <p className={classes.faq_header_title}>FAQs</p>
        <p className={classes.faq_header_content}>
          Your Questions, Our Answers: Explore our FAQ Section
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
