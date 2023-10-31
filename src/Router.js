import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Detail from "./pages/Detail";
import Categories from "./pages/Categories";
import Meals from "./pages/Meals";

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="CategoriesPage" 
          component={Categories} 
          options={{
            title: 'Categories',
            headerTitleAlign: 'center',
            headerTintColor: '#ff8800',
          }}
        />
        <Stack.Screen
          name="MealsPage"
          component={Meals}
          options={{
            headerTitleAlign: 'center', 
            headerTintColor: '#ff8800',
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            headerTitleAlign: 'center', 
            headerTintColor: '#ff8800',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
