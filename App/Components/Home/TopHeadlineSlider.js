import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Color from "../../Shared/Color";
import { useNavigation } from "@react-navigation/native";

export default function TopHeadlineSlider({ newsList }) {
  const navigation = useNavigation();
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
            onPress={() => navigation.navigate("readNews", { news: item })}
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
