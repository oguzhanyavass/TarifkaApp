import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import config from "../../../config";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import MealItem from "../../components/MealItem";
import useFetch from "../../components/hooks/useFetch";
import styles from "./Meals.style";

const Meals = ({ navigation, route }) => {
  const { categoryName } = route.params;

  const { loading, data, error } = useFetch(
    config.API_URL + config.FILTER_BY_CATEGORY + categoryName
  );

  const handleOnPressMeal = (mealId, mealName) => {
    navigation.navigate("DetailPage", { mealId, mealName });
  };

  const renderMeal = ({ item }) => (
    <MealItem item={item} onPress={handleOnPressMeal} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error || !data.meals) {
    return <Error />;
  }

  if (data.meals) {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.meals}
          renderItem={renderMeal}
          keyExtractor={(item) => item.idMeal.toString()}
        />
      </SafeAreaView>
    );
  }
};

export default Meals;
