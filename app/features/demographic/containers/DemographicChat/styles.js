import { StyleSheet } from "react-native";
import theme from "../../index";

const { color } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  scrollviewContainer: {
    backgroundColor: color.white
  },

  answerBox: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderTopWidth: 0.4,
    borderTopColor: "rgba(0, 0, 0, 0.09)"
  },

  answerBoxText: {
    color: "rgba(0, 0, 0, 0.3)",
    marginVertical: 3
  }
});

export default styles;
