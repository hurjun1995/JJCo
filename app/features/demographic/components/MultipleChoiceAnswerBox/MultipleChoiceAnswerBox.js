import React from "react";
import { Button } from "react-native-elements";
import PropType from "prop-types";
import styles from "./styles";

function createAnswerOptions(options) {
  return options.map(option => (
    <Button title={option} buttonStyle={styles.button} key={option} />
  ));
}

const MultipleChoiceAnswerBox = props => {
  const { options } = props;
  return createAnswerOptions(options);
};

MultipleChoiceAnswerBox.propTypes = {
  options: PropType.arrayOf(PropType.string)
};

MultipleChoiceAnswerBox.defaultProps = {
  options: []
};
export default MultipleChoiceAnswerBox;
