import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Color from "../../Shared/Color";

export default function HeadlineList({ newsList }) {
  return (
    <View>
      <FlatList
        data={newsList}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              style={{ marginTop: 15, display: "flex", flexDirection: "row" }}
            >
              <Image
                source={{ uri: item.urlToImage }}
                style={{ width: 130, height: 130, borderRadius: 10 }}
              />
              <View style={{ marginRight: 135, marginLeft: 10 }}>
                <Text
                  style={{ fontSize: 16, fontWeight: "bold" }}
                  numberOfLines={4}
                >
                  {item.title}
                </Text>
                <Text style={{ color: Color.primary, marginTop: 5 }}>
                  {item?.source?.name}
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                height: 1,
                backgroundColor: Color.gray,
                marginTop: 10,
                marginEnd: 30,
              }}
            ></View>
          </View>
        )}
      />
    </View>
  );
}
