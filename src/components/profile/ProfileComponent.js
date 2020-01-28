import React,  {} from "react";
import { Image, View, Text,TouchableOpacity, SafeAreaView } from "react-native";
import PropTypes from "prop-types";
// additional dependencies //
import AsyncStorage from "@react-native-community/async-storage";
import {} from "react-native"
// styles and images imports //
import { profileScreen } from "./styles/styles";
import { defaultProfileImg } from "../../images/imageIndex";
// component constant imports //
import { API_TOKEN } from "../../redux/constants/componentConstants";
// redux imports //
import { connect } from "react-redux";

const ProfileComponent = (props) => {
  const { navigation } = props;
  const handleLogout = () => {
    //console.log("handle logout")
    AsyncStorage.removeItem(API_TOKEN);
    navigation.navigate("login");
  };

  const setProfileImage = () => {
    // should set either the profile image from User object or default image //
    // for now a default profile image //
    return defaultProfileImg;
  }

  return (
    <SafeAreaView style={profileScreen.profileContainer}> 
      <View style={profileScreen.userAvatar}>
        <Image source={setProfileImage()} style={profileScreen.userAvatarImg} />
      </View>
      <View style={profileScreen.profileInfo}>

      </View>
      <TouchableOpacity 
        style={profileScreen.logoutBtn}
        onPress={handleLogout}
      >
        <Text style={profileScreen.logoutBtnText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// react-navigation options //
ProfileComponent.navigationOptions = {
  title: "My Profile",
  headerTitleAlign: "center"
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