import React from "react";
import { TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";

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

PasswordToggle.propTypes = {
  displayed: PropTypes.bool.isRequired,
  togglePassVisibility: PropTypes.func.isRequired
};

export default PasswordToggle;