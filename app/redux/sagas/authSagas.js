import { takeLatest, call, put } from "redux-saga/effects";
import { Facebook } from "expo";

import * as t from "../../features/auth/redux/actionTypes";
// import * as a from "../../features/auth/redux/actions";
import * as c from "../../config/constants";
import * as api from "../../api/firebase-auth";

// function* watchRegister() {
//   yield takeLatest(t.REGISTER, register);
// }

export function* watchSignInWithFacebook() {
  yield takeLatest(t.REQUEST_SIGN_IN_WITH_FACEBOOK, signInWithFacebook);
}

// function* register(action) {
//   try {
//     const user = yield call(apl.register, action.data);
//     yield put(actions.registerSuccess(user));
//   } catch (err) {
//     yield put({ type: t.REGISTER_FAILURE, err });
//   }
// }

export function* signInWithFacebook() {
  try {
    const options = { permissions: ["public_profile", "email"] };
    const { type, token } = yield call(
      Facebook.logInWithReadPermissionsAsync,
      c.FACEBOOK_APP_ID,
      options
    );
    if (type === "success") {
      const { user } = yield call(api.signInWithFacebook, token);
      yield put({ type: t.LOGGED_IN, user });
    } else {
      throw new Error("Signing in with facebook was unsuccessful!");
    }
  } catch (err) {
    yield put({ type: t.SIGN_IN_WITH_FACEBOOK_FAILURE, error: err });
  }
}
