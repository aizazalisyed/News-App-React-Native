import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Image,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Color from "../Shared/Color";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

export default function ReadNews() {
  const news = useRoute().params.news;
  const navigation = useNavigation();
  const shareNews = () => {
    Share.share({
      message: news.title + "\nRead More" + news.description,
    });
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 10,
          marginBottom: 20,
          justifyContent: "space-between",
          marginEnd: 30,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            shareNews();
          }}
        >
          <Ionicons name="share-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: news.urlToImage }}
        style={{
          height: 300,
          width: "300",
          marginEnd: 30,
          borderRadius: 20,
        }}
      />
      <Text
        style={{
          marginTop: 10,
          fontWeight: "bold",
          fontSize: 20,
          marginEnd: 30,
        }}
      >
        {news.title}
      </Text>
      <Text
        style={{
          marginTop: 10,
          color: Color.primary,
          fontSize: 16,
          marginEnd: 30,
        }}
      >
        {news.source.name}
      </Text>
      <Text
        Text
        style={{ marginTop: 10, fontSize: 18, marginEnd: 30, lineHeight: 30 }}
      >
        {news.description}
      </Text>

      <TouchableOpacity
        onPress={() => {
          WebBrowser.openBrowserAsync(news.url);
        }}
      >
        <Text
          style={{
            marginTop: 10,
            color: Color.primary,
            fontSize: 16,
            marginEnd: 30,
            fontWeight: "bold",
          }}
        >
          Read More
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
