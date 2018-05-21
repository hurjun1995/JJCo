import React from "react";
import { Button } from "react-native-elements";
import PropType from "prop-types";
import styles from "./styles";

function createAnswerOptions(options, onAnswered) {
  return options.map(option => (
    <Button
      title={option}
      buttonStyle={styles.button}
      key={option}
      onPress={() => onAnswered(option)}
    />
  ));
}

const MultipleChoiceAnswerBox = props => {
  const { options, onAnswered } = props;
  return createAnswerOptions(options, onAnswered);
};

MultipleChoiceAnswerBox.propTypes = {
  options: PropType.arrayOf(PropType.string),
  onAnswered: PropType.func.isRequired
};

MultipleChoiceAnswerBox.defaultProps = {
  options: []
};
export default MultipleChoiceAnswerBox;
