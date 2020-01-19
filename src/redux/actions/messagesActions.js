import { messagesConstants } from "../constants/actionConstants";

const {
  UPDATE_MESSAGES,
  REQUEST_MESSAGES,
  RECEIVE_MESSAGE,
  SEND_MESSAGE,
  DELETE_MESSAGE,
  MESSAGES_ERROR
} = messagesConstants;

const mockMessages = [
  {
    _id: "1",
    name: "vendor1",
    message: "hello there"
  },
  {
    _id: "2",
    name: "vendor1",
    message: "confirmed"
  },
  {
    _id: "3",
    name: "user",
    message: "understood understoodunderstoodunderstoodunderstoodunderstoodunderstoodunderstoodunderstoodunderstoodunderstoodunderstoodunderstoodunderstoodunderstoodunderstoodunderstoodunderstoodunderstoodunderstoodunderstoodunderstoodunderstoodunderstoodunderstoodunderstoodunderstoodunderstoodunderstoodunderstood"
  }
];

const mockRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: 200,
        responseMsg: "Success",
        messages: [...mockMessages]
      });
    });
  });
};

/**
 * Notifies state of Message request
 * @returns {Object} A redux action
 */
export const requestMessages = () => {
  return {
    type: REQUEST_MESSAGES,
    payload: {
      responseMsg: "Loading",
      loading: true,
      messagesError: null
    }
  };
};

/**
 * Updates Messages after an API and/or {AsyncStorage} request
 * @param {Object} newData - New data for the application state
 * @param {string} newData.responseMsg - An API response message
 * @param {Object[]} newData.messages - An array of Message objects
 * @returns {Object} A redux action object 
 */
export const updateMessages = ({ responseMsg, messages }) => {

  return {
    type: UPDATE_MESSAGES,
    payload: {
      responseMsg: responseMsg,
      loading: false,
      messages: [...messages],
      messagesError: null
    }
  };
};

/**
 * Notifies application state of Message(s) error
 * @param {Object} error - An API error response
 * @returns {Object} A redux action object
 */
export const messagesError = (error) => {
  return {
    type: MESSAGES_ERROR,
    payload: {
      responseMsg: error.message,
      loading: false,
      messagesError: error
    }
  };
};

/**
 * Fetches and updates messages with a conversation thread
 * @param {string} conversationId - An ObjectId for Conversation to query Message(s)
 * @param {Object[]} currentMessages - Current Message(s) array in application state
 * @returns {Promise<Object>} A {Promise} which resolves to redux axtion object
 */
export const fetchAndUpdateMessages = (conversationId, currentMessages = []) => {

  return function (dispatch) {
    dispatch(requestMessages);

    return mockRequest()
      .then((response) => {
        const { status, responseMsg, messages } = response;
        return dispatch(updateMessages({responseMsg: responseMsg, messages: messages}));
      })
      .catch((error) => {
        return dispatch(messagesError(messages));
    });
  };
};

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