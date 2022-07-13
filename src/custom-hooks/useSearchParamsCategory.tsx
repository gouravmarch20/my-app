import { useSearchParams } from "react-router-dom";

export const useSearchParamsCategory = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  return <div></div>;
};
