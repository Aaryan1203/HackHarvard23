// NewScreen.js
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";


const PersonalInfo = () => {
  const navigation = useNavigation();
  const handleNext = () => {
    navigation.navigate("Permissions");
  };
  return (
    <View style={styles.container}>
      <Image source={require("../Images/logo.png")} style={{alignSelf: "flex-start", marginLeft: 10}}/>
      <Image source={require("../Images/profile.png")} style={{marginTop: 30}}/>
      <Text style={styles.header}>Personal Info</Text>
      <View style={styles.searchWrapper}>
        <TextInput placeholder="Name" style={styles.searchInput} />
        <TextInput style={styles.searchInput} placeholder="Age" />
      </View>
      <TouchableOpacity
        onPress={handleNext}
        style={{ alignSelf: "flex-end", right: 40, marginTop: 50, marginBottom: 70 }}
      >
        <Image source={require("../Images/nextBtn.png")} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  searchWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    // fontFamily: FONT.regular,
    width: "80%", // Ensure the input takes up the full width
    height: 50, // Adjust the height as needed
    paddingHorizontal: SIZES.medium,
    marginVertical: 10, // Add vertical margin for spacing
    borderRadius: 20, // Add border radius for a rounded appearance
    borderWidth: 3, // Add a border for better visibility
    borderColor: COLORS.teal, // Customize the border color
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: COLORS.purple,
    padding: '8%',
  },
});

export default PersonalInfo;
