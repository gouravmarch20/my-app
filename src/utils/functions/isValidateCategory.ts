import { QUIZ_101, QUIZ_102, QUIZ_103 } from "../constants";
const quizCategoryList = [QUIZ_101, QUIZ_102, QUIZ_103];
console.log("isValidateCategory");
export const isValidateCategory = (categoryName: string): boolean => {
  console.log(categoryName)
  return quizCategoryList.includes(categoryName);
};
