import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

// import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// import AuthNavigation from "./src/Screens/auth/AuthNav";
import Navigation from "./src/Navigation/Navigation";
// import LoginScreen from "./src/Screens/auth/LoginScreen";
// import RegistrationScreen from "./src/Screens/auth/RegistrationScreen";

// const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Navigation />
      </TouchableWithoutFeedback>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
// alignItems: "center",
// justifyContent: "center",
// backgroundColor: "#ecf0f1",
// },

// image: {
//   flex: 1,
//   resizeMode: "cover",
//   justifyContent: "center",
// },
// });
