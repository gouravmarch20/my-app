// import { v4 as uuid } from "uuid";
type OptionType = {
  _id: number;
  option: string;
};
type QuestionType = {
  number: number;
  answer: string;
  link: {
    next: string;
    prev: string;
  };
  options: OptionType[];
  statement: string;
};
type CategoryType = {
  name: string;

  questions: {
    one: QuestionType;
    two: QuestionType;
    three: QuestionType;
    four: QuestionType;
    five: QuestionType;
  };
};
type QuestionsDataType = {
  ["101"]: CategoryType;
  ["102"]: CategoryType;
  ["103"]: CategoryType;
};
export type {QuestionsDataType}