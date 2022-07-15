import React from "react";
import {  NotFound } from "../../components";
import { useParams } from "react-router-dom";
import {Qna} from './qna/Qna'
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

  return QuestionsData[category].questions[questionNumber] !== undefined ? (
    <Qna category={category} questionNumber={questionNumber} />
  ) : (
    <NotFound
      documentTitle="Question Not Found"
      textToShow="This question doesn't exist anymore"
    />
  );
};
