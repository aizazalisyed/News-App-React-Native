import React from "react";
import { View, Text } from "react-native";
import CategoryTextSlider from "../Components/Home/CategoryTextSlider";
import { StyleSheet } from "react-native";
import Color from "../Shared/Color";
import { Ionicons } from "@expo/vector-icons";
import TopHeadlineSlider from "../Components/Home/TopHeadlineSlider";

export default function Home() {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginEnd: 20,
          alignItems: "center",
        }}
      >
        <Text style={styles.appName}>News</Text>
        <Ionicons name="notifications-outline" size={25} color="black" />
      </View>
      <CategoryTextSlider />
      <TopHeadlineSlider />
    </View>
  );
}

const styles = StyleSheet.create({
  appName: {
    fontSize: 25,
    fontWeight: "bold",
    color: Color.primary,
  },
});
