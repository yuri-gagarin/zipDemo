import React, { useState } from "react";
import { 
  Image,
  Text, 
  TouchableOpacity, 
  TextInput, 
  View
  } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
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
  const handleLogin = ({ email, password }) => {
    const { navigation } = props;
    // Login and Authentication API call here //
    const token = "afaketoken";
    AsyncStorage.setItem("loginToken", token)
      .then((value) => {
        console.log(value);
        console.log("Navigating")
        navigation.navigate("homeScreen");
      })  
      .catch((error) => {
        console.error(error);
      })
  };
  const goToRegistration = () => {
    const { navigation } = props;
    navigation.navigate("register");
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
      <TouchableOpacity 
        style={loginStyles.loginButton}
        onPressOut={handleLogin}
      >
        <Text style={loginStyles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={loginStyles.goToRegisterBtn}
        onPress={ goToRegistration }
      >
        <Text style={loginStyles.goToRegisterBtnText}>New? Register</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={loginStyles.forgotLogin}
        onPress={ (props) => goToRegistration(props) }
      >
        <Text>Forgot Login or Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

LoginComponent.navigationOptions = {
  title: "Main Login"
};


export default LoginComponent;