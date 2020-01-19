import { combineReducers } from "redux";
// reducer imports //
import conversationsReducer  from "../reducers/conversationsReducer";
import messagesReducer from  "../reducers/messagesReducer";
import testReducer from "../reducers/testReducer";

// reducers combined into one state object //
const indexReducer = combineReducers({
  conversationsState: conversationsReducer,
  messagesState: messagesReducer,
  testState: testReducer
});

export default indexReducer;
