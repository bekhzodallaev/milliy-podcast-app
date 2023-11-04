import React, { useState } from "react";
import classes from "./QuestionComponent.module.css";

import { AiOutlinePlus } from "react-icons/ai";

interface QuestionProps {
  title: string;
  content: string;
  icon: string;
}

const QuestionComponent: React.FC<QuestionProps> = ({
  title,
  content,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.question_component}>
      <div className={classes.question_header} onClick={toggleOpen}>
        <div className={classes.question_title}>{title}</div>
        <div className={classes.question_icon}>
          {isOpen ? "" : <AiOutlinePlus />}
        </div>
      </div>
      {isOpen && <div className={classes.question_content}>{content}</div>}
    </div>
  );
};

export default QuestionComponent;
