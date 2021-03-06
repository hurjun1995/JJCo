import { StyleSheet } from "react-native";
import { theme } from "../../index";
import { windowHeight } from "../../../../styles/theme";
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const resizeMode = "contain";

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

  //===============================

  formContainer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },

  buttonContainer: {
    justifyContent: "flex-start",
    alignItems: "center"
  },

  bottomContainer: {},

  button: {
    backgroundColor: "#3b5998",
    height: normalize(45),
    borderRadius: 2,
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal: padding * 3,
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth * 3 / 4
  },

  facebookIcon: {
    color: color.white
  },

  buttonText: {
    fontSize: fontSize.small,
    fontFamily: "DosisLight",
    color: color.white
  },

  bottom: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: padding * 2
  },

  bottomText: {
    fontSize: fontSize.regular,
    fontFamily: fontFamily.medium,
    marginRight: 5,
    color: "#414141"
  }

  //   orContainer: {
  //     justifyContent: "center",
  //     alignItems: "center",
  //     height: 40,
  //     width: windowWidth
  //   },

  //   orText: {
  //     backgroundColor: color.white,
  //     fontSize: fontSize.regular,
  //     fontFamily: fontFamily.medium,
  //     color: "#414141",
  //     paddingHorizontal: padding
  //   }
});

export default styles;
