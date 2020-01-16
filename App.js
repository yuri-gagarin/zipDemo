import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// Component Imports //
import LoginComponent from "./src/components/auth/LoginComponent";
import RegistrationComponent from "./src/components/auth/RegistrationComponent";

// redux imports //
import { Provider } from "react-redux";
import store from "./src/redux/store";

import Navigation from "./src/config/navigatorConfig";

// Main app Page //

class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
};

export default App;