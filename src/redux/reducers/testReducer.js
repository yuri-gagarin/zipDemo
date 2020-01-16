import { testReducerConstants } from "../constants/actionConstants";


const { TEST, END_TEST } = testReducerConstants;
const initialState = {
  message: "",
  testing: false
};

const testReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case TEST: {
      return {
        ...state,
        message: payload.message,
        testing: true
      };
    }
    case END_TEST: {
      return {
        ...state,
        message: payload.message,
        testing: false
      };
    }
    default:
      return {
        ...state
      };
  }
};

export default testReducer;