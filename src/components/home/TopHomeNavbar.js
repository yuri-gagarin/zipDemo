import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
// styles and images //
import { topHomeNavStyles } from "./styles/style";

const TopHomeNavbar = (props) => {
  const { navigation, newMessages } = props;
  const openMessages = () => {
    // navigate to app messages //
    console.log("toggle messages");
    navigation.navigate("conversationsScreen");
  };
  const openProfile = () => {
    // navigate to personal profile //
    console.log("toggle profile");
    console.log(navigation);
  };
  return (
    <View style={topHomeNavStyles.mainNav}>
      <TouchableOpacity 
        style={topHomeNavStyles.messagesButton}
        onPressOut={openMessages}
      >
        <Text style={topHomeNavStyles.messagesButtonText}>Messages</Text>
        <Text style={topHomeNavStyles.messagesCounter}>{newMessages}</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={topHomeNavStyles.profileButton}
        onPressOut={openProfile}
      >
        <Text style={topHomeNavStyles.profileButtonText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

TopHomeNavbar.propTypes = {
  navigation: PropTypes.object.isRequired,
  newMessages: PropTypes.number.isRequired
};

export default TopHomeNavbar;