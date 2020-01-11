import React, { useEffect } from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View
} from "react-native";
// propTypes //
import propTypes from "prop-types";
// constants //
import componentConstants from "../../redux/constants/componentConstants";
const { API_TOKEN } = componentConstants;

const AuthLoadingScreenComponent  = (props) => {

  const checkLogin = () => {
    const { navigation } = props;
    return AsyncStorage.getItem(API_TOKEN)
      .then((token) => {
        navigation.navigate(token ? "App": "Auth");
      });
  };

  useEffect(() => {
    checkLogin();
  });

  return (
    <View>
      <ActivityIndicator />
      <StatusBar  barStyle={"default"} />
    </View>
  );
};

AuthLoadingScreenComponent.propTypes = {
  navigation: propTypes.object.isRequired
};

export default AuthLoadingScreenComponent;