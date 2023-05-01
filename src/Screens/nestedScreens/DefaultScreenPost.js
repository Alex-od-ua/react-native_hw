import React from "react";
import { StyleSheet, View } from "react-native";

import Profile from "../../components/Profile";

const avatar = require("../../../assets/images/user-img.jpg");

export default function DefaultScreenPost() {
  return (
    <View style={styles.container}>
      <Profile avatar={avatar} name="Natali Romanenko" email="email@example.com" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 8,
  },
});
