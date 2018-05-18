// import { AsyncStorage } from "react-native";
import * as t from "./actionTypes";
// import * as api from "../../../api/firebase-auth";
// import { auth } from "../../../config/firebase";

export const requestRegister = data => ({ type: t.REGISTER, data });

export const registerSuccess = user => ({ type: t.REGISTER_SUCCESS, user });

export const registerFailure = err => ({ type: t.REGISTER_FAIURE, err });

export const createUser = user => ({ type: t.CREATE_USER, user });

export const login = data => ({ type: t.LOGIN, data });

export const resetPassword = data => ({ type: t.RESET_PASSWARD, data });

export const register = data => ({ type: t.SIGN_OUT, data });

export const requestSignInWithFacebook = () => ({
  type: t.REQUEST_SIGN_IN_WITH_FACEBOOK
});

export const signInWithFacebook = facebookToken => ({
  type: t.SIGN_IN_WITH_FACEBOOK,
  facebookToken
});

// function p_register(data, successCB, errorCB) {
//   return dispatch => {
//     api.register(data, (success, data, error) => {
//       if (success) successCB(data);
//       else if (error) errorCB(error);
//     });
//   };
// }

// function p_createUser(user, successCB, errorCB) {
//   return dispatch => {
//     api.createUser(user, (success, data, error) => {
//       if (success) {
//         dispatch({ type: t.LOGGED_IN, data: user });
//         successCB();
//       } else if (error) {
//         errorCB();
//       }
//     });
//   };
// }

// function p_login(data, successCB, errorCB) {
//   return dispatch => {
//     api.login(data, (success, data, error) => {
//       if (success) {
//         if (data.exists) dispatch({ type: t.LOGGED_IN, data: data.user });
//         successCB(datta);
//       } else if (error) {
//         errorCB(error);
//       }
//     });
//   };
// }

// function p_resetPassword(data, successCB, errorCB) {
//   return dispatch => {
//     api.resetPassword(data, (success, data, error) => {
//       if (success) successCB();
//       else if (error) errorCB(error);
//     });
//   };
// }

// function p_signOut(successCB, errorCB) {
//   return dispatch => {
//     api.signOut((success, data, error) => {
//       if (success) {
//         dispatch({ type: t.LOGGED_OUT });
//         successCB();
//       } else if (error) errorCB(error);
//     });
//   };
// }

// function p_checkLoginStatus(callback) {
//   return dispatch => {
//     auth.onAuthStateChanged(user => {
//       let isLoggedIn = user !== null;

//       if (isLoggedIn) {
//         // get the user object from the Async storage
//         AsyncStorage.getItem("user", (err, user) => {
//           if (user === null) isLoggedIn = false;
//           // set the loggedIn value to false
//           else dispatch({ type: t.LOGGED_IN, data: JSON.parse(user) });

//           callback(isLoggedIn);
//         });
//       } else {
//         dispatch({ type: t.LOGGED_OUT });
//         callback(isLoggedIn);
//       }
//     });
//   };
// }

// function p_signInWithFacebook(facebookToken, successCB, errorCB) {
//   return dispatch => {
//     api.signInWithFacebook(facebookToken, (success, data, error) => {
//       if (success) {
//         if (data.exists) dispatch({ type: t.LOGGED_IN, data: data.user });
//         successCB(data);
//       } else if (error) errorCB(error);
//     });
//   };
// }
