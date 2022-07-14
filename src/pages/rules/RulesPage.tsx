import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSearchParamsCategory } from "../../custom-hooks";
import { ROUTE_QUIZ_QUESTION } from "../../utils/constants/routes";

import "./rulesPage.css";
export const RulesPage = () => {
  const { category } = useSearchParamsCategory();
  const navigate = useNavigate();

  return (
    <section className="rules-page-align-center">
      <div className="rules-wrapper">
        <h2 className="subheading text-lg">rules plage</h2>
        <ul className="list-display-circle">
          <li className="rules-content list-display-circle ">
            The quiz contain total 5 question
          </li>
          <li className="rules-content list-display-circle">
            10 marks for every corect answer
          </li>
          <li className="rules-content list-display-circle">
            2 negative marks for ever worng answer{" "}
          </li>
          <li className="rules-content list-display-circle">
            No skip option available{" "}
          </li>
        </ul>

        <div className="mb-10">
          {category ? (
            <button
              className="btn btn-success btn-full"
              onClick={() => {
                navigate(`${ROUTE_QUIZ_QUESTION}/one?category=${category}`);
              }}
            >
              Play Now
            </button>
          ) : (
            <button
              className="btn btn-success btn-full"
              onClick={() => navigate("/")}
            >
              Select Category
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
