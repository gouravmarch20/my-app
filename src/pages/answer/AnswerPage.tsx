import React, { useEffect, useState } from "react";
import { QuestionsData } from "../../data";
import { useSearchParamsCategory } from "../../custom-hooks";
import { OptionType } from "../../contexts/types/quiz.types";
import { QUIZ_SESSION_STORAGE_KEY } from "../../utils/index";
import { useGame } from "../../contexts/context/GameContext";
import { RESET_QUIZ } from "../../contexts/actions-type";
import { useNavigate } from "react-router-dom";
import { ROUTE_ROOT } from "../../utils/constants/routes";

export const AnswerPage = () => {
  const navigate = useNavigate();

  const [selectedAnswer, setSelectedAnswer] = useState({
    one: {
      value: "Gotan",
      score: -4,
    },
    two: {
      value: "<div>",
      score: -4,
    },
    four: {
      value: "sal",
      score: 10,
    },
    five: {
      value: "hh",
      score: -4,
    },
    three: {
      value: "slice",
      score: -4,
    },
  });
  useEffect(() => {
    const { selectedAnswer } = JSON.parse(
      sessionStorage.getItem(QUIZ_SESSION_STORAGE_KEY)
    );
    setSelectedAnswer(selectedAnswer);
  }, []);
  const { category } = useSearchParamsCategory();
  const { dispatch } = useGame();
  const [selectedQuiz, setSelectedQuiz] = useState(QuestionsData[category]);
  const handleAnswerRedirect = () => {
    dispatch({
      type: RESET_QUIZ,
    });
    navigate(`${ROUTE_ROOT}`);
  };
  return (
    <div>
      Answer
      <h1>Answer key</h1>
      {Object.keys(selectedQuiz.questions).map((question) => {
        return (
          <div className="result-card" key={question}>
            <p className="question  text-left m-10">
            
              {selectedQuiz.questions[question].statement}
            </p>
            <ul>
              {selectedQuiz.questions[question].options.map(
                ({ option, _id }: OptionType) => (
                  <button
                    key={_id}
                    className={`btn cursor-none p-1
                    ${
                      option === selectedAnswer?.[question].value &&
                      selectedAnswer?.[question].value !==
                        selectedQuiz.questions[question].answer &&
                      "btn-danger"
                    }
                 
                    ${
                      option === selectedQuiz.questions[question].answer &&
                      "btn-info "
                    }
                    ${
                      option === selectedQuiz.questions[question].answer &&
                      selectedAnswer?.[question].value ===
                        selectedQuiz.questions[question].answer &&
                      "btn-success-light "
                    }
                    
                    
                    `}
                  >
                    <>{option}</>
                  </button>
                )
              )}
            </ul>
          </div>
        );
      })}
      <button onClick={() => handleAnswerRedirect()}>Go Home </button>
    </div>
  );
};
