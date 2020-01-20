import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import PropTypes from "prop-types";
// navigation imports //
import { withNavigation } from "react-navigation";
// styles and images //
import { backButton } from "./styles/styles";

const BackButton = ({navigation}) => {

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      style={backButton.touchable}
      onPress={goBack}
    >
      <Text style={backButton.text}>Back</Text>
    </TouchableOpacity>
  );
};

BackButton.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default withNavigation(BackButton);

