import { StyleSheet } from "react-native";
import { theme } from "../../index";

const { padding, color, fontSize, windowWidth } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#b3e5fc",
    alignItems: "center",
    justifyContent: "center"
  },

  topContainer: {
    paddingHorizontal: 15,
    marginBottom: 30
  },

  title: {
    fontSize: 55,
    lineHeight: 55 + 4,
    fontFamily: "DosisLight",
    color: color.white
  },

  subText: {
    color: "#414141",
    fontSize: fontSize.large,
    lineHeight: fontSize.large + 10,
    marginVertical: padding * 2
  },

  //= ==============================

  authContainer: {
    width: windowWidth * 3 / 4,
    alignItems: "center",
    justifyContent: "center"
  },

  formContainer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    width: "100%",
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: padding,
    paddingHorizontal: padding + 5
  },

  singleFormInputContainer: {
    flexDirection: "row"
  },

  formInput: {
    backgroundColor: "white"
  },

  buttonContainer: {
    width: "100%"
  },

  signInButton: {
    backgroundColor: "#FFAB00",
    borderRadius: 8,
    marginVertical: padding
  },

  socialIconButton: {
    borderRadius: 8
  }
});

export default styles;
