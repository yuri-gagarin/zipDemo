import React,  { useEffect } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
// stylesheets and images //
import { messageStyle } from "./styles/styles";
// redux imports //
import { connect } from "react-redux";


const MessageContainer = (props) => {
  // current user logged in //  
  const currentUser = "user";
  console.log(props);
  const { messagesState, navigation } = props;
  const { messages } = messagesState;

  const renderMessages = (messages) => {
    // messages should be rendered by user and vendor sender //
    const userMessages = messages.filter((message) => message.name === currentUser);
    const replyMessages = messages.filter((message) => message.name !== currentUser);
    
  };
  return (
    <View style={messageStyle.messageContainer}>
      {
        messages.map((message) => {
          // //
          if (message.name === currentUser) {
            return (
              <View key={message._id} style={messageStyle.userMessage}>
                <Text>{message.name}</Text>
                <Text>{message.message}</Text>
              </View>
            );
          }
          else {
            return (
              <View key={message._id} style={messageStyle.replyMessage}>
                <Text>{message.name}</Text>
                <Text>{message.message}</Text>
              </View>
            );
          }
        })
      }
    </View>
  );
};
// react-navigation options //
MessageContainer.navigationOptions = {
  title: "Conversation"
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