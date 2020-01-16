import { conversationConstants } from "../constants/actionConstants";
// constant and inital state setup //
const { 
  OPEN_CONVERSATION, 
  CLOSE_CONVERSATION, 
  DELETE_CONVERSATION,
  SEND_MESSAGE
} = conversationConstants;
// initial state //
const initialState = {};

const conversationsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case OPEN_CONVERSATION: 
      return {
        ...state
      };
    case CLOSE_CONVERSATION: 
      return {
        ...state
      };
    case DELETE_CONVERSATION: 
      return {
        ...state
      };
    case SEND_MESSAGE:
      return {
        ...state
      };
    default: 
      return {
        ...state
      };
  };
};

export default conversationsReducer;