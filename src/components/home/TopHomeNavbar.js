import React from "react";
import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
// styles and images //
import { topHomeNavStyles } from "./styles/style";

const TopHomeNavbar = (props) => {
  const { navigation, newMessages } = props;
  const openMessages = () => {
    // navigate to app messages //
    navigation.navigate("conversationsScreen");
  };
  const openProfile = () => {
    // navigate to personal profile //
    console.log(navigation);
    navigation.navigate("profileScreen")
  };
  return (
    <View style={topHomeNavStyles.mainNav}>
      <TouchableHighlight
        style={topHomeNavStyles.messagesButton}
        underlayColor={"red"}
        onPress={openMessages}
      >
        <View>
          <Text style={topHomeNavStyles.messagesButtonText}>Messages</Text>
          <Text style={topHomeNavStyles.messagesCounter}>{newMessages}</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={topHomeNavStyles.profileButton}
        underlayColor={"red"}
        onPress={openProfile}
      >
        <View>
          <Text style={topHomeNavStyles.profileButtonText}>Profile</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

TopHomeNavbar.propTypes = {
  navigation: PropTypes.object.isRequired,
  newMessages: PropTypes.number.isRequired
};

export default TopHomeNavbar;