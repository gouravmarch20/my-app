type RuleQuizType = {
  _id: string;
  name: string;
  moreText: string;
};
type RuleType = {
  QUIZ101: RuleQuizType;
  QUIZ102: RuleQuizType;
  QUIZ103: RuleQuizType;
};

export const RulesData: RuleType = {
  ["QUIZ101"]: {
    _id: "uuid",
    name: "hello",
    moreText: "all the best ",
  },
  ["QUIZ102"]: {
    _id: "uuid",
    name: "hello",
    moreText: "all the best ",
  },
  ["QUIZ103"]: {
    _id: "uuid",
    name: "hello",
    moreText: "all the best ",
  },
};
