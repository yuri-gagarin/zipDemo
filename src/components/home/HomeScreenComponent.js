import React from "react";
import { SafeAreaView, View, Text, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
// additional components /
import TopHomeNavbar from "./TopHomeNavbar";
import MapScreeen from "./MapScreen";
// styles and images //
import { homeScreenStyles } from "./styles/style";


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
      <View style={{flex: 1, flexDirection: "row"}}>
        <TouchableHighlight 
          style={{flex: 1, flexDirection: "row", borderWidth: 2, borderColor: "red", justifyContent: "center", alignItems: "center"}}
          underlayColor={"red"}
          onPress={() => {}}
        >
          <Text>Press</Text>
        </TouchableHighlight>
        <TouchableHighlight 
          style={{flex: 1, flexDirection: "row", borderWidth: 2, borderColor: "red", justifyContent: "center", alignItems: "center"}}
          underlayColor={"red"}
          onPress={() => {}}
        >
          <Text>Press</Text>
        </TouchableHighlight>
        <TouchableHighlight 
          style={{flex: 1, flexDirection: "row", borderWidth: 2, borderColor: "red", justifyContent: "center", alignItems: "center"}}
          underlayColor={"red"}
          onPress={() => {}}
        >
          <Text>Press</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

HomeScreenComponent.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default HomeScreenComponent;