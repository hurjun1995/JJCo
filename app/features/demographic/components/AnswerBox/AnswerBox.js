import React from "react";

import MultipleChoiceAnswerBox from "../MultipleChoiceAnswerBox";

// given data(type, question, options), create appropriate AnswerBox
const AnswerBox = props => {
  const { data, onAnswered } = props;
  switch (data.type) {
    case "multiple":
      return (
        <MultipleChoiceAnswerBox
          options={data.options}
          onAnswered={onAnswered}
        />
      );
    default:
      return (
        <MultipleChoiceAnswerBox
          options={data.options}
          onAnswered={onAnswered}
        />
      ); // STUB
  }
};

export default AnswerBox;
