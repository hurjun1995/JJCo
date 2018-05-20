import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

// Create a Messagebox with given text
// set left = true to align the box to the left
const MessageBox = props => {
  const { text, left } = props;
  const textStyle = left ? styles.leftMessageBox : styles.rightMessageBox;
  return (
    <View style={[styles.container, textStyle]}>
      <Text>{text}</Text>
    </View>
  );
};

MessageBox.propTypes = {
  left: PropTypes.bool,
  text: PropTypes.string
};

MessageBox.defaultProps = {
  left: false,
  text: ""
};

export default MessageBox;
