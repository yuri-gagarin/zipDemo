import React, { useState, useEffect } from "react";
import { 
  Animated,
  Image, 
  Keyboard,
  Text,
  TextInput, 
  TouchableOpacity, 
  UIManager,
  View 
  } from "react-native";
// additional Components //
import PasswordToggle from "./PasswordToggle";
// Style imports and images //
import { registrationStyles, SCREEN_HEIGHT, SCREEN_WIDTH } from "./styles/styles";
import { mainLogoImg } from "../../images/imageIndex";

const { State: TextInputState } = TextInput;

const RegistrationComponent = (props) => {

  const initialState = {
    email: "",
    emailConfirm: "",
    password: "",
    passwordConfirm: "",
    passwordHidden: true
  };
  let keyboardWillShowEvent, keyboardWillHideEvent;

  const [registrationState, updateRegistrationState] = useState(initialState);
  const [keyboardShift, setKeyboardShift] = useState(new Animated.Value(0));

  const keyboardDidShow = (e) => {
    const keyboardHeight = e.endCoordinates.height;
    const currentlyFocusedInput = TextInputState.currentlyFocusedField();

    UIManager.measure(currentlyFocusedInput, (originX, originY, width, height, pageX, pageY) => {
      const fieldHeight = height;
      const fieldTop = pageY;
      const gap = (SCREEN_HEIGHT - keyboardHeight) - (fieldHeight + fieldTop);
      if (gap >= 0) {
        return;
      }
      Animated.timing(keyboardShift, {
        toValue: gap - 10,
        duration: 500,
        useNativeDriver: true
      }).start();
    });
  };
  const keyboardDidHide = (e) => {
    Animated.timing(keyboardShift, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start();
  };

  useEffect(() => {
    // listeners for keyboard //
    keyboardWillShowEvent = Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    keyboardWillHideEvent = Keyboard.addListener("keyboardDidHide", keyboardDidHide);
    return function cleanupComponent() {
      // cleanup listeners for keyboard //
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
      style={{ transform: [ {translateY: keyboardShift} ] }}
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