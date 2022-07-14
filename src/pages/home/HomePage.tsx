import React from "react";
import "./Home.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../../custom-hooks";
// import { HomeData } from "../../data";
// import { ROUTE_QUIZ_RULES } from "../../utils/constants/routes";
import { QuizCard } from "../../components";
export const HomePage = () => {
  const navigate = useNavigate();

  useDocumentTitle("Are you even a Marvel fan? Let's Check");

  return (
    <div>
      <main>
        <h1 className="heading">Choose Your Category</h1>
        <QuizCard />
      </main>
    </div>
  );
};
