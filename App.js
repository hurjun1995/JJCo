import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Font, AppLoading } from 'expo';

import Router from './app/config/routes'
import store from './app/redux/store';

import { YellowBox } from 'react-native';
import _ from 'lodash';


function cacheFonts(fonts) {
    return fonts.map(font => Font.loadAsync(font));
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false,
        }

        YellowBox.ignoreWarnings(['Setting a timer']);
        const _console = _.clone(console);
        console.warn = message => {
            if (message.indexOf('Setting a timer') <= -1) {
                _console.warn(message);
            }
        };
    }

    async _loadAssetsAsync() {
        const fontAssets = cacheFonts([
            {SourceSansProBlack: require('./app/assets/fonts/SourceSansPro-Black.ttf')},
            {SourceSansProBold: require('./app/assets/fonts/SourceSansPro-Bold.ttf')},,
            {SourceSansProRegular: require('./app/assets/fonts/SourceSansPro-Regular.ttf')},
            {SourceSansProLight: require('./app/assets/fonts/SourceSansPro-Light.ttf')},
            {DosisLight: require("./app/assets/fonts/Dosis-Light.ttf")},
            {DosisRegular: require("./app/assets/fonts/Dosis-Regular.ttf")},
            {Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")},
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
                    startAsync={this._loadAssetsAsync}
                    onFinish={() => this.setState({isReady: true})}
                    onError={console.warn}
                />
            );
        }
        
        return (
            <Provider store={store}>
                    <Router/>
            </Provider>
        );
    }
}

export default App;