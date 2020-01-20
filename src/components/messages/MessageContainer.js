import React,  { useState, useEffect } from "react";
import { View, 
  Text, 
  KeyboardAvoidingView, 
  TextInput, 
  Platform, 
  FlatList, 
  NativeModules, 
  StatusBarIOS 
} from "react-native";
import PropTypes from "prop-types";
// stylesheets and images //
import { messageStyle } from "./styles/styles";
// redux imports //
import { connect } from "react-redux";

let messageConvoTitle = "title";

const MessageContainer = (props) => {
  // current user logged in //  
  const currentUser = "user";
  console.log(props);
  const { messagesState, navigation } = props;
  const { messages } = messagesState;

  const setStatusBarHeight = () => {

  }

  const renderMessage = ({ item }) => {
    // messages should be rendered by user and vendor sender //
    if (item.name === currentUser) {
      return (
        <View key={item._id} style={messageStyle.userMessage}>
          <Text>{item.name}</Text>
          <Text>{item.message}</Text>
        </View>
      );
    }
    else {
      return (
        <View key={item._id} style={messageStyle.replyMessage}>
          <Text>{item.name}</Text>
          <Text>{item.message}</Text>
        </View>
      );
    }
  };

  useEffect(() => {
    for (let i = 0; i < messages.length; i ++ ) {
      if(messages[i].name !== currentUser) {
        messageConvoTitle = messages[i].name;
        break;
      }
    }
  }); 

  return (
    <KeyboardAvoidingView  
      behavior={Platform.OS === "ios" ? "height" : null} 
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      style={{flex: 1, borderWidth: 2, borderColor: "blue", height: "100%", paddingBottom: 0}} 
      enabled
    >
      <FlatList 
        style={messageStyle.messageContainer} 
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(message) => message._id}
      >
      </FlatList>
      <TextInput style={messageStyle.messagesInput} />
    </KeyboardAvoidingView>
  );
};
// react-navigation options //
MessageContainer.navigationOptions = {
  title: messageConvoTitle
}
// proptypes checking //
MessageContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
  messagesState: PropTypes.object.isRequired
};
// mapStateToProps and mapDispatchToProps redux functions //
const mapStateToProps = (state) => {
  return {
    messagesState: state.messagesState
  };
};
const mapDispatchToProps = (dispatch) => {
  return {

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);