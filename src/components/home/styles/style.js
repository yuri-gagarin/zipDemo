import { StyleSheet } from "react-native";

// General HomeScreenComponent styles //
export const homeScreenStyles = StyleSheet.create({
  mainScreen: {
    flex: 1,
  }
});
// END HomeScreenComponents styles //
// TopHomeNavbar styles //
export const topHomeNavStyles = StyleSheet.create({
  mainNav: {
    flex: 1,
    width: "100%",
    position: "relative",
    backgroundColor: "#F4FBF9",
  },
  profileButton: {
    height: 40,
    width: 75,
    position: "absolute",
    right: "5%",
    top: "20%",
    borderWidth: 2,
    borderColor: "#F13C20",
    borderRadius: 25
  },
  profileButtonText: {
    textAlign: "center",
    marginTop: "12%",
    color: "#4056A1"
  },
  messagesButton: {
    height: 40,
    width: 120,
    position: "relative",
    left: "5%",
    top: "20%",
    borderWidth: 2,
    borderColor: "#F13C20",
    borderRadius: 20
  },
  messagesButtonText: {
    textAlign: "center",
    marginTop: "7%",
    paddingLeft: 5,
    paddingRight: 10,
    color: "#4056A1"
  },
  messagesCounter: {
    borderWidth: 2,
    height: 50,
    width: 50,
    borderColor: "#4056A1",
    backgroundColor: "white",
    overflow: "hidden",
    borderRadius: 25,
    position: "absolute",
    right: "-25%",
    top: "-17%",
    textAlign: "center",
    color: "blue",
    fontSize: 22,
    paddingTop: "17%"
  },
  messagesCounterText: {
    textAlign: "center",
    fontSize: 20
  }
});
// END TopHomeNavbar styles //
// MapScreen styles //
export const mapScreenStyles = StyleSheet.create({
  mapView: {
    flex: 8,
    width: "100%",
    borderWidth: 3,
    borderColor: "#C5CBE3",
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: "relative"
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject
  },
  
});
// END MapScreen styles //