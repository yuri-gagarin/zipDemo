import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import styles from "./styles/styles";

class IndexComponent extends Component {

  render() {
    return (
      <View style={styles.loginView}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.emailLabel}>Email</Text>
        <TextInput 
          style={styles.emailInput}
        />
        <Text style={styles.passwordLabel}>Password</Text>
        <TextInput 
          style={styles.passwordInput}
        />
        <TouchableOpacity style={styles.forgotLogin}>
          <Text>Forgot Login or Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
};


export default IndexComponent;