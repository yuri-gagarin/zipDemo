import React,  { useState, useEffect } from "react";
import { View, FlatList, Text, TextInput, TouchableOpacity } from "react-native";
import { SwipeListView, SwipeRow } from "react-native-swipe-list-view";
import PropTypes from "prop-types";
// additional dependencies //

// additional Components //
import BackButton from "../buttons/BackButton";
// styles and images //
import { conversationStyle, msgComponentStyle, messageStyle } from "./styles/styles";
// redux imports //
import { connect } from "react-redux";
import { fetchAndUpdateConversations, openConversation, deleteConversation } from "../../redux/actions/conversationsActions";


const ConversationsComponent = (props) => {
  const { 
    navigation, 
    conversationsState, 
    messagesState,
    openConversation,
    deleteConversation
  } = props;

  const { 
    loading,
    responseMsg,
    conversations,
    conversationsError
  } = conversationsState;

  const handleOpenConversation = (conversationId) => {
    openConversation(conversationId, messagesState);
    navigation.navigate("messageScreen");
  };

  const handleDeleteConversation = (conversationId) => {
    deleteConversation(conversationId);
  };

  const onSelect = () => {

  };

  const renderConversationItem = ({ item }, rowMap) => {
    return (
      <TouchableOpacity
        key={item._id}
        style={conversationStyle.conversationRow}
        onPress={ () => handleOpenConversation(item._id) }
        activeOpacity={1}
      >
        <View style={conversationStyle.conversationView}>
          <View style={conversationStyle.conversationsRowHeader}>
            <Text>{item.messages[0].name}</Text>
          </View>
          <Text>{item.messages[0].message}</Text>
        </View>
      </TouchableOpacity>
    )
  };

  const renderConversationHiddenItem = ({ item }, rowMap) => {
    return (
      <TouchableOpacity 
        key={item._id} 
        style={conversationStyle.conversationDeleteBtn} 
        activeOpacity={0.5}
      >
        <Text>X</Text>
        <Text>Delete</Text>
      </TouchableOpacity>
    )
  };

  useEffect(() => {
    fetchAndUpdateConversations();
  }, []);

  return (
    <View style={conversationStyle.conversationsComponent}>
      <SwipeListView
        data={conversations}
        renderItem={renderConversationItem}
        renderHiddenItem={renderConversationHiddenItem}
        rightOpenValue={-100}
        keyExtractor={ (rowData, index) => index.toString() }
      >
      </SwipeListView>
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
  conversationsState: PropTypes.object.isRequired,
  messagesState: PropTypes.object.isRequired,
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
    openConversation: (conversationId, messagesState) => dispatch(openConversation(conversationId, messagesState)),
    deleteConversation: (conversationId) => dispatch(deleteConversation(conversationId))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ConversationsComponent);