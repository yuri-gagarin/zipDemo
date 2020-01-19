import { StyleSheet } from "react-native";

export const msgComponentStyle = StyleSheet.create({
  viewContainer: {
    borderWidth: 2,
    borderColor: "red"
  }
});

export const messageStyle = StyleSheet.create({
  messageContainer: {
    flex: 1,
    position: "relative",
    borderWidth: 2,
    borderColor: "green"
  },
  userMessage: {
    position: "relative",
    left: "50%",
    maxWidth: "50%",
    marginTop: "2%",
    overflow: "visible",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "red"
  },
  replyMessage: {
    position: "relative",
    left: "0%",
    maxWidth:"50%",
    marginTop: "2%",
    overflow: "visible",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "red"
  }
});

