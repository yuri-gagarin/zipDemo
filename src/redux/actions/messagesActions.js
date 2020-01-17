import { messagesConstants } from "../constants/actionConstants";

const {
  RECEIVE_MESSAGE,
  SEND_MESSAGE,
  DELETE_MESSAGE
} = messagesConstants;

/**
 * Receives a message and updates state
 * @param {string} conversationId - Object _id of a message
 * @param {Object} message - message object to be added to a conversation
 * @returns {Object} A reducer action.
 */
export const receiveMessage = (conversationId, message) => {
  // API call or event listener for new messages to a conversation //
  return {
    type: RECEIVE_MESSAGE,
    payload: {}
  };
};

/**
 * Sends a message and updates message state
 * @param {Object} message - A message object with message data
 * @return {Object} a reducer action
 */
export const sendMessage = (message) => {
  return {
    type: SEND_MESSAGE,
    payload: {}
  };
};

/**
 * Deletes a message from conversation
 * @param {string} messageId - Object _id of a message
 * @returns {Object} A reducer action
 */
export const deleteMessage = (messageId) => {
  return {
    type: DELETE_MESSAGE,
    payload: {}
  };
};