import { StyleSheet } from "react-native";

// some constants for animations //
export const DEFAULT_LOGO_HEIGHT = 150;
export const MIN_LOGO_HEIGHT = 50;
// LoginComponent styling //
export const loginStyles = StyleSheet.create({
  loginView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "red"
  },
  logo: {
    flex: 1,
    width: 150
  },
  title: {
    flex: 1,
    fontSize: 36
  },
  emailLabel: {
    flex: 1,
    textAlign: "center",
    marginTop: 40,
    marginBottom: 10
  },
  emailInput: {
    flex: 1,
    height: 50,
    width: "75%",
    fontSize: 22,
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 25,
  },
  passwordLabel: {
    flex: 1,
    textAlign: "center",
    marginTop: 25,
    marginBottom: 10
  },
  passwordInput: {
    flex: 1,
    height: 50,
    width: "75%",
    fontSize: 22,
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 25,
  },
  loginButton: {
    flex: 1,
    height: 50,
    width: 100,
    marginTop: 25,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "green"
  },
  loginButtonText: {
    flex: 1,
    textAlign: "center",
  },
  goToRegisterBtn: {
    flex: 1,
    height: 30,
    width: 120,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "green"
  },
  goToRegisterBtnText: {
    flex: 1,
    padding: 5,
    textAlign: "center",
    color: "green"
  },
  forgotLogin: {
    flex: 1,
    height: 20,
    width: "auto",
  }
});
// END LoginComponent styling //

// RegistrationComponent styling //
export const registrationStyles = StyleSheet.create({
  registrationView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  logo: {
    height: 150,
    width: 150
  },
  title: {
    fontSize: 36
  },
  emailLabel: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10
  },
  emailInput: {
    height: 50,
    width: "75%",
    fontSize: 22,
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 25,
  },
  emailConfirmLabel: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10
  },
  emailConfirm: {

  },
  passwordLabel: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10
  },
  passwordInput: {
    height: 50,
    width: "75%",
    fontSize: 22,
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 25,
  },
  passwordConfirmLabel: {

  },
  passwordConfirm: {

  },
  registerBtn: {
    height: 50,
    width: 100,
    marginTop: 25,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "green"
  },
  registerBtnText: {
    textAlign: "center",
    fontSize: 18,
    paddingTop: "10%"
  },
  goToLoginBtn: {
    position: "absolute",
    bottom: "10%"
  },
  toToLoginBtnText: {

  }
});
// END RegistrationComponent styling //

// PasswordToggleComponent styling //
export const passwordToggleStyle = StyleSheet.create({
  touchable: {
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 50,
    marginBottom: 5,
    padding: 5
  },
  innerText: {

  }
});
// END PasswrodToggleComponent styling //
