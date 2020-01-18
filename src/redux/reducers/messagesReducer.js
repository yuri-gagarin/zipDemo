import { messagesConstants } from "../constants/actionConstants";

const { 
  REQUEST_MESSAGES,
  UPDATE_MESSAGES,
  DELETE_MESSAGE, 
  SEND_MESSAGE, 
  RECEIVE_MESSAGE,
  MESSAGES_ERROR 
} = messagesConstants;

const initialState = {
  status: null,
  loading: false,
  responseMsg: "",
  messages: [],
  messagesError: null
};

const messagesReducer = (state = initialState, action) => {

  const { payload, type } = action;

  switch (type) {
    case REQUEST_MESSAGES: {
      return {
        ...state,
        loading: payload.loading,
        responseMsg: payload.responseMsg,
        messagesError: payload.messagesError
      };
    };
    case UPDATE_MESSAGES: {
      return {
        ...state,
        status: payload.status,
        loading: payload.loading,
        responseMsg: payload.responseMsg,
        messages: [...payload.messages],
        messagesError: payload.messagesError
      };
    };
    case RECEIVE_MESSAGE: {
      return {
        ...state,
        status: payload.status,
        loading: payload.loading,
        responseMsg: payload.responseMsg,
        messages: [...payload.messages],
        messagesError: payload.messagesError
      };
    };
    case SEND_MESSAGE: {
      return {
        ...state
      };
    };
    case DELETE_MESSAGE: {
      return {
        ...state,
        status: payload.status,
        loading: payload.loading,
        responseMsg: payload.responseMsg,
        messages: [...payload.messages],
        messagesError: messagesError
      };
    };
    case MESSAGES_ERROR: {
      return {
        ...state,
        status: payload.status,
        loading: payload.loading,
        responseMsg: payload.responseMsg,
        messagesError: {...payload.messagesError}
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