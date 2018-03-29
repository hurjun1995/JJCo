import React from 'react';
import { Scene, Router, ActionConst, Stack, Modal, Tabs } from 'react-native-router-flux';


//Authentication Scenes
import Welcome from '../modules/auth/scenes/Welcome';

//Import Store, actions
import store from '../redux/store'
import { checkLoginStatus } from "../modules/auth/redux/actions";

import { color, navTitleStyle } from "../styles/theme";

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            isReady: false,
            isLoggedIn: false
        }
    }

    componentDidMount() {
        let _this = this;
        store.dispatch(checkLoginStatus((isLoggedIn) => {
            _this.setState({isReady: true, isLoggedIn});
        }));
    }

    render() {
        // if (!this.state.isReady)
        //     return <Splash/>

        return (
            <Router>
                <Scene key="root" hideNavBar
                       navigationBarStyle={{backgroundColor: "#fff"}}
                       titleStyle={navTitleStyle}
                       backButtonTintColor={color.black}>
                    <Stack key="Auth" initial={!this.state.isLoggedIn}>
                        <Scene key="Welcome" component={Welcome} title="" initial={true} hideNavBar/>
                    </Stack>

                    {/* <Stack key="Main" initial={this.state.isLoggedIn}>
                        <Scene key="Home" component={Home} title="Home" initial={true} type={ActionConst.REPLACE}/>
                    </Stack> */}
                </Scene>
            </Router>
        )
    }
}