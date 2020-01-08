import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// Component Imports //
import LoginComponent from "./src/components/auth/LoginComponent";
import RegistrationComponent from "./src/components/auth/RegistrationComponent";

// redux imports //
import { Provider } from "react-redux";
import store from "./src/redux/store";

// React navigation  imports //
import "react-native-gesture-handler";
import { createAppContainer } from "react-navigation";
import mainNavigator from "./src/config/navigatorConfig";

// Main app Page //

class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Provider store={store}>
        <LoginComponent />
      </Provider>
    );
  }
};

export default createAppContainer(mainNavigator);
