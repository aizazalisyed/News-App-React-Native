import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import CategoryTextSlider from "../Components/Home/CategoryTextSlider";
import { StyleSheet } from "react-native";
import Color from "../Shared/Color";
import { Ionicons } from "@expo/vector-icons";
import TopHeadlineSlider from "../Components/Home/TopHeadlineSlider";
import HeadlineList from "../Components/Home/HeadlineList";
import GlobalApi from "../Services/GlobalApi";

export default function Home() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getByCategory("latest");
  }, []);

  const getByCategory = async (category) => {
    try {
      setLoading(true);
      const result = await GlobalApi.getByCategory(category);
      setLoading(false);
      console.log("API Result:", result); // Log the entire API response

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
    <ScrollView style={{ backgroundColor: "#fff" }}>
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
      <CategoryTextSlider
        selectCategory={(category) => getByCategory(category)}
      />
      {loading ? (
        <ActivityIndicator
          size={"large"}
          color={Color.primary}
          style={{ marginTop: Dimensions.get("screen").height * 0.4 }}
        />
      ) : (
        <View>
          <TopHeadlineSlider newsList={newsList} />
          <HeadlineList newsList={newsList} />
        </View>
      )}
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
