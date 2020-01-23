import React from "react";
import { Image, SafeAreaView, Text, TouchableHighlight, View } from "react-native";
import PropTypes from "prop-types";
// react-navigation imports //
import { StackActions, NavigationActions } from 'react-navigation';
// styles and images imports //
import { lvivDefault } from "../../images/imageIndex";
import { cityLogoContainerStyle, navBtnsContainerStyle } from "./styles/styles";

// redux imports //
const CityScreenComponent = (props) => {
  const { navigation, location } = props;

  // navigate to home screen and reset the navigation stack //
  const goToHomeScreenAndReset = StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: "homeScreen"
      })
    ]
  });

  const navigateHome = () => {
    navigation.dispatch(goToHomeScreenAndReset);
  };

  return (
    <SafeAreaView style={{flex: 1, borderWidth: 2, borderColor: "red"}}>
      <View style={cityLogoContainerStyle.cityLogoContainer}>
        <Text style={cityLogoContainerStyle.headerText}>Welcome</Text>
        <View style={cityLogoContainerStyle.cityLogo}>
          <Image 
            style={cityLogoContainerStyle.cityImage}
            source={lvivDefault}
          />
        </View>
        <Text style={cityLogoContainerStyle.footerText}>Lviv</Text>
        
      </View>
      <View style={navBtnsContainerStyle.navBtnsContainer}>
        <TouchableHighlight 
          style={navBtnsContainerStyle.forwardBtn}
          underlayColor={"grey"}
          onPressOut={navigateHome}
        >
          <Text>Forward</Text>
        </TouchableHighlight>
        <TouchableHighlight 
          style={navBtnsContainerStyle.otherCityBtn}
          underlayColor={"grey"}
          onPressOut={navigateHome}
        >
          <Text>Other City?</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};
// react-navigation options //
CityScreenComponent.navigationOptions = {

};
// PropTypes checking //
CityScreenComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};



export default CityScreenComponent;
