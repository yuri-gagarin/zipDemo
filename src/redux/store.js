import { createStore } from "redux";
import indexReducer from "./reducers/indexReducer";

// default store export //
export default createStore(indexReducer);