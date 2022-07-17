import { v4 as uuidv4 } from "uuid";
import {
  CATEGORY_STOCK,
  CATEGORY_AVENGERS,
  CATEGORY_JAVASCRIPT,
} from "../utils";
type ImageType = {
  altText: string;
  src: string;
};
type CategoriesType = {
  _id: string;
  img: ImageType;
  totalQuestions: number;
  heading: string;
  categoryName: string;
  description: string;
};
type HomeDataType = {
  categories: CategoriesType[];
};

export const HomeData: HomeDataType = {
  categories: [
    {
      _id: uuidv4(),
      totalQuestions: 5,
      heading: "quiz 101",

      img: {
        altText: "101",
        src: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/07/what-is-javascript.jpg",
      },

      categoryName: CATEGORY_JAVASCRIPT,
      description: "Play this quiz 101",
    },
    {
      _id: uuidv4(),
      totalQuestions: 5,
      heading: "quiz 102",

      img: {
        altText: "",
        src: "https://wallpapers.com/images/featured/avengers%20endgame-mghdp4gaqzu4q4us.jpg",
      },

      categoryName: CATEGORY_AVENGERS,
      description: "Play this quiz 102",
    },
    {
      _id: uuidv4(),
      totalQuestions: 5,
      heading: "quiz 103",

      img: {
        altText: "103",
        src: "https://i.ytimg.com/vi/ZCFkWDdmXG8/maxresdefault.jpg",
      },

      categoryName: CATEGORY_STOCK,
      description: "Play this quiz 103 ",
    },
  ],
};
