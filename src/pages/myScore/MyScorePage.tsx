import React, { useEffect, useState } from "react";
import { ROUTE_QUIZ_ANSWERS } from "../../utils/constants/routes";

import {  useNavigate } from "react-router-dom";
import { useSearchParamsCategory } from "custom-hooks";
import { getTotalScore } from "../../utils/index";
import { QUIZ_SESSION_STORAGE_KEY } from "../../utils/constants/storage";
import "./MyScore.css";
export const MyScorePage = () => {
  const navigate = useNavigate();
  const [totalScore, setTotalScore] = useState(0);
  useEffect(() => {
    const sessionData = JSON.parse(
      sessionStorage.getItem(QUIZ_SESSION_STORAGE_KEY)
    );
    const tempScore = getTotalScore(sessionData.selectedAnswer);
    setTotalScore(tempScore);
  }, []);

  const hadleScoreRedirect = () => {
    navigate(`${ROUTE_QUIZ_ANSWERS}?category=${category}`);
  };
  const { category } = useSearchParamsCategory();
  return (
    <main className="flex-center-center ">
      <div className="myScore-center rules-wrapper p-10">
        <h5 className="heading  m-10">Score Time</h5>
        <h2 className="subheading  m-10">{category} Quiz </h2>
        <h2 className="text-green text-xlg m-10">
          Your score is <span className="color-fancy">{totalScore}</span> out of{" "}
          <span className="color-fancy">50</span>
        </h2>
        <button
          className="ctn-btn-danger m-10"
          onClick={() => hadleScoreRedirect()}
        >
          View Answers{" "}
        </button>
      </div>
    </main>
  );
};
