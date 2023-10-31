import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./MealItem.style";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const MealItem = ({ item, onPress }) => {
  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={() => onPress(item.idMeal, item.strMeal)}
    >
      <Image source={{ uri: item.strMealThumb }} style={styles.image} />
      <View style={styles.title_container} />
      <Text style={styles.title}>{item.strMeal}</Text>
    </TouchableWithoutFeedback>
  );
};

export default MealItem;
