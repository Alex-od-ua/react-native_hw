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

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailInputHandler = (value) => setEmail(value);
  const passwordInputHandler = (value) => setPassword(value);

  const onLogin = () => {
    if (!email || !password) {
      Alert.alert("Fill in all the fields");
      return;
    }
    Alert.alert("Credentials", `${email} + ${password}`);
    console.log(`email: ${email}, password: ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={require("../../assets/images/PhotoBG.jpg")} style={styles.image}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.mainBox}
          >
            <View style={styles.wrapper}>
              <Text style={styles.title}>Войти</Text>
              <TextInput
                style={styles.input}
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

              <TouchableOpacity activeOpacity={0.8} style={styles.show_password}>
                <Text style={styles.show_password_text}>Показать</Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onLogin}>
                <Text style={styles.buttonText}>Войти</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.aside}>Нет аккаунта? Зарегистрироваться</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    width: "100%",
  },

  mainBox: {
    justifyContent: "space-around",
  },

  wrapper: {
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },

  title: {
    fontStyle: "normal",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.16,
    color: "#212121",
    textAlign: "center",
    marginTop: 32,
    marginBottom: 33,
  },

  input: {
    height: 50,
    marginHorizontal: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    marginBottom: 10,

    fontSize: 16,
  },

  input_margin: {
    marginTop: 16,
    height: 50,
    marginHorizontal: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    marginBottom: 10,

    fontSize: 16,
  },

  show_password: {
    top: -45,
    left: 290,
  },

  show_password_text: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
  },

  button: {
    marginTop: 43,
    marginHorizontal: 16,
    backgroundColor: "#FF6C00",
    height: 61,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontStyle: "normal",
    lineHeight: 19,
    color: "#FFFFFF",
  },
  aside: {
    fontStyle: "normal",
    lineHeight: 19,
    marginTop: 16,
    marginBottom: 46,
    textAlign: "center",
    color: "#1B4371",
  },
});
