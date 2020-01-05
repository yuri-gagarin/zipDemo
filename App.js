import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

// Component Imports //
import LoginComponent from "./src/components/auth/LoginComponent";

// redux imports //
import { Provider } from "react-redux";
import store from "./src/redux/store";

// Main app Page //

export default class App extends Component {

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
