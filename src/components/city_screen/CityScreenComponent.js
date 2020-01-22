import React from "react";
import { Image, SafeAreaView, Text, TouchableHighlight, View } from "react-native";
import PropTypes from "prop-types";
// react-navigation imports //
import { StackActions, NavigationActions } from 'react-navigation';
// styles and images imports //
import { lvivDefault } from "../../images/imageIndex";
import {} from "./styles/styles";

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
      <View style={{flex: 4, backgroundColor: "white", borderWidth: 2, borderColor: "blue", justifyContent: "center", alignItems: "center"}}>
        <Text style={{marginBottom: "10%", fontSize: 25}}>Welcome</Text>
        <View style={{width: 200, height: 200, justifyContent: "center", borderWidth: 5, borderRadius: 50, overflow: "hidden"}}>
          <Image 
            style={{height: 200, width: 200 }}
            source={lvivDefault}
          />
        </View>
        <Text style={{marginTop: "10%"}}>Lviv</Text>
        
      </View>
      <View style={{flex: 2, borderWidth: 2, borderColor: "green", backgroundColor: "grey", justifyContent: "center", alignItems: "center" }}>
        <TouchableHighlight 
          style={{width: 150, height: 70, borderWidth: 2, borderColor: "white", alignItems: "center", justifyContent: "center"}}
          onPressOut={navigateHome}
        >
          <Text>Forward</Text>
        </TouchableHighlight>
        <TouchableHighlight 
          style={{width: 150, height: 70, borderWidth: 2, borderColor: "white", alignItems: "center", justifyContent: "center"}}
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
