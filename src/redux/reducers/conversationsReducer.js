import { conversationConstants } from "../constants/actionConstants";

// mock state //
const mockConversations = [
  {
    _id: "1",
    messages: [
      {
        _id: 1,
        name: "vendor1",
        message: "A message here"
      },
      {
        _id: 2,
        name: "user",
        message: "a user reply"
      }
    ]
  },
  {
    _id: "2",
    messages: [
      {
        _id: 1,
        name: "vendor2",
        message: "another message"
      },
      {
        _id: 2,
        name: "user",
        message: "another user reply"
      }
    ],
  },
  {
    _id: "3",
    messages: [
      {
        _id: 1,
        name: "vendor3",
        message: "another vendor message"
      }
    ]
  }
];
// constant and inital state setup //
const { 
  FETCH_CONVERSATIONS,
  REQUEST_CONVERSATIONS,
  UPDATE_CONVERSATIONS,
  OPEN_CONVERSATION, 
  CLOSE_CONVERSATION, 
  DELETE_CONVERSATION,
  CONVERSATIONS_ERROR
} = conversationConstants;
// initial state //
const initialState = {
  status: null,
  loading: false,
  responseMsg: "",
  conversations: [...mockConversations],
  messages: [],
  conversationsError: null
};

const conversationsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_CONVERSATIONS: {
      return {
        ...state,
        loading: payload.loading,
        responseMsg: payload.responseMsg,
        conversationsError: payload.conversationsError
      };
    };
    case UPDATE_CONVERSATIONS: {
      return {
        ...state,
        status: payload.status,
        loading: payload.loading,
        responseMsg: payload.responseMsg,
        conversations: [...payload.conversations],
        conversationsError: payload.conversationsError
      };
    };
    case OPEN_CONVERSATION: {
      return {
        ...state, 
        loading: false,
        messages: [...payload.messages],
        conversationsError: null
      };
    };
    case CLOSE_CONVERSATION: {
      return {
        ...state,
        loading: false,
        messages: [],
        conversationsError: null
      };
    };
    case DELETE_CONVERSATION: {
      return {
        ...state,
        loading: false,
        conversations: [...payload.conversations],
        conversationsError: null
      };
    };
    case CONVERSATIONS_ERROR: {
      return {
        ...state,
        status: payload.status,
        loading: false,
        responseMsg: payload.responseMsg,
        conversationsError: {...payload.error}
      };
    };
    default: {
      return {
        ...state
      };
    };
  };
};

export default conversationsReducer;