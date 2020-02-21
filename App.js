import { TapGestureHandler } from "react-native-gesture-handler";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducers/reducer";
import { MaterialCommunityIcons } from "react-native-vector-icons";
const store = createStore(reducer);

const theme = {
  mainColor: "green"
};

const Tab = createBottomTabNavigator();
export default () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
              activeTintColor: "#e91e63",
              border: "none"
            }}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarLabel: "home",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="home"
                    size={size}
                    color={color}
                  />
                )
              }}
            ></Tab.Screen>
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarLabel: "profile",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="account"
                    size={size}
                    color={color}
                  />
                )
              }}
            ></Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};
