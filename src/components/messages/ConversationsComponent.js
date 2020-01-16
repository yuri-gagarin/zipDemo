import React,  { useState, useEffect } from "react";
import { View, FlatList, Text, TextInput, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
// additional dependencies //
// additional Components //
import BackButton from "../buttons/BackButton";
// styles and images //
import { msgComponentStyle, messageStyle } from "./styles/styles";
// redux imports //
import { connect } from "react-redux";

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

const ConversationsComponent = (props) => {
  const { navigation } = props;
  const initialState = [];
  const [ conversations, setConversations ] = useState(initialState);
  const [ loading, setLoading ] = useState(false);

  const getNewConversations = () => {
    // api call to get new conversations //
    const newConversations= [...mockConversations];
    setConversations((conversations) => {
      return [...conversations, ...newConversations];
    });
  };

  const openConversation = (conversationId) => {
    const conversation = conversations.filter((conversation) => {
      return conversation._id === conversationId;
    });
    navigation.navigate("messageScreen", conversation);
  };

  const onSelect = () => {

  };

  const deleteConversation = (conversationId) => {
    console.info("pressed");
    const newConversations = conversations.filter((conversation) => {
      return conversation._id !== conversationId;
    });
    setConversations(() => {
      return [...newConversations];
    });
  };  

  const renderConversation = ({item, index, separators}) => {
    return (
      <TouchableOpacity
        style={messageStyle.messageContainer}
        onPressOut={() => openConversation(item._id)}
      >
        <View style={messageStyle.messageContainer} >
          <Text>{item.messages[0].name}</Text>
          <Text>{item.messages[0].message}</Text>
        </View>
        <TouchableOpacity
          onPressOut={() => {deleteConversation(item._id)}}
        >
          <Text>X</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    )
  };

  useEffect(() => {
    getNewConversations();
  }, []);

  return (
    <View style={msgComponentStyle.viewContainer}>
      <FlatList
        data={conversations}
        renderItem={renderConversation}
        keyExtractor={ (item) => item._id }
        onSelect={onSelect} 
      >
      </FlatList>
    </View>
  );
};

ConversationsComponent.navigationOptions = {
  title: "My Conversations",
  headerLeft: () => <BackButton />,
};

ConversationsComponent.propTypes = {
  navigation: PropTypes.object.isRequired
};


const mapStateToProps = (state) => {
  return {
    conversationState = state.conversationState
  };
}; 
const mapDispatchToProps = (dispatch) => {
  return {

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ConversationsComponent);