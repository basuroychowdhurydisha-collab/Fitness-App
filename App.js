
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./Login";
import Signup from "./Signup";
import Today from "./Today";
import Profile from "./Profile";
import Exercise from "./Exercise";

const Navigator = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup },
    Today: { screen: Today },
    Profile: { screen: Profile },
    Exercise: { screen: Exercise },
  },
  {
    initialRouteName: "Login",
  }
);

const App = createAppContainer(Navigator);

export default App;
