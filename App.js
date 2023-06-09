import "react-native-gesture-handler";
import React, { useEffect } from "react";
import * as Location from "expo-location";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

import Navigation from "./src/Screens/mainScreens/Navigation";

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    };
  }, []);

  return (
    <NavigationContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Navigation />
      </TouchableWithoutFeedback>
    </NavigationContainer>
  );
}
