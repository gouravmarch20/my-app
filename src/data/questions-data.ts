import { QuestionsDataType } from "../contexts/types";
import {
  CATEGORY_JAVASCRIPT,
  CATEGORY_AVENGERS,
  CATEGORY_STOCK,
} from "../utils";

export const QuestionsData: QuestionsDataType = {
  [CATEGORY_JAVASCRIPT]: {
    name: "101",
    questions: {
      one: {
        number: 1,
        answer: "Shamballa",
        link: {
          next: "two",
          prev: "rules",
        },
        options: [
          { _id: 4, option: "Dormammu" },
          { _id: 43, option: "Shamballa" },
          { _id: 23, option: "Fourth" },
          { _id: 3, option: "Second" },
        ],
        statement:
          "Avengers: Infinity War was which number movie in Marvel's Avengers series ?",
      },
      two: {
        number: 1,
        link: {
          next: "two",
          prev: "rules",
        },
        answer: "Shamballa",
        options: [
          { _id: 4, option: "Dormammu" },
          { _id: 43, option: "Shamballa" },
        ],
        statement:
          "Avengers: Infinity War was which number movie in Marvel's Avengers series ?",
      },
      three: {
        number: 1,
        link: {
          next: "four",
          prev: "two",
        },
        answer: "sim",
        options: [
          { _id: 4, option: "Dormammu" },
          { _id: 43, option: "Shamballa" },
        ],
        statement:
          "Avengers: Infinity War was which number movie in Marvel's Avengers series ?",
      },
      four: {
        number: 1,
        link: {
          next: "four",
          prev: "two",
        },
        answer: "sim",
        options: [
          { _id: 4, option: "Dormammu" },
          { _id: 43, option: "Shamballa" },
        ],
        statement:
          "Avengers: Infinity War was which number movie in Marvel's Avengers series ?",
      },
      five: {
        number: 1,
        link: {
          next: "four",
          prev: "two",
        },
        answer: "sim",
        options: [
          { _id: 4, option: "Dormammu" },
          { _id: 43, option: "Shamballa" },
        ],
        statement:
          "Avengers: Infinity War was which number movie in Marvel's Avengers series ?",
      },
    },
  },
  [CATEGORY_AVENGERS]: {
    name: "101",
    questions: {
      one: {
        number: 1,
        answer: "Shamballa",
        link: {
          next: "two",
          prev: "rules",
        },
        options: [
          { _id: 4, option: "Dormammu" },
          { _id: 43, option: "Shamballa" },
          { _id: 23, option: "Fourth" },
          { _id: 3, option: "Second" },
        ],
        statement:
          "Avengers: Infinity War was which number movie in Marvel's Avengers series ?",
      },
      two: {
        number: 1,
        link: {
          next: "two",
          prev: "rules",
        },
        answer: "Shamballa",
        options: [
          { _id: 4, option: "Dormammu" },
          { _id: 43, option: "Shamballa" },
        ],
        statement:
          "Avengers: Infinity War was which number movie in Marvel's Avengers series ?",
      },
      three: {
        number: 1,
        link: {
          next: "four",
          prev: "two",
        },
        answer: "sim",
        options: [
          { _id: 4, option: "Dormammu" },
          { _id: 43, option: "Shamballa" },
        ],
        statement:
          "Avengers: Infinity War was which number movie in Marvel's Avengers series ?",
      },
      four: {
        number: 1,
        link: {
          next: "four",
          prev: "two",
        },
        answer: "sim",
        options: [
          { _id: 4, option: "Dormammu" },
          { _id: 43, option: "Shamballa" },
        ],
        statement:
          "Avengers: Infinity War was which number movie in Marvel's Avengers series ?",
      },
      five: {
        number: 1,
        link: {
          next: "four",
          prev: "two",
        },
        answer: "sim",
        options: [
          { _id: 4, option: "Dormammu" },
          { _id: 43, option: "Shamballa" },
        ],
        statement:
          "Avengers: Infinity War was which number movie in Marvel's Avengers series ?",
      },
    },
  },
  [CATEGORY_STOCK]: {
    name: "101",
    questions: {
      one: {
        number: 1,
        answer: "Shamballa",
        link: {
          next: "two",
          prev: "rules",
        },
        options: [
          { _id: 4, option: "Dormammu" },
          { _id: 43, option: "Shamballa" },
          { _id: 23, option: "Fourth" },
          { _id: 3, option: "Second" },
        ],
        statement:
          "Avengers: Infinity War was which number movie in Marvel's Avengers series ?",
      },
      two: {
        number: 1,
        link: {
          next: "two",
          prev: "rules",
        },
        answer: "Shamballa",
        options: [
          { _id: 4, option: "Dormammu" },
          { _id: 43, option: "Shamballa" },
        ],
        statement:
          "Avengers: Infinity War was which number movie in Marvel's Avengers series ?",
      },
      three: {
        number: 1,
        link: {
          next: "four",
          prev: "two",
        },
        answer: "sim",
        options: [
          { _id: 4, option: "Dormammu" },
          { _id: 43, option: "Shamballa" },
        ],
        statement:
          "Avengers: Infinity War was which number movie in Marvel's Avengers series ?",
      },
      four: {
        number: 1,
        link: {
          next: "four",
          prev: "two",
        },
        answer: "sim",
        options: [
          { _id: 4, option: "Dormammu" },
          { _id: 43, option: "Shamballa" },
        ],
        statement:
          "Avengers: Infinity War was which number movie in Marvel's Avengers series ?",
      },
      five: {
        number: 1,
        link: {
          next: "four",
          prev: "two",
        },
        answer: "sim",
        options: [
          { _id: 4, option: "Dormammu" },
          { _id: 43, option: "Shamballa" },
        ],
        statement:
          "Avengers: Infinity War was which number movie in Marvel's Avengers series ?",
      },
    },
  },
};
