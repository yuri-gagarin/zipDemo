import { messagesConstants } from "../constants/actionConstants";

const { DELETE_MESSAGE, SEND_MESSAGE } = messagesConstants;
const initialState = {};

const messagesReducer = (state = initialState, action) => {

  const { payload, type } = action;

  switch (type) {
    case SEND_MESSAGE: 
      return {
        ...state
      };
    case DELETE_MESSAGE: 
      return {
        ...state
      };
    default: 
      return {
        ...state
      };
  };
};

export default messagesReducer;