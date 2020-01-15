import React, { useEffect } from "react";
import {
  ActivityIndicator,
  StatusBar,
  View
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
// propTypes //
import propTypes from "prop-types";
// constants //
import componentConstants from "../../redux/constants/componentConstants";

// variables for component //
const { API_TOKEN } = componentConstants;

const AuthLoadingScreenComponent  = (props) => {

  const checkLogin = () => {
    const { navigation } = props;
    return AsyncStorage.getItem(API_TOKEN)
      .then((token) => {
        console.info("checking");
        console.info(token);
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