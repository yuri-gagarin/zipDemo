import React, { useState, useEffect } from "react";
import { 
  Animated,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Text, 
  TouchableOpacity, 
  TextInput, 
  View
  } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
// Additional Components //
import PasswordToggle from "./PasswordToggle";
//import {} from "react-native-ke"
// Styles and Images //
import { loginStyles, DEFAULT_LOGO_HEIGHT, MIN_LOGO_HEIGHT } from "./styles/styles";
import { mainLogoImg } from "../../images/imageIndex";
// helpers and constants //
import { API_TOKEN } from "../../redux/constants/componentConstants";

const LoginComponent = (props) => {
  let keyboardWillShowEvent, keyboardWillHideEvent;
  let keyboardHeight = new Animated.Value(0);
  let logoHeight = new Animated.Value(DEFAULT_LOGO_HEIGHT);

  const initialState = {
    email: "",
    password: "",
    passwordHidden: true
  };
  const [loginState, updateState] = useState(initialState);

  const keyboardWillShow = (e) => {
    Animated.parallel([
      Animated.timing(keyboardHeight, {
        duration: 500,
        toValue: e.endCoordinates.height
      }),
      Animated.timing(logoHeight, {
        duration: 500,
        toValue: MIN_LOGO_HEIGHT
      })
    ]).start();
  };
  const keyboardWilHide = (e) => {
    Animated.parallel([
      Animated.timing(keyboardHeight, {
        duration: 1500,
        toValue: 0
      }),
      Animated.timing(logoHeight, {
        duration: 1500,
        toValue: DEFAULT_LOGO_HEIGHT
      })
    ]).start();
  };

  

  useEffect(() => {
    console.log("mounting component and set properties");
    keyboardWillShowEvent = Keyboard.addListener("keyboardDidShow", keyboardWillShow);
    keyboardWillHideEvent = Keyboard.addListener("keyboardDidHide", keyboardWilHide);
    return function cleanupComponent() {
      console.log("unmounted and cleaning up");
      keyboardWillShowEvent.remove();
      keyboardWillHideEvent.remove();
    }
  }, []);

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
    AsyncStorage.setItem(API_TOKEN, token)
      .then((value) => {
        navigation.navigate("cityScreen");
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
    <Animated.View style={{...loginStyles.loginView, paddingBottom: keyboardHeight}}>
      <Image source={mainLogoImg} style={{...loginStyles.logo, height: DEFAULT_LOGO_HEIGHT}}></Image>
      <Text style={loginStyles.title}>Login</Text>
      <Text style={loginStyles.emailLabel}>Email</Text>
      <TextInput 
        style={loginStyles.emailInput}
        placeholder={"email here"}
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
    </Animated.View>
  );
};

LoginComponent.navigationOptions = {
  title: "Main Login"
};


export default LoginComponent;