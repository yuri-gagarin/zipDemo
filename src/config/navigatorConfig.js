// react //
import React from "react";
// navigation imports //
import { createStackNavigator } from "react-navigation-stack";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";

// Component Imports //
import AuthLoadingScreenComponent from "../components/loading/AuthLoadingScreenComponent";
import HomeScreenComponent from "../components/home/HomeScreenComponent";
import LoginComponent from "../components/auth/LoginComponent";
import MessagesComponent from "../components/messages/MessagesComponent";
import RegistrationComponent from "../components/auth/RegistrationComponent";
import ProfileComponent from "../components/messages/MessagesComponent";

// additional imports //
import { Transition } from "react-native-reanimated"; 

// main app routes //
const appRoutes = {
  homeScreen: {
    screen: HomeScreenComponent
  },
  messagesScreen: {
    screen: MessagesComponent
  },
  profileScreen: {
    screen: ProfileComponent
  }
};
const appStackConfig = {
  // app routes config here //
  headerTintColor: "black"

};
// authorizaton routes and config //
const authRoutes = {
  login: {
    screen: LoginComponent
  },
  register: {
    screen: RegistrationComponent
  }
};
const authStackConfig = {
  // auth routes config here //
  transition: (
    <Transition.Together>
      <Transition.Out
        type={"fade"}
        durationMs={500}
      />
      <Transition.In 
        type={"fade"}
        durationMs={500}
      />
    </Transition.Together>
  )
};


// React navigation setup //
const AppStack = createStackNavigator(appRoutes, appStackConfig);
const AuthStack = createAnimatedSwitchNavigator(authRoutes, authStackConfig);
// combined routes and config //
const navigatorRoutes = {
  AuthLoading: {
    screen: AuthLoadingScreenComponent
  },
  Auth: AuthStack, 
  App: AppStack
};
const navigatorConfig = {
  // general navigator config here //
  initialRouteName: "AuthLoading",
  transition: (
    <Transition.Together>
      <Transition.Out
        type={"slide-bottom"}
        durationMs={500}
        interpolation={"linear"}
      />
      <Transition.In 
        type={"fade"}
        durationMs={500}
      />
    </Transition.Together>
  )
};
const  MainNavigator = createAnimatedSwitchNavigator(navigatorRoutes, navigatorConfig);

export default MainNavigator;