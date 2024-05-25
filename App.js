import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./App/Screen/Home";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./App/Navigations/HomeNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <HomeNavigation />
      </NavigationContainer>
      {/* <Home /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingStart: 30,
  },
});
