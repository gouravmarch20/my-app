type GameStateType = {
  loading: boolean;
  quizTitle: string;
  selectedAnswer: {};
  // questions: DocumentData;
  currentQuestionIndex: number;
  selectedOptions: number[];
  error: string;
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
type SetAnswerAction = {
  type: "SET_ANSWER";
  payload: {
    answer: {
      key: string;
      score: number;
      value: string;
    };
  };
};

type GameActionType =
  | GameLoadingAction
  | SaveQuestionsAction
  | SetCurrentQuestionIndexAction
  | SetSelectedOptionsAction
  | GameErrorAction
  | QuizResetAction
  | SetAnswerAction;

type GameContextType = {
  state: GameStateType;
  dispatch: React.Dispatch<GameActionType>;
};

export type { GameStateType, GameContextType, GameActionType };
