import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, NotFound, ValidateCategoryRoute } from "./components";
import {
  HomePage,
  QuestionPage,
  RulesPage,
  AnswerPage,
  MyScorePage,
} from "./pages";
import {
  ROUTE_ROOT,
  ROUTE_RULES,
  ROUTE_QUIZ_RULES,
  ROUTE_QUIZ_MYSCORE,
  ROUTE_QUIZ_ANSWERS,
  ROUTE_QUIZ_QUESTION,
  
} from "./utils/constants/routes";
const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path={ROUTE_ROOT} element={<HomePage />} />
        <Route path={ROUTE_RULES} element={<RulesPage />} />

        <Route element={<ValidateCategoryRoute />}>
          <Route path={ROUTE_QUIZ_RULES} element={<RulesPage />} />
          <Route path={ROUTE_QUIZ_ANSWERS} element={<AnswerPage />} />
          <Route path={ROUTE_QUIZ_MYSCORE} element={<MyScorePage />} />

          <Route
            path={`${ROUTE_QUIZ_QUESTION}/:questionNumber`}
            element={<QuestionPage />}
          />
        </Route>

        <Route
          path="*"
          element={
            <NotFound documentTitle="Page not found " textToShow="Page " />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
