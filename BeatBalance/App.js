import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ConnectToTerraButton } from "@tryterra/terra-ui";

export default function App() {
  const terra = new Terra(process.env.DEV_ID, process.env.API_KEY);

  return (
    <View style={styles.container}>
      <ConnectToTerraButton
        onClick={async () => {
          const url = (
            await axios.get("http://localhost:3000/api/generateWidgetSession")
          ).data.url;
          window.location = url;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
