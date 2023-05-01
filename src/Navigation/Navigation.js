import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../Screens/auth/LoginScreen";
import RegistrationScreen from "../Screens/auth/RegistrationScreen";
import Home from "../Screens/main/Home";
import CreatePostsScreen from "../Screens/main/CreatePostsScreen";
import ProfileScreen from "../Screens/main/ProfileScreen";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Create post" component={CreatePostsScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default Navigation;
