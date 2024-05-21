import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Color from "../../Shared/Color";

export default function CategoryTextSlider() {
  const [active, setActive] = useState(1);
  const CategoryList = [
    {
      id: 1,
      name: "Latest",
    },

    {
      id: 2,
      name: "World",
    },

    {
      id: 3,
      name: "Business",
    },

    {
      id: 4,
      name: "Life",
    },

    {
      id: 5,
      name: "Movie",
    },
    {
      id: 6,
      name: "Sports",
    },
  ];

  const onCategoryClick = (id) => {
    setActive(id);
  };

  return (
    <View
      style={{
        marginTop: 10,
        marginEnd: 20,
      }}
    >
      <FlatList
        data={CategoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onCategoryClick(item.id)}>
            <Text
              style={
                item.id == active ? styles.selectText : styles.unselectText
              }
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  unselectText: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: Color.gray,
  },
  selectText: {
    margin: 10,
    fontSize: 21,
    fontWeight: "bold",
    color: Color.primary,
  },
});
