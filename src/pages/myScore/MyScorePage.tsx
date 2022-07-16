import React, { useEffect, useState } from "react";
import { ROUTE_QUIZ_ANSWERS } from "../../utils/constants/routes";
import { RESET_QUIZ } from "../../contexts/actions-type";

import { Navigate, useNavigate } from "react-router-dom";
import { useSearchParamsCategory } from "custom-hooks";
import { useGame } from "../../contexts/context/GameContext";
import { getTotalScore } from "../../utils/index";
export const MyScorePage = () => {
  const {
    dispatch,
    state: { selectedAnswer },
  } = useGame();
  console.log(selectedAnswer);
  const navigate = useNavigate();
  const [totalScore, setTotalScore] = useState(0);
  useEffect(() => {
    const tempScore = getTotalScore(selectedAnswer);
    setTotalScore(tempScore);
  }, [selectedAnswer]);

  const hadleScoreRedirect = () => {
    navigate(`${ROUTE_QUIZ_ANSWERS}?category=${category}`);
  };
  // const [categoryName, setCategoryName] = useState(useSearchParamsCategory());
  const { category } = useSearchParamsCategory();
  return (
    <div>
      MyScorePage
      <h1> ff{totalScore}</h1>
      <button onClick={() => hadleScoreRedirect()}>View Answers </button>
    </div>
  );
};
