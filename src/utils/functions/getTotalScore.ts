type AnswerType = { value: string; score: number };
type AnswersType = {
  one: AnswerType;
  two: AnswerType;
  four: AnswerType;
  five: AnswerType;
  three: AnswerType;
};
export const getTotalScore = (selectedAnswer: AnswersType): number => {
  console.log(selectedAnswer);

  //   console.log(Object.keys(answers));
  //   Object.keys(answers).reduce((totalScore, questionNumber) => {
  //     console.log(questionNumber);
  //   });
  return 1;
  //
};
