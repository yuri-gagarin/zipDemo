import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { passwordToggleStyle } from "./styles/styles";

const PasswordToggle = ({displayed, togglePassVisibility}) => {

  if (displayed) {
    return (
      <TouchableOpacity 
        style={passwordToggleStyle.touchable}
        onPressOut={togglePassVisibility}
      >
        <Text style={passwordToggleStyle.innerText}>Show Password?</Text>
      </TouchableOpacity>
    )
  } else {
    return null;
  }
};

export default PasswordToggle;