import { StyleSheet } from "react-native";

export const cityLogoContainerStyle = StyleSheet.create({
  cityLogoContainer: {
    flex: 4, 
    backgroundColor: "#65CCB8", 
    //borderWidth: 2, 
    //borderColor: "blue", 
    justifyContent: "center", 
    alignItems: "center"
  },
  headerText: {
    marginBottom: "5%", 
    fontSize: 25,
    fontFamily: "Georgia",
    fontWeight: "bold",
    color: "white"

  },
  cityLogo: {
    width: 200, 
    height: 200, 
    justifyContent: "center", 
    borderWidth: 2, 
    borderRadius: 50, 
    borderColor: "white",
    overflow: "hidden"
  },
  cityImage: {
    height: 200,
    width: 200
  },
  footerText: {
    marginTop: "5%",
    fontSize: 75,
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "white"
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
    borderRadius: 20, 
    borderColor: "grey", 
    alignItems: "center", 
    justifyContent: "center"
  },
  forwardBtnText: {
    color: "black",
    fontSize: 20
  },
  otherCityBtn: {
    width: 150, 
    height: 70, 
    borderWidth: 2, 
    borderRadius: 20, 
    borderColor: "grey", 
    alignItems: "center", 
    justifyContent: "center"
  },
  otherCityBtnText: {
    color: "black",
    fontSize: 20
  }

});