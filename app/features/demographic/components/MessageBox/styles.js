import { StyleSheet } from "react-native";
import theme from "../../index";

const { padding, windowWidth } = theme;

const styles = StyleSheet.create({
  container: {
    width: "auto",
    height: "auto",
    maxWidth: windowWidth * 2 / 3,
    marginVertical: 3,
    marginHorizontal: 10,
    borderRadius: 20,
    paddingVertical: padding * 4 / 3 - 1,
    paddingHorizontal: padding * 4 / 3 + 2
  },

  rightMessageBox: {
    alignSelf: "flex-end",
    backgroundColor: "#E0E0E0"
  },

  leftMessageBox: {
    alignSelf: "flex-start",
    backgroundColor: "#1976D2"
  },

  leftMessageBoxText: {
    color: "white"
  },

  rightMessageBoxText: {
    color: "black"
  }
});

export default styles;
