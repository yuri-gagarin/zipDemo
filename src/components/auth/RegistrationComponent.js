import React, { useState, useEffect } from "react";
import { 
  Animated,
  Image, 
  Keyboard,
  ScrollView,
  Text,
  TextInput, 
  TouchableOpacity, 
  View 
  } from "react-native";
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
  let keyboardWillShowEvent, keyboardWillHideEvent;
  let keyboardHeight = new Animated.Value(0);

  const [registrationState, updateRegistrationState] = useState(initialState);

  const keyboardWillShow = (e) => {
    Animated.parallel([
      Animated.spring(keyboardHeight, {
        toValue: e.endCoordinates.height + 500
      })
    ]).start();
  };
  const keyboardWilHide = (e) => {
    Animated.parallel([
      Animated.spring(keyboardHeight, {
        toValue: 0
      })
    ]).start();
  };

  useEffect(() => {
    //console.log("mounting component and set properties");
    keyboardWillShowEvent = Keyboard.addListener("keyboardDidShow", keyboardWillShow);
    keyboardWillHideEvent = Keyboard.addListener("keyboardDidHide", keyboardWilHide);
    return function cleanupComponent() {
      //console.log("unmounted and cleaning up");
      keyboardWillShowEvent.remove();
      keyboardWillHideEvent.remove();
    }
  }, []);


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
  const handleRegistration = ({email, password}) => {

  };
  const goToLogin = () => {
    const { navigation } = props;
    navigation.navigate("login");
  };

  return (
    <Animated.ScrollView 
      style={{paddingBottom: keyboardHeight}}
      contentContainerStyle={registrationStyles.registrationView}
      bounces={false}
    >
      <View style={{flex: 1, justifyContent: "flex-start", marginTop: "10%"}}>
        <Image source={mainLogoImg} style={registrationStyles.logo}></Image>
      </View>
      <View style={{flex: 1, justifyContent: "flex-start", alignItems: "center", width: "100%"}}>
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
          style={registrationStyles.registerBtn}
          onPressOut={handleRegistration}
        >
          <Text style={registrationStyles.registerBtnText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, justifyContent: "flex-end"}}>
        <TouchableOpacity 
          style={registrationStyles.goToLoginBtn}
          onPressOut={goToLogin}
        >
          <Text>Have an Account? Login</Text>
        </TouchableOpacity>
      </View>
    </Animated.ScrollView>
  )
};

export default RegistrationComponent;