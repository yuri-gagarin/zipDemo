import React,  {} from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import PropTypes from "prop-types";
// additional dependencies //
import AsyncStorage from "@react-native-community/async-storage";
import {} from "react-native"
// styles and images imports //
import { profileScreen } from "./styles/styles";
// component constant imports //
import { API_TOKEN } from "../../redux/constants/componentConstants";
// redux imports //
import { connect } from "react-redux";

const ProfileComponent = (props) => {
  const { navigation } = props;
  const handleLogout = () => {
    console.log("handle logout")
    AsyncStorage.removeItem(API_TOKEN);
    navigation.navigate("login");
  };

  return (
    <SafeAreaView style={profileScreen.profileContainer}> 
      <Text style={profileScreen.profileHeader}>My Profile</Text>
      <TouchableOpacity 
        style={profileScreen.logoutBtn}
        onPressOut={handleLogout}
      >
        <Text style={profileScreen.logoutBtnText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// react-navigation options //
ProfileComponent.navigationOptions = {
  title: "My Profile"
};

// react prop-types checking //
ProfileComponent.propTypes = {
  navigation: PropTypes.object.isRequired
};

// redux mapStateToProps and mapDispatchToProps //
const mapStateToProps = (state) => {
  return {

  };
};
const mapDispatchToProps = (dispatch) => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);