import { QuestionsDataType } from "../contexts/types";
import { v4 as uuidv4 } from "uuid";

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
        answer: "Golang",
        link: {
          next: "two",
          prev: "rules",
        },
        options: [
          { _id: uuidv4(), option: "Prytronics" },
          { _id: uuidv4(), option: "Golang" },
          { _id: uuidv4(), option: "Gotan" },
          { _id: uuidv4(), option: "Indus OS" },
        ],
        statement: "Which one is a programming language ?",
      },
      two: {
        number: 1,
        link: {
          next: "three",
          prev: "rules",
        },
        answer: "<script>",
        options: [
          { _id: uuidv4(), option: "<sp>" },
          { _id: uuidv4(), option: "<script>" },
          { _id: uuidv4(), option: "<p>" },
          { _id: uuidv4(), option: "<div>" },
        ],
        statement:
          "Which tag is used to include javascript file ?",
      },
      three: {
        number: 1,
        link: {
          next: "four",
          prev: "two",
        },
        answer: "let",
        options: [
          { _id: uuidv4(), option: "undefined" },
          { _id: uuidv4(), option: "slice" },
          { _id: uuidv4(), option: "this" },
          { _id: uuidv4(), option: "let" },
        ],
        statement: "Which keywords is used to define varible  ?",
      },
      four: {
        number: 1,
        link: {
          next: "five",
          prev: "two",
        },
        answer: "sal",
        options: [
          { _id: uuidv4(), option: "Dormammu" },
          { _id: uuidv4(), option: "sim" },
          { _id: uuidv4(), option: "sal" },
          { _id: uuidv4(), option: "Second" },
        ],
        statement: " was which number movie in Marvel's Avengers series ?",
      },
      five: {
        number: 1,
        link: {
          next: "result",
          prev: "four",
        },
        answer: "alpa",
        options: [
          { _id: uuidv4(), option: "Dormammu" },
          { _id: uuidv4(), option: "alpa" },
          { _id: uuidv4(), option: "hh" },
          { _id: uuidv4(), option: "hh" },
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
          { _id: uuidv4(), option: "Dormammu" },
          { _id: uuidv4(), option: "Shamballa" },
          { _id: uuidv4(), option: "Fourth" },
          { _id: uuidv4(), option: "Second" },
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
          { _id: uuidv4(), option: "Dormammu" },
          { _id: uuidv4(), option: "Shamballa" },
          { _id: uuidv4(), option: "Fourth" },
          { _id: uuidv4(), option: "Second" },
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
          { _id: uuidv4(), option: "Dormammu" },
          { _id: uuidv4(), option: "Shamballa" },
          { _id: uuidv4(), option: "Fourth" },
          { _id: uuidv4(), option: "Second" },
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
          { _id: uuidv4(), option: "Dormammu" },
          { _id: uuidv4(), option: "Shamballa" },
          { _id: uuidv4(), option: "Fourth" },
          { _id: uuidv4(), option: "Second" },
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
          { _id: uuidv4(), option: "Dormammu" },
          { _id: uuidv4(), option: "Shamballa" },
          { _id: uuidv4(), option: "Fourth" },
          { _id: uuidv4(), option: "Second" },
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
          { _id: uuidv4(), option: "Dormammu" },
          { _id: uuidv4(), option: "Shamballa" },
          { _id: uuidv4(), option: "Fourth" },
          { _id: uuidv4(), option: "Second" },
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
          { _id: uuidv4(), option: "Dormammu" },
          { _id: uuidv4(), option: "Shamballa" },
          { _id: uuidv4(), option: "Fourth" },
          { _id: uuidv4(), option: "Second" },
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
          { _id: uuidv4(), option: "Dormammu" },
          { _id: uuidv4(), option: "Shamballa" },
          { _id: uuidv4(), option: "Fourth" },
          { _id: uuidv4(), option: "Second" },
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
          { _id: uuidv4(), option: "Dormammu" },
          { _id: uuidv4(), option: "Shamballa" },
          { _id: uuidv4(), option: "Fourth" },
          { _id: uuidv4(), option: "Second" },
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
          { _id: uuidv4(), option: "Dormammu" },
          { _id: uuidv4(), option: "Shamballa" },
          { _id: uuidv4(), option: "Fourth" },
          { _id: uuidv4(), option: "Second" },
        ],
        statement:
          "Avengers: Infinity War was which number movie in Marvel's Avengers series ?",
      },
    },
  },
};
