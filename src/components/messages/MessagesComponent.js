import React,  { useState, useEffect } from "react";
import { View, FlatList, Text, TextInput, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
// styles and images //
import { msgComponentStyle, messageStyle } from "./styles/styles";

const mockMessages = [
  {
    _id: 1,
    sender: "vendor1",
    message: "A message here"
  },
  {
    _id: 2,
    sender: "vendor2",
    message: "another message"
  },
  {
    _id: 3,
    sender: "vender3",
    message: "a third message"
  }
]
const Message = (props) => {
  const { sender, message } = props;
  return (
    <View style={messageStyle.messageContainer} >
      <Text>{sender}</Text>
      <Text>{message}</Text>
    </View>
  );
}
const MessagesComponent = (props) => {
  const initialState = [];
  const [ messages, updateMessagesState ] = useState(initialState);
  const [ loading, setLoading ] = useState(false);

  const getNewMessages = () => {
    // api call to get new messages //
    const newMessages = [...mockMessages];
    updateMessagesState((messages) => {
      console.log(newMessages.length)
      return [...messages, ...newMessages];
    });
  };

  useEffect(() => {
    getNewMessages();
  }, []);

  return (
    <View style={msgComponentStyle.viewContainer}>
      <Text style={msgComponentStyle.titleText}>Messages Component</Text>
      {
        messages.map((message) => {
          console.log(message)
          return (
            <Message
              key={message._id}
              sender={message.sender}
              message={message.message}
            />
          );
        })
      }
    </View>
  );
};

MessagesComponent.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default MessagesComponent;