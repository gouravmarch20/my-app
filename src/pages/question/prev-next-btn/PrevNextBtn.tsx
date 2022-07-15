import React from "react";
import {
  ROUTE_QUIZ_MYSCORE,
  ROUTE_QUIZ_QUESTION,
} from "../../../utils/constants/routes";
import { Navigate, useNavigate } from "react-router-dom";

type PrevNextBtnProps = {
  category: string;
  prev: string;
  next: string;
};
export const PrevNextBtn = ({ category, prev, next }: PrevNextBtnProps) => {
  const navigate = useNavigate();

  const nextLink =
    next === "result"
      ? `${ROUTE_QUIZ_MYSCORE}?category=${category}`
      : `${ROUTE_QUIZ_QUESTION}/${next}?category=${category}`;

  const nextButtonHandler = () => {
    navigate(nextLink);
  };
  return (
    <div>
      <button
        // className={`btn ${selectedOptionIndex === -1 ? "btn-disable" : ""}`}
        onClick={nextButtonHandler}
      >
        Next question{" "}
      </button>
    </div>
  );
};
