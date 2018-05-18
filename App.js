/* eslint class-methods-use-this: ["error", { "exceptMethods": ["loadAssetsAsync"] }] */
/* eslint no-console: ["error", { allow: ["warn"] }] */
import React, { Component } from "react";
import { Provider } from "react-redux";
import { Font, AppLoading } from "expo";

// import { YellowBox } from "react-native";
// import _ from "lodash";

import { AppNavigator } from "./app/config/router";
import store from "./app/redux/store";

const sourceSansProBlack = require("./app/assets/fonts/SourceSansPro-Black.ttf");
const sourceSansProBold = require("./app/assets/fonts/SourceSansPro-Bold.ttf");
const sourceSansProRegular = require("./app/assets/fonts/SourceSansPro-Regular.ttf");
const sourceSansProLight = require("./app/assets/fonts/SourceSansPro-Light.ttf");
const dosisLight = require("./app/assets/fonts/Dosis-Light.ttf");
const dosisRegular = require("./app/assets/fonts/Dosis-Regular.ttf");

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };

    // YellowBox.ignoreWarnings(["Setting a timer"]);
    // const aConsole = _.clone(console);
    // console.warn = message => {
    //   if (message.indexOf("Setting a timer") <= -1) {
    //     aConsole.warn(message);
    //   }
    // };
  }

  async loadAssetsAsync() {
    const fontAssets = cacheFonts([
      {
        SourceSansProBlack: sourceSansProBlack
      },
      {
        SourceSansProBold: sourceSansProBold
      },
      {
        SourceSansProRegular: sourceSansProRegular
      },
      {
        SourceSansProLight: sourceSansProLight
      },
      { DosisLight: dosisLight },
      { DosisRegular: dosisRegular }
      // {RobotoMedium: require('./app/assets/fonts/Roboto-Medium.ttf')},
      // {RobotoRegular: require('./app/assets/fonts/Roboto-Regular.ttf')},
      // {RobotoLight: require('./app/assets/fonts/Roboto-Light.ttf')},
      // {RobotoBlack: require('./app/assets/fonts/Roboto-Black.ttf')},
    ]);

    await Promise.all([...fontAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
