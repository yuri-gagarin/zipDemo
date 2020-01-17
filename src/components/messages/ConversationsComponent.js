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


const ConversationsComponent = (props) => {
  const { navigation, conversationState } = props;

  const getNewConversations = () => {
    // api call to get new conversations //
    const newConversations= [];
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

// react-navigation options //
ConversationsComponent.navigationOptions = {
  title: "My Conversations",
  headerLeft: () => <BackButton />,
};

// proptypes checking //
ConversationsComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
  conversationState: PropTypes.object.isRequired,
  openConversation: PropTypes.func.isRequired,
  deleteConversation: PropTypes.func.isRequired
};

// redux mapState and mapDispatch //
const mapStateToProps = (state) => {
  return {
    conversationsState: state.conversationsState
  };
}; 
const mapDispatchToProps = (dispatch) => {
  return { 
    openConversation = () => dispatch(openConversation),
    deleteConversation = (conversationId) => dispatch(deleteConversation(conversationId))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ConversationsComponent);