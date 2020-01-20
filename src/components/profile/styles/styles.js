import { StyleSheet } from "react-native";

export const profileScreen = StyleSheet.create({
  profileContainer: {
    flex:1,
    position:"relative"
  },
  profileHeader: {
    position: "absolute",
    top: "1%",
    justifyContent: "center"
  },
  logoutBtn: {
    position: "absolute",
    bottom:"10%"
  },
  logoutBtnText: {
    color: "green"
  }
});