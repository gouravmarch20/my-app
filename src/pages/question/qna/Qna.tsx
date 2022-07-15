import React from "react";
import { QuestionsData } from "../../../data";
import { QnaOption } from "../../../components";
import { PrevNextBtn } from "../prev-next-btn/PrevNextBtn";
import "./Qna.css";
type QnaPropType = {
  category: string;
  questionNumber: any;
};
export const Qna = ({ category, questionNumber }: QnaPropType) => {
  console.log(QuestionsData);
  const {
    name,
    questions: {
      [questionNumber]: {
        number,
        answer,
        options,
        link: { prev, next },
        statement,
      },
    },
  } = QuestionsData[category];
  console.log(options);
  return (
    <div className="question-options">
      <h2 className="question">{statement}</h2>
      <div>
        <QnaOption options={options} category={category} />
      </div>
      <PrevNextBtn category={category} prev={prev} next={next} />
    </div>
  );
};
