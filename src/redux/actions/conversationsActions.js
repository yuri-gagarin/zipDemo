import { conversationConstants } from "../constants/actionConstants";

const { 
  OPEN_CONVERSATION,
  CLOSE_CONVERSATION,
  DELETE_CONVERSATION,
} = conversationConstants;

export const openConversation = (conversationId) => {
  return {
    type: OPEN_CONVERSATION,
    payload: ""
  };
};
export const closeConversation = () => {
  return {
    type: CLOSE_CONVERSATION,
    payload: ""
  };
};
export const deleteConversation = (conversationId) => {
  return {
    type: DELETE_CONVERSATION,
    payload: ""
  }
};
