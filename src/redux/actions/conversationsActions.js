import { conversationConstants } from "../constants/actionConstants";


const mockRequest = () => {
  return new Promise((resolve, reject) => {
    const convoResponse = {
      status: 200,
      message: "success",
      conversations: [
        { _id: 21321, 
          messages: [
            {
              sender: "vendor1", message: " sorry but that doesnt work"
            }
          ]
        }
      ]
    };
    setTimeout(() => {
      resolve(convoResponse);
    }, 1000);
  });
};

const { 
  FETCH_CONVERSATIONS,
  UPDATE_CONVERSATIONS,
  REQUEST_CONVERSATIONS,
  OPEN_CONVERSATION,
  CLOSE_CONVERSATION,
  DELETE_CONVERSATION,
  CONVERSATIONS_ERROR
} = conversationConstants;

/**
 * Notifies state of conversations request
 * @returns {Object} A redux action
 */
export const requestConversations = () => {
  return {
    type: REQUEST_CONVERSATIONS,
    payload: {
      message: "Refreshing",
      loading: true,
      conversationsError: null
    }
  };
};

/**
 * Notifies state of conversations error
 * @param {Object} errorResponse - An API error response
 * @returns {Object} A redux action
 */
export const conversationsError = (errorResponse) => {
  return {
    type: CONVERSATIONS_ERROR,
    payload: {
      message: errorResponse.message,
      loading: false,
      conversationsError: errorResponse
    }
  };
};

/**
 * Updates conversations state after API request
 * @param {Object} newData - New data for the state
 * @param {string} newData.message - An API response message
 * @param {Object[]} newData.conversations - An array of Conversation objects
 * @returns {Object} A redux action
 */
export const updateConversations = ({ message, conversations }) => {
  return {
    type: UPDATE_CONVERSATIONS,
    payload: {
      message: message,
      loading: false,
      conversations: [...conversations],
      conversationsError: null
    }
  };
};

export const fetchAndUpdateConversations = (currentConversations) => {

  return function (dispatch) {
    // notify of an API call //
    dispatch(conversationsRequest);
    // API CALL here in the future //
    // mockRequest for now //
    return mockRequest()
      .then((response) => {

      })
      .catch((error) => {

      })  
  };
};

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
