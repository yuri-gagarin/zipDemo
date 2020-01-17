import { conversationConstants } from "../constants/actionConstants";


const mockRequest = () => {
  return new Promise((resolve, reject) => {
    const convoResponse = {
      status: 200,
      responeMsg: "success",
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
      responseMsg: "Loading",
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
      responseMsg: errorResponse.responeMsg,
      loading: false,
      conversationsError: errorResponse
    }
  };
};

/**
 * Updates conversations state after API request
 * @param {Object} newData - New data for the state
 * @param {string} newData.responseMsg - An API response message
 * @param {Object[]} newData.conversations - An array of Conversation objects
 * @returns {Object} A redux action
 */
export const updateConversations = ({ responseMsg, conversations }) => {
  return {
    type: UPDATE_CONVERSATIONS,
    payload: {
      responseMsg: responseMsg,
      loading: false,
      conversations: [...conversations],
      conversationsError: null
    }
  };
};

/**
 * Fetches and updates new conversations as needed
 * @param {Object[]} currentConversations - Current conversations state array
 * @returns {Promise<Object>} A promise which results in a function call returning a redux action
 */
export const fetchAndUpdateConversations = (currentConversations = []) => {

  return function (dispatch) {
    // notify of an API call //
    dispatch(conversationsRequest);
    // API CALL here in the future //
    // mockRequest for now //
    return mockRequest()
      .then((response) => {
        const { status, responseMsg, conversations } = response;
        const updatedConversations = [...currentConversations, ...conversations];
        return dispatch(updateConversations({ responseMsg: responseMsg, conversations: updatedConversations }));
      })
      .catch((error) => {
        return dispatch(conversationsError(error));
    });  
  };
};

/**
 * Opens a Conversation and fetches messages for the Conversation
 * @param {string} conversationId - the ObjecId of the Conversation to open
 * @return {Object} A redux action
 */
export const openConversation = (conversationId) => {
  return {
    type: OPEN_CONVERSATION,
    payload: ""
  };
};

/**
 * Closes a conversation
 * @returns {Object} A redux action
 */
export const closeConversation = () => {
  return {
    type: CLOSE_CONVERSATION,
    payload: ""
  };
};

/**
 * Deletes a specific conversation from DB and updates users state
 * @param {sting} conversationId - the ObjectId of the conversation to delete
 * @returns {Promise<Object>} A promise which results in a function call returning a redux action
 */
export const deleteConversation = (conversationId) => {

  return function (dispatch) {
    dispatch(requestConversations());

    return new Promise((resolve, reject) => {
      resolve("ok");
    })
    .then((data) => {

    })
    .catch((error) => {

    });
  }
  
};
