import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";

export default function ReadNews() {
  const news = useRoute().params.news;
  return (
    <View>
      <Text>Read news</Text>
    </View>
  );
}
