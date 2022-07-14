import React from "react";
import { Qna, NotFound } from "../../components";
import { useParams } from "react-router-dom";
import { useSearchParamsCategory } from "../../custom-hooks";
import { QuestionsData } from "../../data";
import {
  CATEGORY_STOCK,
  CATEGORY_AVENGERS,
  CATEGORY_JAVASCRIPT,
} from "../../utils";
export const QuestionPage = () => {
  const { questionNumber } = useParams();
  const { category } = useSearchParamsCategory();

  console.log(CATEGORY_JAVASCRIPT);
  return QuestionsData[category].questions[questionNumber] !== undefined ? (
    <Qna />
  ) : (
    <NotFound
      documentTitle="Question Not Found"
      textToShow="This question doesn't exist anymore"
    />
  );
};
