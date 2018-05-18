import { AsyncStorage } from "react-native";

import * as t from "./actionTypes";

const initialState = { isLoggedIn: false, user: null, authError: null };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.LOGGED_IN: {
      const { user } = action;

      // Save token and data to Asyncstorage
      AsyncStorage.multiSet([["user", JSON.stringify(user)]]);

      return { ...state, isLoggedIn: true, user };
    }

    case t.LOGGED_OUT: {
      const keys = ["user"];
      AsyncStorage.multiRemove(keys);

      return { ...state, isLoggedIn: false, user: null };
    }

    case t.SIGN_IN_WITH_FACEBOOK_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        authError: action.error.message
      };
    default:
      return state;
  }
};

export default authReducer;
