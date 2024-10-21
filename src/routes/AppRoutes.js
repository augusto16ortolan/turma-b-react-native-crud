import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../context/AuthContext";

import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Home from "../pages/app/Home";
import ProductList from "../pages/app/ProductList";
import ProductForm from "../pages/app/ProductForm";
import ProductBrandList from "../pages/app/ProductBrandList";
import BrandList from "../pages/app/BrandList";
import BrandForm from "../pages/app/BrandForm";

const AppStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "CRUD", headerTitleAlign: "center" }}
      />
      <AppStack.Screen
        name="ProductList"
        component={ProductList}
        options={{ headerTitle: "Produtos", headerTitleAlign: "center" }}
      />
      <AppStack.Screen
        name="ProductForm"
        component={ProductForm}
        options={{ headerTitle: "Produto", headerTitleAlign: "center" }}
      />
      <AppStack.Screen
        name="BrandList"
        component={BrandList}
        options={{ headerTitle: "Marcas", headerTitleAlign: "center" }}
      />
      <AppStack.Screen
        name="BrandForm"
        component={BrandForm}
        options={{ headerTitle: "Marca", headerTitleAlign: "center" }}
      />
      <AppStack.Screen
        name="ProductBrandList"
        component={ProductBrandList}
        options={{ headerTitle: "Marcas", headerTitleAlign: "center" }}
      />
    </AppStack.Navigator>
  );
};

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default function AppRoutes() {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
