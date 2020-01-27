import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import PropTypes from "prop-types";
// additional imports and dependencies //
import { RNCamera } from "react-native-camera";
import { TouchableOpacity } from "react-native-gesture-handler";

const CameraLoadingScreen = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: "red", justifyContent: "center", alignItems: "center"}}>
      <Text>Loading</Text>
    </View>
  );
};

const CameraComponent = (props) => {
  const cameraType = RNCamera.Constants.Type.back;
  const READY = RNCamera.Constants.CameraStatus.READY;
  const flashMode = RNCamera.Constants.FlashMode.on;
  const androidPermissions = {
    title: "Camera Permission",
    message: "Can we use the device camera to scan QR code?",
    buttonPositive: "Yes",
    buttonNegative: "Cancel"
  };

  const takePicture = (camera) => {
    // take picture implementation here //
    console.info("taking picture");
    const options = { quality:  1.0, base64: true };
    return camera.takePictureAsync(options)
      .then(() => {
        console.info(data);
      })
      .catch((error) => {
        console.error(error);
    }); 
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{flex: 1}}>Camera</Text>
      <RNCamera
        style={{flex: 9}}
        type={cameraType}
        flashMode={flashMode}
        androidCameraPermissionOptions={androidPermissions}
        captureAudio={false}
      >
      {
        ({ camera, status, recordAudioPermissionStatus}) => {
          if (status !== READY) {
            return <CameraLoadingScreen />
          }
          return (
            <View style={{flex: 1, flexDirection: "row", justifyContent: "center", borderWidth: 2, borderColor: "red" }}>
              <TouchableOpacity 
                style={{borderWidth: 2, borderColor: "green", width: 100, height: 50, justifyContent: "center", alignItems: "center", alignSelf: "flex-end"}}
                onPress={() => takePicture(camera)}>
                <Text style={{fontSize: 14}}>Snap</Text>
              </TouchableOpacity>
            </View>
          )
        }
      }
      </RNCamera>
    </SafeAreaView>
  );
};

// react-navigation options //
CameraComponent.navigationOptions = {
};
// PropTypes checking //
CameraComponent.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default CameraComponent;