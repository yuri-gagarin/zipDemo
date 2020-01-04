import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

// Component Imports //
import IndexComponent from "./components/index/IndexComponent";

// Main app Page //

const styles =  StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: "red",
    height: "100%"
  },
  titleView: {
    borderWidth: 2,
    borderColor: "green",
    width: "100%",
    height: 50,
    marginTop: 100,
    textAlign: "center"
  },
  loginButton: {
    
  }
})

export default class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <SafeAreaView style = {styles.container}>
        <View style = {styles.titleView}>
          <Text style = { { color: "green", textAlign: "center"} }>Hello There</Text>
        </View>
        <IndexComponent />
      </SafeAreaView>
    );
  }
};
