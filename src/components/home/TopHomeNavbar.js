import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
// styles and images //
import { topHomeNavStyles } from "./styles/style";

const TopHomeNavbar = (props) => {
  const { navigation, newMessages } = props;
  const openMessages = () => {
    // navigate to app messages //

  };
  const openProfile = () => {
    // navigate to personal profile //
    
  };
  return (
    <View style={topHomeNavStyles.mainNav}>
      <TouchableOpacity style={}>
        <Text style={}></Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>{messages}</Text>
        <Text></Text>
      </TouchableOpacity>
    </View>
  );
};

TomHomeNavbar.propTypes = {
  navigation: PropTypes.object.isRequired,
  newMessages: PropTypes.number.isRequired
};

export default TopHomeNavbar;