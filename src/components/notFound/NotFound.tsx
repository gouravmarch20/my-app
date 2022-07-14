import React from "react";
type NotFoundType = {
  documentTitle: string;
  textToShow: string;
};
export const NotFound = ({ documentTitle, textToShow }: NotFoundType) => {
  return (
    <main>
      <h1 className="heading"> Page Not Found </h1>
      <h1 className="subheading"> {textToShow}</h1>
      <button>Back to home</button>
    </main>
  );
};
