import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
// Additional Components //
import PasswordToggle from "./PasswordToggle";
// Styles and Images //
import { loginStyles } from "./styles/styles";
import { mainLogoImg } from "../../images/imageIndex";

const LoginComponent = (props) => {

  const initialState = {
    email: "",
    password: "",
    passwordHidden: true
  };
  const [loginState, updateState] = useState(initialState);

  const updateEmail = (text) => {
    updateState({
      ...loginState,
      email: text
    });
  };
  const updatePassword = (text) => {
    updateState({
      ...loginState,
      password: text
    });
  };
  const renderShowButton = () => {
    const { password } = loginState;
    return password ? true : false;
  };
  const togglePassVisibility = () => {
    updateState({
      ...loginState,
      passwordHidden: !loginState.passwordHidden
    });
  };
  const goToRegistration = () => {

  };

  return (
    <View style={loginStyles.loginView}>
      <Image source={mainLogoImg} style={loginStyles.logo}></Image>
      <Text style={loginStyles.title}>Login</Text>
      <Text style={loginStyles.emailLabel}>Email</Text>
      <TextInput 
        style={loginStyles.emailInput}
        onChangeText={ (text) => updateEmail(text) }
      />
      <Text style={loginStyles.passwordLabel}>Password</Text>
      <PasswordToggle
        displayed={renderShowButton()}
        togglePassVisibility={togglePassVisibility}
      />
      <TextInput 
        style={loginStyles.passwordInput}
        onChangeText={ (text) => updatePassword(text) }
        secureTextEntry={loginState.passwordHidden}
      />
      <TouchableOpacity style = {loginStyles.loginButton}>
        <Text style={loginStyles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={loginStyles.forgotLogin}
        onPress={goToRegistration}
      >
        <Text>Forgot Login or Password?</Text>
      </TouchableOpacity>
    </View>
  );
};


export default LoginComponent;