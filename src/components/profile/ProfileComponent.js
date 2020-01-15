import React,  {} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const ProfileComponent = (props) => {

  return (
    <View>
      <Text></Text>
      <TouchableOpacity>
        <Text></Text>
      </TouchableOpacity>
    </View>
  );
};

ProfileComponent.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default ProfileComponent;