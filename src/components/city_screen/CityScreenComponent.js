import React from "react";
import { Image, SafeAreaView, Text, TouchableHighlight, View } from "react-native";
import PropTypes from "prop-types";
// react-navigation imports //
import { StackActions, NavigationActions } from 'react-navigation';
// styles and images imports //
// redux imports //
const CityScreenComponent = (props) => {
  const { navigation} = props;

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
      <View style={{flex: 4, backgroundColor: "blue", borderWidth: 2, borderColor: "blue"}}>
        <Image style={{height: 100, width: 100}}>

        </Image>
      </View>
      <View style={{flex: 2, borderWidth: 2, borderColor: "green", backgroundColor: "red" }}>
        <TouchableHighlight 
          style={{flex: 1, justifyContent: "center", alignItems: "center"}}
          onPressOut={navigateHome}
        >
          <Text>Forward</Text>
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
  navigation: PropTypes.object.isRequired
};



export default CityScreenComponent;
