import "react-native-gesture-handler";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Challenges from "./screens/Challenge";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { store, persistor } from "./store/configureStore";
const theme = {
  mainColor: "#e91e62"
};

const Tab = createBottomTabNavigator();
class App extends React.Component {
  componentDidCatch(error, errorInfo) {
    console.log(error);
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
                    tabBarLabel: "Home",
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
                  name="challenges"
                  component={Challenges}
                  options={{
                    tabBarLabel: "challenges",
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons
                        name="alpha-c-circle-outline"
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
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
