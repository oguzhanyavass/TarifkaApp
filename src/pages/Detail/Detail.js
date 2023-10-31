import React, { useCallback } from "react";
import { SafeAreaView, View, Text, ScrollView, Image } from "react-native";
import styles from "./Detail.style";
import Button from "../../components/Button";
import config from "../../../config";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import useFetch from "../../components/hooks/useFetch";
import openYoutubeURL from "./openYoutubeURL";

const Detail = ({ route }) => {
  const { mealId, mealName } = route.params;

  const { loading, data, error } = useFetch(
    config.API_URL + config.LOOKUP_MEAL_BY_ID + mealId
  );

  const handlePressWatchYoutube = useCallback(openYoutubeURL, []);

  if (loading) {
    return <Loading />;
  }

  if (error || !data.meals) {
    return <Error />;
  }

  if (data.meals) {
    const meal = data.meals[0];
    const ingredientIds = [];
    for (let i = 1; i <= 20; i++) {
      if (meal["strIngredient" + i]) {
        ingredientIds.push(i.toString());
      }
    }

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
          <View style={styles.title_container}>
            <Text style={styles.title}>{meal.strMeal}</Text>
            <Text style={styles.subtitle}>{meal.strArea}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.instruction_container}>
            <Text style={styles.instruction_title}>Ingredients:</Text>
            {ingredientIds.map((id) => (
              <Text style={styles.ingredient} key={id}>
                - {meal["strMeasure" + id]} of {meal["strIngredient" + id]}
              </Text>
            ))}
            <Text style={[styles.instruction_title, { marginTop: 8 }]}>
              Instructions:
            </Text>
            <Text style={styles.instructions}>{meal.strInstructions}</Text>
            <Button
              text="Watch on Youtube"
              onPress={() => handlePressWatchYoutube(meal.strYoutube, false)}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default Detail;
