import React from "react";

import MultipleChoiceAnswerBox from "../MultipleChoiceAnswerBox";

// given data(type, question, options), create appropriate AnswerBox
const AnswerBox = props => {
  switch (props.data.type) {
    case "multiple":
      return <MultipleChoiceAnswerBox options={props.data.options} />;
    default:
      return <MultipleChoiceAnswerBox options={props.data.options} />; // STUB
  }
};

export default AnswerBox;
