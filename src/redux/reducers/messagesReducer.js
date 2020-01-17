import { messagesConstants } from "../constants/actionConstants";

const { DELETE_MESSAGE, SEND_MESSAGE, RECEIVE_MESSAGE } = messagesConstants;
const initialState = {
  loading: false,
  messages: [],
  messagesError: null
};

const messagesReducer = (state = initialState, action) => {

  const { payload, type } = action;

  switch (type) {
    case RECEIVE_MESSAGE: {
      return {
        ...state
      };
    };
    case SEND_MESSAGE: {
      return {
        ...state
      };
    };
    case DELETE_MESSAGE: {
      return {
        ...state
      };
    };
    default: {
      return {
        ...state
      };
    };
  };
};

export default messagesReducer;