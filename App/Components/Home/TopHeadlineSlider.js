import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import GlobalApi from "../../Services/GlobalApi";
import Color from "../../Shared/Color";

export default function TopHeadlineSlider() {
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
    <View
      style={{
        marginTop: 10,
      }}
    >
      <FlatList
        data={newsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              width: Dimensions.get("screen").width * 0.77,
              marginEnd: 15,
            }}
          >
            <Image
              source={{
                uri: item.urlToImage,
              }}
              style={{ height: 200, borderRadius: 10 }}
            />
            <Text
              style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}
              numberOfLines={3}
            >
              {item.title}
            </Text>
            <Text style={{ marginTop: 5, color: Color.primary }}>
              {item?.source?.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
