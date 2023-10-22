// NewScreen.js
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Register with Spotify to start balancing your beats
      </Text>
      <Image source={require("../../assets/Logo.png")} style={styles.logo} />
      <TouchableOpacity style={styles.login}>
        <Text style={styles.loginText}>Connect</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 34,
    color: "#432C81",
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 150,
  },
  logo: {
    marginTop: 50,
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginBottom: -25,
  },
  login: {
    width: 250,
    height: 60,
    borderRadius: 20,
    backgroundColor: "#1AB26B",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontSize: 25,
    color: "white",
  },
});

export default Register;
