import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import PropTypes from "prop-types";
// styles and images imports //
import { mainFooterStyle } from "./styles/styles";
// redux imports //

const MainFooter = (props) => {
  const { navigation } = props;

  const openStores = () => {

  };
  const openReservations = () => {

  };
  const toggleReserve = () => {
    navigation.navigate("cameraScreen");
  };

  return (
    <View style={mainFooterStyle.mainFooterContainer}>
      <TouchableHighlight 
        style={mainFooterStyle.mainFooterBtn}
        underlayColor={"red"}
        onPress={openReservations}
      >
        <Text>Reservations</Text>
      </TouchableHighlight>
      <TouchableHighlight 
        style={mainFooterStyle.mainFooterBtn}
        underlayColor={"red"}
        onPress={toggleReserve}
      >
        <Text>Reserve</Text>
      </TouchableHighlight>
      <TouchableHighlight 
        style={mainFooterStyle.mainFooterBtn}
        underlayColor={"red"}
        onPress={openStores}
      >
        <Text>Stores</Text>
      </TouchableHighlight>
    </View>
  );
};

// PropTypes checking //
MainFooter.propType = {
  navigation: PropTypes.object.isRequired
};

export default MainFooter;