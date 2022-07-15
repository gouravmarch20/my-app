import React from "react";
import { QuestionsData } from "../../../data";
import { QnaOption } from "../../../components";
import { PrevNextBtn } from "../prev-next-btn/PrevNextBtn";
import { useGame } from "../../../contexts/context/GameContext";
import { SET_ANSWER } from "../../../contexts/actions-type/index";
import "./Qna.css";
type QnaPropType = {
  category: string;
  questionNumber: any;
};
export const Qna = ({ category, questionNumber }: QnaPropType) => {
  const {
    dispatch,
    state: { selectedAnswer },
  } = useGame();
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

  const handleChange = (option) => {
    dispatch({
      type: SET_ANSWER,
      payload: {
        answer: {
          value: option,
          key: questionNumber,
          score: answer === option ? 10 : -4,
        },
      },
    });
  };
  console.log(options);
  return (
    <div className="question-options">
      <h2 className="question">{statement}</h2>
      <div>
        <QnaOption
          options={options}
          category={category}
          handleChange={handleChange}
        />
      </div>
      <PrevNextBtn category={category} prev={prev} next={next} />
    </div>
  );
};
