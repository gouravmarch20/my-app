import React from "react";
import { NotFound } from "../../components";
import { Outlet } from "react-router-dom";

import { isValidateCategory } from "../../utils/functions";
import { useSearchParamsCategory } from "../../custom-hooks";

export const ValidateCategoryRoute = () => {
  //FIXME
  let { category } = useSearchParamsCategory();

  category = category || "not";
  return isValidateCategory(category) ? (
    <Outlet />
  ) : (
    <NotFound
      documentTitle="Category Not Found"
      textToShow="This category doesn't exist anymore"
    />
  );
};
