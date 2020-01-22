import React from "react";
import { View, Text, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE } from  "react-native-maps";
// styles and images imports //
import { mapScreenStyles } from "./styles/style";
import { mapDefault } from "../../images/imageIndex";
// redux imports //




const RegionMapView = (props) => {

  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  return (
    <View style={mapScreenStyles.mapView}>
      <MapView 
        style={mapScreenStyles.mapContainer}
        region={initialRegion}
        provider={PROVIDER_GOOGLE}
      />  
    </View>
  );
};

export default RegionMapView;

