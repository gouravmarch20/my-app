import { ROUTE_QUIZ_QUESTION } from "../../utils/constants/routes";
import React, { useEffect, useState } from "react";
// import { ACTION_TYPE_SET_SELECTED_OPTIONS } from "../../contexts/actions-type";
import { useGame } from "../../contexts/context/GameContext";
type QnaOptionPropsType = {
  options: [];
  category: string;
  handleChange: (option: string) => void;
};
export const QnaOption = ({
  options,
  category,
  handleChange,
}: QnaOptionPropsType) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
  // const { state, dispatch } = useGame();

  useEffect(() => {
    setSelectedOptionIndex(-1);
  }, [options]);
  const nextButtonHandler = () => {
    // `${ROUTE_QUIZ_QUESTION}/${next}?category=${category}`;
    // updateQuestionIndex(quizDispatch, currentQuestionIndex);
    // addSelectedOption(selectedOptionIndex, quizDispatch);
    setSelectedOptionIndex(-1);
  };
  const submitBtnHandler = () => {
    // addSelectedOption(selectedOptionIndex, quizDispatch)
    setSelectedOptionIndex(-1);
    // navigate('/result')
  };

  const optionBtnHandler = (optionIndex: number) => {
    setSelectedOptionIndex(optionIndex);
  };

  return (
    <>
      <>
        {options.map(({ _id, option }, index) => {
          return (
            <div
              key={_id}
           
              onClick={() => {
                optionBtnHandler(index);
                handleChange(option);
              }}
              className="options"
            >
              <div
                className={`option ${
                  selectedOptionIndex === index ? "option-selected" : ""
                } `}
              >
                {option}
              </div>
            </div>
          );
        })}
      </>
    </>
  );
};
