import { combineReducers } from "redux";

import conversationsReducer  from "../reducers/conversationsReducer";
import messagesReducer from  "../reducers/messagesReducer";
import testReducer from "../reducers/testReducer";

// reducers combined into one state object //
export default combineReducers({
  conversationsState: conversationsReducer,
  messagesState: messagesReducer,
  testState: testReducer
});

