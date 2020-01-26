import React from "react";
import { SafeAreaView, View } from "react-native";
import PropTypes from "prop-types";
// additional imports and dependencies //
import { RNCamera } from "react-native-camera";

const CameraLoadingScreen = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: "red"}}>

    </View>
  )
};

const CameraComponent = (props) => {
  const cameraType = RNCamera.Constants.Type.back;
  const READY = RNCamera.Constants.CameraStatus.READY;
  const flasMode = RNCamera.Constants.FlashMode.on;
  const androidPermissions = {
    title: "Camera Permission",
    message: "Can we use the device camera to scan QR code?",
    buttonPositive: "Yes",
    buttonNegative: "Cancel"
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{flex: 1}}>Camera</Text>
      <RNCamera
        style={{flex: 9}}
        type={cameraType}

      >
      {
        ({ camera, status, recordAudiPermissionStatus}) => {
          
        }
      }
      </RNCamera>
    </SafeAreaView>
  );
};

// react-navigation options //

// PropTypes checking //

export default CameraComponent;