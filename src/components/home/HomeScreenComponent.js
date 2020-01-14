import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
// additional components /
import TopHomeNavbar from "./TopHomeNavbar";
// styles and images //
import { homeScreenStyles } from "./styles/style";

const HomeScreenComponent = (props) => {
  const { navigation } = props;
  return (
    <View style={homeScreenStyles.mainSceen}>
      <TopHomeNavbar 
        newMessages={5}
        navigation={navigation}
      />
      <View style={{flex: 6}}>

      </View>
    </View>
  );
};

HomeScreenComponent.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default HomeScreenComponent;