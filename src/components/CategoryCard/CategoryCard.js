import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./CategoryCard.style";

const CategoryCard = ({onPress, item}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => onPress(item.idCategory, item.strCategory)}
    >
      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image
            source={{ uri: item.strCategoryThumb }}
            style={styles.image}
          />
        </View>
        <Text style={styles.text}>{item.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;
