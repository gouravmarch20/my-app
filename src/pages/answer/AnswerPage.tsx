import React, { useEffect, useState } from "react";
import { QuestionsData } from "../../data";
import { useSearchParamsCategory } from "../../custom-hooks";
import { OptionType } from "../../contexts/types/quiz.types";
import { QUIZ_SESSION_STORAGE_KEY } from "../../utils/index";
import { useGame } from "../../contexts/context/GameContext";
import { RESET_QUIZ } from "../../contexts/actions-type";
import { useNavigate } from "react-router-dom";
import { ROUTE_ROOT } from "../../utils/constants/routes";
import "./AnswerPage.css";
export const AnswerPage = () => {
  const navigate = useNavigate();

  const [selectedAnswer, setSelectedAnswer] = useState({
    one: {
      value: "",
      score: 0,
    },
    two: {
      value: "",
      score: 0,
    },
    four: {
      value: "",
      score: 0,
    },
    five: {
      value: "",
      score: 0,
    },
    three: {
      value: "",
      score: 0,
    },
  });
  useEffect(() => {
    const selectedAnswer = JSON.parse(
      sessionStorage.getItem(QUIZ_SESSION_STORAGE_KEY)
    );
    console.log(selectedAnswer);
    if (selectedAnswer) {
      setSelectedAnswer(selectedAnswer.selectedAnswer);
    }
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
    <div className={"result-page-align-center"}>
      <h2 className=" heading  mb-10">Answer key</h2>
      <section className="color-info">
        <ul className=" ">
          <li className="content-subheading text-xmd">
            {" "}
            <span className=" text-danger"> Red </span> : Wrong Answer{" "}
          </li>
          <li className=" content-subheading text-xmd">
            {" "}
            <span className="text-info"> Blue : </span> Correct Answer{" "}
          </li>
          <li className="content-subheading text-xmd">
            {" "}
            <span className="text-green"> Green : </span> You selected right
            answer{" "}
          </li>
        </ul>
      </section>
      {Object.keys(selectedQuiz.questions).map((question) => {
        return (
          <div className="result-card " key={question}>
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
      <button
        className="btn btn-danger-light  btn-width-50"
        onClick={() => handleAnswerRedirect()}
      >
        Go Home{" "}
      </button>
    </div>
  );
};
