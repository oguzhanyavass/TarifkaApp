import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error";
import useFetch from "../../components/hooks/useFetch";
import styles from "./Categories.style";
import config from "../../../config";

const Categories = ({ navigation }) => {
  const { error, loading, data } = useFetch(
    config.API_URL + config.LIST_CATEGORIES
  );

  const handleOnPressCategory = (categoryId, categoryName) => {
    navigation.navigate("MealsPage", { categoryName: categoryName });
  };

  const renderCategory = ({ item }) => (
    <CategoryCard item={item} onPress={handleOnPressCategory} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data.categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.idCategory.toString()}
      />
    </SafeAreaView>
  );
};

export default Categories;
