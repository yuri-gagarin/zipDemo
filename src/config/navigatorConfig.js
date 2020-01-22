// react //
import React from "react";
// navigation imports //
// React navigation  imports //
import "react-native-gesture-handler";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";

// Component Imports //
import AuthLoadingScreenComponent from "../components/loading/AuthLoadingScreenComponent";
import ConversationsComponent from "../components/messages/ConversationsComponent";
import CityScreenComponent from "../components/city_screen/CityScreenComponent";
import HomeScreenComponent from "../components/home/HomeScreenComponent";
import LoginComponent from "../components/auth/LoginComponent";
import MessageContainer from "../components/messages/MessageContainer";
import RegistrationComponent from "../components/auth/RegistrationComponent";
import ProfileComponent from "../components/profile/ProfileComponent";
// Component Navigations Buttons //
import BackButton from "../components/buttons/BackButton";
// additional imports //
import { Transition } from "react-native-reanimated"; 

// main app routes //
const appRoutes = {
  homeScreen: {
    screen: HomeScreenComponent
  },
  conversationsScreen: {
    screen: ConversationsComponent
  },
  cityScreen: {
    screen: CityScreenComponent
  },
  messageScreen: {
    screen: MessageContainer
  },
  profileScreen: {
    screen: ProfileComponent
  }
};
const appStackConfig = {
  // app routes config here //
  initialRouteName: "cityScreen",
  headerTintColor: "black",
  headerLeft: () => {
    return (
      <BackButton />
    );
  }
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
const  Navigation = createAnimatedSwitchNavigator(navigatorRoutes, navigatorConfig);

export default createAppContainer(Navigation);