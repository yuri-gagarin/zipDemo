import React from "react";
import { SafeAreaView, View, Text, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
// additional components /
import TopHomeNavbar from "./TopHomeNavbar";
import MapScreeen from "./MapScreen";
// styles and images //
import { homeScreenStyles } from "./styles/style";
import MainFooter from "../footers/MainFooter";


/*

*/
const HomeScreenComponent = (props) => {
  const { navigation } = props;
  return (
    <SafeAreaView style={homeScreenStyles.mainScreen}>
     <TopHomeNavbar 
        newMessages={5}
        navigation={navigation}
      />
      <MapScreeen />
      <MainFooter 
        navigation={navigation}
      />
    </SafeAreaView>
  );
};
// react-navigation options //
HomeScreenComponent.navigationOptions = {
  title: "Home",
  //headerLeft: () => null
};
// PropTypes checking //
HomeScreenComponent.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default HomeScreenComponent;