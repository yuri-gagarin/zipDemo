import { StyleSheet } from "react-native";

export const cityLogoContainerStyle = StyleSheet.create({
  cityLogoContainer: {
    flex: 4, 
    backgroundColor: "white", 
    borderWidth: 2, 
    borderColor: "blue", 
    justifyContent: "center", 
    alignItems: "center"
  },
  headerText: {
    marginBottom: "10%", 
    fontSize: 25,
    color: "black"
  },
  cityLogo: {
    width: 200, 
    height: 200, 
    justifyContent: "center", 
    borderWidth: 5, 
    borderRadius: 50, 
    overflow: "hidden"
  },
  cityImage: {
    height: 200,
    width: 200
  },
  footerText: {
    marginTop: "10%",
    fontSize: 20,
    color: "black"
  }
});

export const navBtnsContainerStyle = StyleSheet.create({
  navBtnsContainer: {
    flex: 2, 
    borderWidth: 2, 
    borderColor: "green", 
    backgroundColor: "white", 
    justifyContent: "space-evenly", 
    alignItems: "center" 
  },
  forwardBtn: {
    width: 150, 
    height: 70, 
    borderWidth: 2, 
    borderColor: "grey", 
    alignItems: "center", 
    justifyContent: "center"
  },
  forwardBtnText: {
    color: "black"
  },
  otherCityBtn: {
    width: 150, 
    height: 70, 
    borderWidth: 2, 
    borderColor: "grey", 
    alignItems: "center", 
    justifyContent: "center"
  },
  otherCityBtnText: {
    color: "black"
  }

});