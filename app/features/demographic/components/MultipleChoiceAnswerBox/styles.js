import { StyleSheet } from "react-native";
import theme from "../../index";

const { padding } = theme;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: "center",
    backgroundColor: "white",
    borderTopWidth: 0.4,
    borderTopColor: "rgba(0, 0, 0, 0.09)"
  },
  button: {
    borderRadius: 25,
    marginVertical: 2,
    marginHorizontal: 10,
    paddingVertical: padding * 4 / 3 - 1,
    paddingHorizontal: padding * 4 / 3 + 2,
    backgroundColor: "#1976D2"
  }
});

export default styles;
