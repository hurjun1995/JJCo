import { createStackNavigator } from "react-navigation";

// Authentication Scenes
import Welcome from "../features/auth/containers/Welcome";
import DemographicChat from "../features/demographic/containers/DemographicChat";

// Import Store, actions
// import store from "../redux/store";
// import { checkLoginStatus } from "../features/auth/redux/actions";

const AppNavigator = createStackNavigator(
  {
    Welcome: { screen: Welcome },
    DemographicChat: { screen: DemographicChat }
  },
  {
    initialRouteName: "Welcome",
    headerMode: "none"
  }
);

export default AppNavigator;

// export default class extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isReady: false,
//       isLoggedIn: false
//     };
//   }

//   componentDidMount() {
//     let _this = this;
//     store.dispatch(
//       checkLoginStatus(isLoggedIn => {
//         _this.setState({ isReady: true, isLoggedIn });
//       })
//     );
//   }

//   render() {
//     // if (!this.state.isReady)
//     //     return <Splash/>
//     return (

//     );
//   }
// }
