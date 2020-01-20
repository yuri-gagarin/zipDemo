import { StyleSheet } from "react-native";

export const msgComponentStyle = StyleSheet.create({
  viewContainer: {
    borderWidth: 2,
    borderColor: "red"
  }
});

export const conversationStyle = StyleSheet.create({
  conversationsComponent: {
    flex: 1
  },
  conversationRow: {
    flex: 1,
    height: 75,
    backgroundColor: "white"
  },
  conversationView: {
    flex: 1,
    width: "100%",
    borderWidth: 1,
    borderColor: "green"
  },
  conversationsRowHeader: {
    textAlign: "center",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "red"
  },
  conversationDeleteBtn: {
    width: 100,
    height: 75,
    position: "absolute",
    backgroundColor: "red",
    textAlign: "center",
    justifyContent: "center",
    right: 0,
    borderWidth: 2,
    borderColor: "yellow",
    height: "100%",

  },
  conversationDeleteBtnText: {

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
  },
  messagesInput: {
    width: "100%",
    position: "relative",
    bottom: "0%",
    height: 50,
    borderWidth: 2,
    borderColor: "red",
  }
});

