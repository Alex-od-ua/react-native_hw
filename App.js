import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import LoginScreen from "./src/Screens/LoginScreen";
import RegistrationScreen from "./src/Screens/RegistrationScreen";

export default function App() {
  return (
    <LoginScreen />
    // <RegistrationScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "#ecf0f1",
  },

  // image: {
  //   flex: 1,
  //   resizeMode: "cover",
  //   justifyContent: "center",
  // },
});
