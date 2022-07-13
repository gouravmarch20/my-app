import { QUIZ_101, QUIZ_102, QUIZ_103 } from "../constants";
const quizCategoryList = [QUIZ_101, QUIZ_102, QUIZ_103];

export const isValidateCategory = (categoryName: string): boolean => {
  return quizCategoryList.includes(categoryName);
};
