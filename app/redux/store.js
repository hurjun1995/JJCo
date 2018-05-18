/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "remote-redux-devtools";
import reducers from "./rootReducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

// Connect our store to the reducers
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
