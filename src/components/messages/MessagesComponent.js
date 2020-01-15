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
/*
const Message = (props) => {
  const { sender, message } = props;
  const openMessage = () => {
    console.info("open message");
    return null;
  };
  return (
    <TouchableOpacity>
      <View style={messageStyle.messageContainer} >
        <Text>{sender}</Text>
        <Text>{message}</Text>
      </View>
    </TouchableOpacity>
  );
}
*/
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

  const openMessage = () => {

  };

  const onSelect = () => {

  };

  const renderMessage = ({item, index, separators}) => {
    return (
      <TouchableOpacity
        style={messageStyle.messageContainer}
        onPress={openMessage}
      >
        <View style={messageStyle.messageContainer} >
          <Text>{item.sender}</Text>
          <Text>{item.message}</Text>
        </View>
      </TouchableOpacity>
    )
  };

  useEffect(() => {
    getNewMessages();
  }, []);

  return (
    <View style={msgComponentStyle.viewContainer}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={ (item) => item._id }
        onSelect={onSelect} 
      >
      </FlatList>
    </View>
  );
};

MessagesComponent.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default MessagesComponent;