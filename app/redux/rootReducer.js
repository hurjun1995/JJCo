import { combineReducers } from "redux";
import { reducer as authReducer } from "../features/auth";
// import { reducer as homeReducer } from "../modules/home";

// Combine all the reducers
const rootReducer = combineReducers({ authReducer });

export default rootReducer;
