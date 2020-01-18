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
import { fetchAndUpdateConversations, deleteConversation } from "../../redux/actions/conversationsActions";


const ConversationsComponent = (props) => {
  const { 
    navigation, 
    conversationState, 
    messagesState,
    openConversation,
    deleteConversation
  } = props;

  const { 
    loading,
    responseMsg,
    conversations,
    conversationsError
  } = conversationState;

  const handleOpenConversation = (conversationId) => {
    openConversation(conversationId);
    navigation.navigate("messageScreen", conversation);
  };

  const handleDeleteConversation = (conversationId) => {
    deleteConversation(conversationId);
  };

  const onSelect = () => {

  };

  const renderConversation = ({item, index, separators}) => {
    return (
      <TouchableOpacity
        style={messageStyle.messageContainer}
        onPressOut={ () => handleOpenConversation(item._id) }
      >
        <View style={messageStyle.messageContainer} >
          <Text>{item.messages[0].name}</Text>
          <Text>{item.messages[0].message}</Text>
        </View>
        <TouchableOpacity
          onPressOut={ () => handleDeleteConversation(item._id) }
        >
          <Text>X</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    )
  };

  useEffect(() => {
    fetchAndUpdateConversations();
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
    conversationsState: state.conversationsState,
    messagesState: state.messagesState
  };
}; 
const mapDispatchToProps = (dispatch) => {
  return { 
    openConversation: (conversationId) => dispatch(openConversation(conversationId)),
    deleteConversation: (conversationId) => dispatch(deleteConversation(conversationId))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ConversationsComponent);