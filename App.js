import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const styles =  StyleSheet.create({
  container: {
    borderRadius: 2,
    borderWiddth: 3,
    borderColoer: "red"
  },
  titleView: {

  },
  loginButton: {
    
  }
})

export default class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    <View style = {styles.container}>
      <View style = {style.titleView}>
        <Text style = { { color: "green"} }>Hello There</Text>
      </View>
    </View>
  }
}