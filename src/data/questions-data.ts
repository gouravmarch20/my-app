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
export const QuestionsData: QuestionsDataType = {
  ["101"]: {
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
  ["102"]: {
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
  ["103"]: {
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
