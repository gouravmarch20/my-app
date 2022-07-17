import React, { useState } from "react";
import {
  ROUTE_QUIZ_MYSCORE,
  ROUTE_QUIZ_QUESTION,
} from "../../../utils/constants/routes";
import { Navigate, useNavigate } from "react-router-dom";

type PrevNextBtnProps = {
  category: string;
  prev: string;
  next: string;
  setIsSelectedOption: (value: boolean) => void;

  isSelectedOption: boolean;
};
export const PrevNextBtn = ({
  category,
  prev,
  next,
  setIsSelectedOption,
  isSelectedOption,
}: PrevNextBtnProps) => {
  const navigate = useNavigate();

  const nextLink =
    next === "result"
      ? `${ROUTE_QUIZ_MYSCORE}?category=${category}`
      : `${ROUTE_QUIZ_QUESTION}/${next}?category=${category}`;

  const nextButtonHandler = () => {
    setIsSelectedOption(false);
    navigate(nextLink);
  };
  return (
    <div>
      {isSelectedOption ? (
         <button className={`btn ctn-btn`} onClick={nextButtonHandler}>
         Next question{" "}
       </button>
      ) : (
        <button className={"btn  ctn-btn btn-disable"} onClick={nextButtonHandler}>
          Select option
        </button>
      )}
    </div>
  );
};
