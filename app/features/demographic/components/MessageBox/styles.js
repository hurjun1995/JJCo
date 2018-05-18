import { StyleSheet } from "react-native";
import { theme } from "../../index";

const { padding, windowWidth } = theme;

const styles = StyleSheet.create({
  container: {
    width: "auto",
    height: "auto",
    maxWidth: windowWidth * 2 / 3,
    marginVertical: 3,
    marginHorizontal: 10,
    borderRadius: 20,
    paddingVertical: padding * 4 / 3 - 3,
    paddingHorizontal: padding * 4 / 3
  },
  rightMessageBox: {
    alignSelf: "flex-end",
    backgroundColor: "#f5f5f5"
  },

  leftMessageBox: {
    alignSelf: "flex-start",
    backgroundColor: "#0288d1",
    color: "white"
  }
});

export default styles;
