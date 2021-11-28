import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Home from "./src/screens/Home";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import * as NavigationBar from "expo-navigation-bar";
import {
  setStatusBarBackgroundColor,
  setStatusBarHidden,
} from "expo-status-bar";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  useEffect(() => {
    NavigationBar.setPositionAsync("absolute");
    NavigationBar.setVisibilityAsync("visible");
    NavigationBar.setBehaviorAsync("overlay-swipe");
    NavigationBar.setBackgroundColorAsync("#0000001A"); // `rgba(255,255,255,0.3)`
    // setStatusBarHidden(false, "none");
    setStatusBarBackgroundColor("#0000001A", true);
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading..</Text>;
  } else {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
