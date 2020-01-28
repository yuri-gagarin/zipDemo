import React, { useEffect } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
// additional imports and dependencies //
import { RNCamera } from "react-native-camera";
//import { TouchableOpacity } from "react-native-gesture-handler";

const CameraLoadingScreen = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: "grey", justifyContent: "center", alignItems: "center"}}>
      <Text>Loading</Text>
    </View>
  );
};

const  CameraComponent = (props) => {

  const cameraType = RNCamera.Constants.Type.back;
  const READY = RNCamera.Constants.CameraStatus.READY;
  const flashMode = RNCamera.Constants.FlashMode.on;
  const androidPermissions = {
    title: "Camera Permission",
    message: "Can we use the device camera to scan QR code?",
    buttonPositive: "Yes",
    buttonNegative: "Cancel"
  };
  useEffect(() => {
    return function cleanUpComponent() {
      console.info("unmounted");
    }
  });

  const takePicture = (camera) => {
    // take picture implementation here //
    console.info("taking picture");
    const options = { quality:  1.0, base64: false, doNotSave: true };
    return camera.takePictureAsync(options)
      .then((response) => {
        console.info("taken");
        console.info(response);
      })
      .catch((error) => {
        console.error(error);
    }); 
  };

  const handleQRCode = ({ data, rawData, type, bounds }) => {
    console.log(typeof data);
    // we should collect user info, QR code info and send it back to the server //
    const QRData = {
      
    };
    // make an API call  return to reservation screen //
    
  };

  const closeCamera = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <RNCamera
        style={{flex: 9}}
        type={cameraType}
        flashMode={flashMode}
        androidCameraPermissionOptions={androidPermissions}
        onBarCodeRead={(e) => handleQRCode(e)}
        captureAudio={false}
      >
      {
        ({ camera, status, recordAudioPermissionStatus}) => {
          if (status !== READY) {
            console.info(status);
            return <CameraLoadingScreen />
          }
          console.info(status);
          return (
            <View style={{flex: 0, flexDirection: "row", justifyContent: "center", borderWidth: 2, borderColor: "red" }}>
              <TouchableOpacity 
                style={{flex: 0, borderWidth: 2, borderColor: "white", width: 100, height: 50, justifyContent: "center", alignItems: "center", backgroundColor: "green", borderRadius: 15}}
                onPressOut={closeCamera}>
                <Text style={{fontSize: 34, fontWeight: "bold", color: "white", marginBottom: "5%"}}>Back</Text>
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
  headerShown: false
};
// PropTypes checking //
CameraComponent.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default CameraComponent;