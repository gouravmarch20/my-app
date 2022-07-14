import { useSearchParams } from "react-router-dom";

export const useSearchParamsCategory = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return { category };
};
