import { combineReducers, createStore } from "redux";

import testReducer from "../reducers/testReducer";

// reducers combined into one state object //
export default combineReducers({
  testState: testReducer
});

