import { watchSignInWithFacebook } from "./authSagas";

function* rootSaga() {
  yield [watchSignInWithFacebook()];
}

export default rootSaga;
