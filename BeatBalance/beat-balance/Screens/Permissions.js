// NewScreen.js
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Permissions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/MainLogo.png")}
        style={styles.mainLogo}
      />
      <Text style={styles.text}>
        Beat Balance tracks your heart rate to provide personalized music
        recommendations
      </Text>
      <View style={styles.permissionsContainer}>
        <Text style={styles.permissionText}>Permission Request</Text>
        <Text style={styles.permissionParagraph}>
          Permission to track your heart rate will solely be used for better
          usage of Beat Balance and providing personalized music
          recommendations.
        </Text>
        <TouchableOpacity
          style={styles.allowButton}
          onPress={() => navigation.navigate("Permissions")}
        >
          <Text style={styles.allowText}>Allow</Text>
        </TouchableOpacity>
      </View>
      <Image source={require("../../assets/music.png")} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  mainLogo: {
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 50,
  },
  text: {
    fontSize: 30,
    color: "#432C81",
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 40,
    width: 350,
  },
  permissionsContainer: {
    marginTop: 40,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "#432C81",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  permissionText: {
    fontSize: 24,
    color: "#432C81",
  },
  permissionParagraph: {
    width: 150,
    marginTop: 15,
    textAlign: "center",
    color: "#432C81",
    fontSize: 16,
  },
  allowButton: {
    backgroundColor: "#432C81",
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    width: 130,
    alignItems: "center",
  },
  allowText: {
    color: "white",
    fontSize: 15,
  },
  logo: {
    marginTop: 20,
  },
});

export default Permissions;
