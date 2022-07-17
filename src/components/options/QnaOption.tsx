import React, { useEffect, useState } from "react";
type QnaOptionPropsType = {
  options: [];
  category: string;
  handleChange: (option: string) => void;
  setIsSelectedOption: (value: boolean) => void;

  isSelectedOption: boolean;
};
export const QnaOption = ({
  options,
  
  handleChange,
  setIsSelectedOption,
  
}: QnaOptionPropsType) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);

  useEffect(() => {
    setSelectedOptionIndex(-1);
  }, [options]);

  const optionBtnHandler = (optionIndex: number) => {
    setIsSelectedOption(true);
    setSelectedOptionIndex(optionIndex);
  };

  return (
    <>
      <>
        {options.map(({ _id, option }, index) => {
          return (
            <div
              key={_id}
              onClick={() => {
                optionBtnHandler(index);
                handleChange(option);
              }}
              className="options"
            >
              <div
                className={`option ${
                  selectedOptionIndex === index ? "option-selected" : ""
                } `}
              >
                {option}
              </div>
            </div>
          );
        })}
      </>
    </>
  );
};
