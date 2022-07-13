import { useEffect } from "react";
const useDocumentTitle = (titleText: string) => {
  useEffect(() => {
    document.title = `quiz | ${titleText}`;
  });
};
export { useDocumentTitle };
