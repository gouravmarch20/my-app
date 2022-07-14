import React from "react";
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

type GameStateType = {
  loading: boolean;
  quizTitle: string;
  // questions: DocumentData;
  currentQuestionIndex: number;
  selectedOptions: number[];
  error: string;
  quizCategory: string;
};

type GameLoadingAction = {
  type: "GAME_LOADING";
};

type SaveQuestionsAction = {
  type: "SAVE_QUESTIONS";
  payload: {
    quizTitle: string;
    // questions: DocumentData;
  };
};

type SetCurrentQuestionIndexAction = {
  type: "SET_CURRENT_QUESTION_INDEX";
  payload: {
    currentQuestionIndex: number;
  };
};

type SetSelectedOptionsAction = {
  type: "SET_SELECTED_OPTIONS";
  payload: {
    selectedOptions: number;
  };
};

type GameErrorAction = {
  type: "GAME_ERROR";
  payload: {
    error: string;
  };
};

type QuizResetAction = {
  type: "RESET_QUIZ";
};
type SET_CATEGORY = {
  type: "SET_CATEGORY";
  payload: {
    categoryName: string;
  };
};

type GameActionType =
  | GameLoadingAction
  | SaveQuestionsAction
  | SetCurrentQuestionIndexAction
  | SetSelectedOptionsAction
  | GameErrorAction
  | QuizResetAction
  | SET_CATEGORY;

type GameContextType = {
  state: GameStateType;
  dispatch: React.Dispatch<GameActionType>;
};

export type { GameStateType, GameContextType, GameActionType };
