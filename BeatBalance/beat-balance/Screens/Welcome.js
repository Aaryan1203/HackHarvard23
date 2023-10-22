import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={styles.baseStyle}>
      <Text style={styles.welcome}>
        Welcome to
      </Text>
      <Text style={styles.beatBalance}>
        Beat Balance
      </Text>
      <Image 
        source={require("../../assets/BBlogo.png")}
        style={styles.logo} 
      />
      <Text style={styles.discovering}>
        Discovering the harmony of mood, lifestyle, {"\n"} and music
      </Text>
      <Text style={styles.wereHere}>
        We're here to help you balance
      </Text>
      <TouchableOpacity>
        <Image
          source={require("../../assets/getStarted.png")}
          style={styles.getStarted}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    color: "#432C81",
    textAlign: "center",
    fontSize: 20,
    marginTop: 100,
    fontWeight: "bold",
  },
  beatBalance: {
    color: "#432C81",
    textAlign: "center",
    fontSize: 32,
    marginTop: 10,
    fontWeight: "bold",
  },
  discovering: {
    color: "#432C81",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "semibold",
    marginTop: 50,
  },
  wereHere: {
    color: "#432C81",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 60,
  },
  logo: {
    width: 273,
    height: 240,
    marginTop: 70,
  },
  getStarted: {
    width: 159,
    height: 53,
    marginTop: 60,
  },
  baseStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WelcomeScreen;
