import React, { useEffect, useState } from "react";
import { ROUTE_QUIZ_ANSWERS } from "../../utils/constants/routes";
import { Navigate, useNavigate } from "react-router-dom";
import { useSearchParamsCategory } from "custom-hooks";
import { useGame } from "../../contexts/context/GameContext";
import { getTotalScore } from "../../utils/index";
export const MyScorePage = () => {
  const {
    state: { selectedAnswer },
  } = useGame();
  const navigate = useNavigate();
  const totalScore = getTotalScore(selectedAnswer);

  // const [categoryName, setCategoryName] = useState(useSearchParamsCategory());
  const { category } = useSearchParamsCategory();
  return (
    <div>
      MyScorePage
      <h1> ff{totalScore}</h1>
      <button
        // onClick={() => navigate(`${ROUTE_QUIZ_ANSWERS}`)}
        onClick={() => navigate(`${ROUTE_QUIZ_ANSWERS}?category=${category}`)}
      >
        View Answers{" "}
      </button>
    </div>
  );
};
