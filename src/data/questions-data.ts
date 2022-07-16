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
          { _id: uuidv4(), option: "Gotan" },
          { _id: uuidv4(), option: "Golang" },
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
        statement: "Which tag is used to include javascript file ?",
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
          { _id: uuidv4(), option: "let" },
          { _id: uuidv4(), option: "this" },
        ],
        statement: "Which keywords is used to define varible  ?",
      },
      four: {
        number: 1,
        link: {
          next: "five",
          prev: "three",
        },
        answer: "myFunction()",
        options: [
          { _id: uuidv4(), option: "none" },
          { _id: uuidv4(), option: "myFunction" },
          { _id: uuidv4(), option: "function myfunction()" },
          { _id: uuidv4(), option: "myFunction()" },
        ],
        statement: "How do you call a function  ?",
      },
      five: {
        number: 1,
        link: {
          next: "result",
          prev: "four",
        },
        answer: "Brendan Eich",
        options: [
          { _id: uuidv4(), option: "Brendan Eich" },
          { _id: uuidv4(), option: "Innovate Eirch" },
          { _id: uuidv4(), option: "Erich Zhuy" },
          { _id: uuidv4(), option: "Chris Beard" },
        ],
        statement: "JavaScript was invented by  ?",
      },
    },
  },
  [CATEGORY_AVENGERS]: {
    name: "101",
    questions: {
      one: {
        number: 1,
        answer: "Six",
        link: {
          next: "two",
          prev: "rules",
        },
        options: [
          { _id: uuidv4(), option: "Seven" },
          { _id: uuidv4(), option: "Five" },
          { _id: uuidv4(), option: "Six" },
          { _id: uuidv4(), option: "Eight" },
        ],
        statement: "Avengers: Infinity War How many Infinity Stones are there?",
      },
      two: {
        number: 1,
        link: {
          next: "three",
          prev: "rules",
        },
        answer: "1995",
        options: [
          { _id: uuidv4(), option: "2008" },
          { _id: uuidv4(), option: "2011" },
          { _id: uuidv4(), option: "1995" },
          { _id: uuidv4(), option: "2010" },
        ],
        statement:
          " What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?",
      },
      three: {
        number: 3,
        link: {
          next: "four",
          prev: "two",
        },
        answer: "Captain America",
        options: [
          { _id: uuidv4(), option: " Tony Stark" },
          { _id: uuidv4(), option: "Iron man" },
          { _id: uuidv4(), option: "Captain America" },
          { _id: uuidv4(), option: "Hulk" },
        ],
        statement: " Who was able to pick up Thor’s hammer in Endgame?",
      },
      four: {
        number: 4,
        link: {
          next: "five",
          prev: "three",
        },
        answer: "Vormir",
        options: [
          { _id: uuidv4(), option: "Vormir" },
          { _id: uuidv4(), option: "Mars" },
          { _id: uuidv4(), option: "Zeron" },
          { _id: uuidv4(), option: "Vegeta Planet" },
        ],
        statement: "On what planet was the Soul Stone in Infinity War?",
      },
      five: {
        number: 5,
        link: {
          next: "result",
          prev: "four",
        },
        answer: "Captain Marvel",
        options: [
          { _id: uuidv4(), option: "Richard" },
          { _id: uuidv4(), option: "Shamballa" },
          { _id: uuidv4(), option: "Captain Marvel" },
          { _id: uuidv4(), option: "Zingyan" },
        ],
        statement: "Who rescued Tony Stark and Nebula from space?",
      },
    },
  },
  [CATEGORY_STOCK]: {
    name: "101",
    questions: {
      one: {
        number: 1,
        answer: "Astral",
        link: {
          next: "two",
          prev: "rules",
        },
        options: [
          { _id: uuidv4(), option: "Parle" },
          { _id: uuidv4(), option: "Amber" },
          { _id: uuidv4(), option: "Dabur" },
          { _id: uuidv4(), option: "Astral" },
        ],
        statement: "Which one is the PVC pipes manufacturing company ?  ",
      },
      two: {
        number: 2,
        link: {
          next: "three",
          prev: "one",
        },
        answer: "Mindtree",
        options: [
          { _id: uuidv4(), option: "Railtel" },
          { _id: uuidv4(), option: "Tech Mahindira" },
          { _id: uuidv4(), option: "Affle" },
          { _id: uuidv4(), option: "Mindtree" },
        ],
        statement: "Which IT company is acquired by Larsen & Toubro Group.",
      },
      three: {
        number: 1,
        link: {
          next: "four",
          prev: "two",
        },
        answer: "Dixon",
        options: [
          { _id: uuidv4(), option: "CDSL" },
          { _id: uuidv4(), option: "Dixon" },
          { _id: uuidv4(), option: "Relaxo" },
          { _id: uuidv4(), option: "Info Edge " },
        ],
        statement:
          " Which on is India multinational electronics manufacturing services company,?",
      },
      four: {
        number: 4,
        link: {
          next: "five",
          prev: "two",
        },
        answer: "Bombay Stock Exchannge",
        options: [
          { _id: uuidv4(), option: "Delhi Stock Exchange" },
          { _id: uuidv4(), option: "National Stock Exchange" },
          { _id: uuidv4(), option: "Bombay Stock Exchannge" },
          { _id: uuidv4(), option: "Kolkata Stock Exchange" },
        ],
        statement: "The oldest stock market in india is ",
      },
      five: {
        number: 5,
        link: {
          next: "result",
          prev: "four",
        },
        answer: "SEBI",
        options: [
          { _id: uuidv4(), option: "Stock Buyer" },
          { _id: uuidv4(), option: "SEBI" },
          { _id: uuidv4(), option: "Government of india" },
          { _id: uuidv4(), option: "Reserve Bank" },
        ],
        statement: "The Indian Stock Market is regulated by:",
      },
    },
  },
};
