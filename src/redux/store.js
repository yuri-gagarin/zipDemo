import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import indexReducer from "./reducers/indexReducer";

const middleware = applyMiddleware([ReduxThunk]);
// default store export //
export default createStore(indexReducer, middleware);