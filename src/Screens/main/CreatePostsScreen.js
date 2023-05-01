import React, { useState, useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const CreatePost = ({ navigation }) => {
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [isKeyboard, setIsKeyboard] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setIsKeyboard(false);
      }}
    >
      <View style={styles.container}>
        <View style={{ ...styles.contentImg, marginTop: isKeyboard ? 0 : 32 }}>
          <View style={styles.image}></View>

          <TouchableOpacity activeOpacity={0.8} style={styles.cameraWrap}>
            <AntDesign name="camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>

        <Text style={styles.underText}>Загрузите фото</Text>
        <View style={styles.addPostForm}>
          <TextInput
            placeholder="Название..."
            value={title}
            onFocus={() => {
              setIsKeyboard(true);
            }}
            inputMode="text"
            style={{ ...styles.input, marginBottom: isKeyboard ? 8 : 32 }}
            onChangeText={(value) => setTitle(value)}
          />
          <TextInput
            placeholder="Местность..."
            inputMode="text"
            onFocus={() => {
              setIsKeyboard(true);
            }}
            onChangeText={(value) => setLocation(value)}
            style={{ ...styles.input, marginBottom: isKeyboard ? 8 : 32 }}
            value={location}
          />
          <TouchableOpacity activeOpacity={0.8} style={styles.addBtn}>
            <Text style={styles.addText}>Опубликовать</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.deleteBtn}>
            <Feather name="trash-2" size={24} color="#DADADA" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const TabCreate = createBottomTabNavigator();

export default function CreatePostsScreen({ navigation }) {
  return (
    <TabCreate.Navigator
      initialRouteName="Create"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { display: "none" },
      }}
    >
      <TabCreate.Screen
        options={{
          tabBarHideOnKeyboard: true,
          headerLeft: () => (
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("Публикации")}>
              <Feather name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            paddingLeft: 16,
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "500",
            fontSize: 17,
            color: "#212121",
            marginBottom: 5,
            marginRight: 15,
          },
          headerStyle: {
            borderTopWidth: 1,
            borderTopColor: "rgba(0, 0, 0, 0.2)",
          },
        }}
        name="Создать публикацию"
        component={CreatePost}
      />
    </TabCreate.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    flex: 1,
  },
  contentImg: {
    width: "100%",
    height: "30%",
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 8,
    position: "relative",
  },
  image: {
    top: 4,
    left: 3,
    position: "absolute",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  cameraWrap: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  underText: {
    marginTop: 10,
    fontSize: 16,
    color: "#BDBDBD",
    alignSelf: "flex-start",
  },
  addPostForm: {
    flex: 3,
  },
  input: {
    height: 50,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    lineHeight: 19,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 2,
  },
  addBtn: {
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: "#E8E8E8",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  addBtnActive: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
  },
  addText: {
    color: "#BDBDBD",
    fontSize: 16,
  },
  deleteBtn: {
    marginTop: 120,
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 132,
  },
});
