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
  OPEN_CONVERSATION, 
  CLOSE_CONVERSATION, 
  DELETE_CONVERSATION,
  CONVERSATIONS_ERROR
} = conversationConstants;
// initial state //
const initialState = {
  loading: false,
  conversations: [...mockConversations],
  messages: [],
  conversationsError: null
};

const conversationsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
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
        loading: false,
        conversationsError: payload.error
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