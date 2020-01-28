import { StyleSheet } from "react-native";

export const profileScreen = StyleSheet.create({
  profileContainer: {
    flex:1,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "red"
    //position:"relative"
  },
  profileHeader: {
    flex: 1,
    justifyContent: "center",
    //borderWidth: 2,
    //borderColor: "green"
  },
  profileHeaderText: {

  },
  userAvatar: {
    flex: 1,
    //orderWidth: 1,
    height: 75,
    width: "100%",
    //borderColor: "green",
    //borderRadius: 25,
    //overflow: "hidden",
    //justifyContent:"center",
    alignItems: "center",
    marginTop: "2%"
  },
  userAvatarImg: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 25
  },
  profileInfo: {
    flex: 10,
    width: "100%",
    borderWidth: 2,
    borderColor: "red",
    marginBottom: "3%",
    marginTop: "2%"
  },
  logoutBtn: {
    flex: 1,
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 20,
    width: 100,
    height: 50,
    marginBottom: "2%",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutBtnText: {
    color: "green",
    //justifyContent: "flex-end"
  },
  spacer: {
    flex: 1
  }
});