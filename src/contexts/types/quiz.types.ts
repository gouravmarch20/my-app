import {
  CATEGORY_AVENGERS,
  CATEGORY_JAVASCRIPT,
  CATEGORY_STOCK,
} from "../../utils";
type OptionType = {
  _id: string;
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
  [CATEGORY_JAVASCRIPT]: CategoryType;
  [CATEGORY_AVENGERS]: CategoryType;
  [CATEGORY_STOCK]: CategoryType;
};
export type { QuestionsDataType };
