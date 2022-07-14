import {
  CATEGORY_STOCK,
  CATEGORY_AVENGERS,
  CATEGORY_JAVASCRIPT,
} from "../index";
const quizCategoryList = [
  CATEGORY_STOCK,
  CATEGORY_AVENGERS,
  CATEGORY_JAVASCRIPT,
];
export const isValidateCategory = (categoryName: string): boolean => {
  return quizCategoryList.includes(categoryName);
};
