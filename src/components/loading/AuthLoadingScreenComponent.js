import React, { useEffect } from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View
} from "react-native";
// propTypes //
import propTypes from "prop-types";

const AuthLoadingScreenComponent  = (props) => {

  const bootStrap = () => {
    const { navigation } = props;
    return AsyncStorage.getItem('userToken')
      .then((token) => {
        navigation.navigate(token ? "App": "Auth");
      });
  };

  useEffect(() => {
    return bootStrap();
  });

  return (
    <View>
      <ActivityIndicator />
      <StatusBar  barStyle={"default"} />
    </View>
  );
};

AuthLoadingScreenComponent.PropTypes = {
  navigation: propTypes.object.isRequired
};

export default AuthLoadingScreenComponent;