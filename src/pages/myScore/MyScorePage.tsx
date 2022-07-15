import React, { useState } from "react";
import { ROUTE_QUIZ_ANSWERS } from "../../utils/constants/routes";
import { Navigate, useNavigate } from "react-router-dom";
import { useSearchParamsCategory } from "custom-hooks";

export const MyScorePage = () => {
  const navigate = useNavigate();
  // const [categoryName, setCategoryName] = useState(useSearchParamsCategory());
  const categoryName = useSearchParamsCategory();
  console.log(categoryName);
  return (
    <div>
      MyScorePage
      <button
        onClick={() => navigate(`${ROUTE_QUIZ_ANSWERS}`)}
        // onClick={() =>
        //   navigate(`${ROUTE_QUIZ_ANSWERS}?category=${categoryName}`)
        // }
      >
        View Answers{" "}
      </button>
    </div>
  );
};
