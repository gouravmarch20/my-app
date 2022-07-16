import React, { useEffect, useState } from "react";
import { QuestionsData } from "../../data";
import { useSearchParamsCategory } from "../../custom-hooks";
import { OptionType } from "../../contexts/types/quiz.types";
import { QUIZ_SESSION_STORAGE_KEY } from "../../utils/index";

export const AnswerPage = () => {
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
  console.log(selectedAnswer);
  const { category } = useSearchParamsCategory();

  const [selectedQuiz, setSelectedQuiz] = useState(QuestionsData[category]);

  return (
    <div>
      Answer
      <h1>Answer key</h1>
      {Object.keys(selectedQuiz.questions).map((question) => {
        return (
          <div className="result-card">
            <p className="question  text-left m-10">
              {selectedQuiz.questions[question].statement}
            </p>
            <ul>
              {selectedQuiz.questions[question].options.map(
                ({ option }: OptionType) => (
                  <button
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
                      selectedAnswer?.[question].value === selectedQuiz.questions[question].answer  &&
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
    </div>
  );
};
