import React,  { useState, useEffect } from "react";
import { View, FlatList, Text, TextInput, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
// additional dependencies //
// additional Components //
import BackButton from "../buttons/BackButton";
// styles and images //
import { msgComponentStyle, messageStyle } from "./styles/styles";

const mockMessages = [
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

const ConversationsComponent = (props) => {
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

  const deleteMessage = (messageId) => {
    console.info("pressed");
    console.info(messageId);
  };  

  const renderMessage = ({item, index, separators}) => {
    return (
      <TouchableOpacity
        style={messageStyle.messageContainer}
        onPressOut={openMessage}
      >
        <View style={messageStyle.messageContainer} >
          <Text>{item.messages[0].name}</Text>
          <Text>{item.messages[0].message}</Text>
        </View>
        <TouchableOpacity
          onPressOut={() => {deleteMessage(item._id)}}
        >
          <Text>X</Text>
        </TouchableOpacity>
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

ConversationsComponent.navigationOptions = {
  title: "My Messages",
  headerLeft: () => <BackButton />,
}

ConversationsComponent.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default ConversationsComponent;