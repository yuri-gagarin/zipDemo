import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
// additional Components //
import PasswordToggle from "./PasswordToggle";
// Style imports and images //
import { registrationStyles } from "./styles/styles";
import { mainLogoImg } from "../../images/imageIndex";

const RegistrationComponent = (props) => {

  const initialState = {
    email: "",
    emailConfirm: "",
    password: "",
    passwordConfirm: "",
    passwordHidden: true
  };

  const [registrationState, updateRegistrationState] = useState(initialState);
  const updateEmail = (text) => {

  };
  const updateEmailConfirm = (text) => {

  };
  const updatePassword = (text) => {

  };
  const updatePasswordConfirm = (text) => {

  };
  const togglePassVisibility = () => {
    updateRegistrationState({
      ...registrationState,
      passwordHidden: !registrationState.passwordHidden
    });
  };
  const goToLogin = () => {
    const { navigation } = props;
    navigation.navigate("login");
  };

  return (
    <View style={registrationStyles.registrationView}>
      <Image source={mainLogoImg} style={registrationStyles.logo}></Image>
      <Text style={registrationStyles.title}>Register</Text>
      <Text style={registrationStyles.emailLabel}>Email</Text>
      <TextInput
        style={registrationStyles.emailInput}
        onChangeText={ (text) => updateEmail(text) }
      />
      <Text style={registrationStyles.emailLabel}>Confirm Email</Text>
      <TextInput
        style={registrationStyles.emailInput}
        onChangeText={ (text) => updateEmailConfirm(text) }
      />
      <PasswordToggle 
        displayed={true}
        togglePassVisibility={togglePassVisibility}
      />
      <Text style={registrationStyles.passwordLabel}>Password</Text>
      <TextInput
        style={registrationStyles.passwordInput}
        onChangeText={ (text) => updatePassword(text) }
      />
      <Text style={registrationStyles.passwordLabel}>Confirm Password</Text>
      <TextInput
        style={registrationStyles.passwordInput}
        onChangeText={ (text) => updateEmailConfirm(text) }
      />
      <TouchableOpacity 
        style={registrationStyles.goToLoginBtn}
        onPressOut={goToLogin}
      >
        <Text>Have an Account? Login</Text>
      </TouchableOpacity>

    </View>
  )
};

export default RegistrationComponent;