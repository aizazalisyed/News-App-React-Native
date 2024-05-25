import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import CategoryTextSlider from "../Components/Home/CategoryTextSlider";
import { StyleSheet } from "react-native";
import Color from "../Shared/Color";
import { Ionicons } from "@expo/vector-icons";
import TopHeadlineSlider from "../Components/Home/TopHeadlineSlider";
import HeadlineList from "../Components/Home/HeadlineList";
import GlobalApi from "../Services/GlobalApi";

export default function Home() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    getTopHeadline();
  }, []);

  const getTopHeadline = async () => {
    try {
      const result = await GlobalApi.getTopHeadline();
      if (result && result.articles) {
        setNewsList(result.articles);
      } else {
        console.error("Invalid data format", result);
      }
    } catch (error) {
      console.error("Error fetching top headlines:", error);
    }
  };

  return (
    <ScrollView>
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
      <TopHeadlineSlider newsList={newsList} />
      <HeadlineList newsList={newsList} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appName: {
    fontSize: 25,
    fontWeight: "bold",
    color: Color.primary,
  },
});
