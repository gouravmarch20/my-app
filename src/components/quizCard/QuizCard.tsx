import React from "react";
import "./QuizCard.css";
import { Navigate, useNavigate } from "react-router-dom";
import { HomeData } from "../../data";
import { ROUTE_QUIZ_RULES } from "../../utils/constants/routes";
// import { SET_CATEGORY } from "../../contexts/actions-type";
import { useGame } from "../../contexts/context/GameContext";
export const QuizCard = () => {
  const navigate = useNavigate();
  // const { state, dispatch } = useGame();
  const { categories } = HomeData;
  const clickHandler = (categoryName: string) => {
    // dispatch({ type: SET_CATEGORY, payload: { categoryName } });
    navigate(`${ROUTE_QUIZ_RULES}?category=${categoryName}`);
  };
  return (
    <div>
      {" "}
      <section className="homepage">
        {categories.map((category) => {
          return (
            <section
              key={category._id}
              onClick={() => clickHandler(category.categoryName)}
              className="more-quiz"
            >
              <h2 className="subheading">{category.categoryName}</h2>
              <div className="cursor-pointer">
                <img
                  src={category.img.src}
                  alt={category.img.altText}
                  className="image--responsive"
                />
              </div>
              <p className="quiz-description">{category.description}</p>
            </section>
          );
        })}
      </section>
    </div>
  );
};
