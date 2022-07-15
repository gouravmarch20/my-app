type AnswerType = { value: string; score: number };
type AnswersType = {
  one: AnswerType;
  two: AnswerType;
  four: AnswerType;
  five: AnswerType;
  three: AnswerType;
};
export const getTotalScore = (selectedAnswer: AnswersType): number => {
  return Object.keys(selectedAnswer).reduce(
    (totalScore, questionNumber) =>
      selectedAnswer[questionNumber].score + totalScore,
    0
  );
};
