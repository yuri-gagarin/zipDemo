import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import indexReducer from "./reducers/indexReducer";

// default store export //
export default createStore(indexReducer, {}, applyMiddleware(ReduxThunk));
