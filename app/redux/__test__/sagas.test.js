import { call } from "redux-saga/effects";
import { Facebook } from "expo";
// import * as t from "../../features/auth/redux/actionTypes";
// import * as a from "../../features/auth/redux/actions";
import * as c from "../../config/constants";
import * as api from "../../api/firebase-auth";
import { signInWithFacebook } from "../sagas/authSagas";

describe("authSaga test", () => {
  const gen = signInWithFacebook();
  let output = null;
  const options = { permissions: ["public_profile", "email"] };

  it("should call Facebook.logInWithReadPermissionsAsync with permission options", () => {
    output = gen.next().value;
    const expected = call(
      Facebook.logInWithReadPermissionsAsync,
      c.FACEBOOK_APP_ID,
      options
    );

    expect(output).toEqual(expected);
  });

  it("should call api.signInWithFacebook with token obj", () => {
    const token = null;
    output = gen.next(token).value;
    const expected = call(api.signInWithFacebook, token);

    expect(output).toEqual(expected);
  });
});
