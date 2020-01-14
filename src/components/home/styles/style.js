import { StyleSheet } from "react-native";

// General HomeScreenComponent styles //
export const homeScreenStyles = StyleSheet.create({
  mainScreeen: {
    flex: 1
  }
});
// END HomeScreenComponents styles //
// TopHomeNavbar styles //
export const topHomeNavStyles = StyleSheet.create({
  mainNav: {
    height: 75,
    width: "100%",
    position: "relative",
    borderWidth: 2,
    borderColor: "red"
  },
  profileButton: {
    height: 40,
    width: 75,
    position: "absolute",
    right: "5%",
    top: "20%",
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 25
  },
  profileButtonText: {
    textAlign: "center",
    marginTop: "12%"
  },
  messagesButton: {
    height: 40,
    width: 120,
    position: "relative",
    left: "5%",
    top: "20%",
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 20
  },
  messagesButtonText: {
    textAlign: "center",
    marginTop: "7%",
    paddingLeft: 5,
    paddingRight: 10
  },
  messagesCounter: {
    borderWidth: 2,
    height: 50,
    width: 50,
    borderColor: "red",
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