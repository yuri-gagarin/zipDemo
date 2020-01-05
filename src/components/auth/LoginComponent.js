import React from "react";
import { SafeAreaView, Text, TouchableOpacity, TextInput } from "react-native";

import styles from "./styles/styles";

const LoginComponent = (props) => {

  return (
    <SafeAreaView style={styles.loginView}>
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
    </SafeAreaView>
  );
};


export default LoginComponent;