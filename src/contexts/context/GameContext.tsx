import React, { createContext, useContext, useReducer } from "react";

import { GameContextType } from "../types/gameContext.types";

import { gameReducer } from "../reducers";
const initialState = {
  loading: false,
  quizTitle: "",
  questions: [],
  currentQuestionIndex: 0,
  selectedOptions: [],
  selectedAnswer: {
    one: { value: "", score: 0 },
    two: { value: "", score: 0 },
    four: { value: "", score: 0 },
    five: { value: "", score: 0 },
    three: { value: "", score: 0 },
  },

  error: "",
};
const GameContext = createContext({} as GameContextType);

const GameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

const useGame = () => useContext(GameContext);

export { GameProvider, useGame };
