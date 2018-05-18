import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const MessageBox = props => {
  const { text } = props;
  // const textStyle = left ? styles.leftMessageBox : styles.rightMessageBox;
  return (
    <View style={[styles.container]}>
      <Text>{text}</Text>
    </View>
  );
};

MessageBox.propTypes = {
  // left: PropTypes.bool.isRequired,
  text: PropTypes.string
};

MessageBox.defaultProps = {
  // left: false,
  text: ""
};

export default MessageBox;
