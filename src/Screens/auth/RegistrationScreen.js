<script src="http://localhost:8097"></script>;

import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Text,
  TouchableOpacity,
} from "react-native";

const RegistrationScreen = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginInputHandler = (value) => setLogin(value);
  const emailInputHandler = (value) => setEmail(value);
  const passwordInputHandler = (value) => setPassword(value);

  const onRegister = () => {
    if (!login || !email || !password) {
      Alert.alert("Fill in all the fields");
      return;
    }
    Alert.alert("Credentials", `${login}, ${email}, ${password}`);
    console.log(`login: ${login}, name: ${email}, password: ${password}`);

    setLogin("");
    setEmail("");
    setPassword("");
    navigation.navigate("Home", {
      screen: "PostsScreen",
    });
  };

  const showPassword = () => {};

  return (
    <View style={styles.mainWrapper}>
      <ImageBackground
        source={require("../../../assets/images/PhotoBG.jpg")}
        style={styles.bgImage}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboard}
        >
          <View style={styles.container}>
            <View style={styles.wrapper}>
              <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                <ImageBackground
                  source={require("../../../assets/images/add.png")}
                  style={styles.image}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Регистрация</Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Логин"
                inputMode="text"
                value={login}
                onChangeText={loginInputHandler}
              />
              <TextInput
                style={styles.input_margin}
                placeholder="Адрес электронной почты"
                inputMode="email"
                value={email}
                onChangeText={emailInputHandler}
              />
              <TextInput
                style={styles.input_margin}
                secureTextEntry={true}
                placeholder="Пароль"
                value={password}
                onChangeText={passwordInputHandler}
              />
            </View>

            <TouchableOpacity activeOpacity={0.8} style={styles.span}>
              <Text style={styles.spanText}>Показать</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onRegister}>
              <Text style={styles.text}>Зарегистрироваться</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Login")}
              style={styles.linkStyle}
            >
              <Text style={styles.aside}>Уже есть аккаунт? Войти</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    alignItems: "center",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    width: "100%",
  },
  wrapper: {
    marginTop: -60,
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  keyboard: {
    justifyContent: "space-around",
  },
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  addBtn: {
    marginTop: "65%",
    left: "90%",
    height: 25,
    width: 25,
    pointerEvents: "auto",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
    width: 343,
    color: "#212121",
    padding: 16,
    fontSize: 16,
    lineHeight: 19,
  },
  input_margin: {
    marginTop: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
    width: 343,
    color: "#212121",
    padding: 16,
    fontSize: 16,
    lineHeight: 19,
  },
  span: {
    top: -34,
    left: 130,
  },
  spanText: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
  },
  button: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: 343,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 18.75,
  },
  title: {
    color: "#212121",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    fontWeight: "500",
    marginTop: 32,
    marginBottom: 32,
  },
  linkStyle: {
    marginTop: 16,
    marginBottom: 46,
  },
  aside: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
