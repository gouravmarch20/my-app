import { useSearchParams } from "react-router-dom";

export const useSearchParamsCategory = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  const category = searchParams.get("category");

  return { category };
};
