import React from "react";
import { StyleSheet, View } from "react-native";
import GlassContainer from "../components/GlassContainer";
import Header from "../components/Header";
import Profile from "../components/Profile";
import ProgressCard, { ProgressCardProps } from "../components/ProgressCard";
import TextView, { textType } from "../components/TextView";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import AddBtn from "../components/AddBtn";
import InputPanel from "../components/InputPanel";
import Animated, { SlideOutLeft } from "react-native-reanimated";

export const Colors = {
  Default: "#fff",
  Calories: "#CF5414",
  Fats: "#FF872A",
  Proteins: "#D43434",
  Carbs: "#D2D2D2",
};

export default function Calories() {
  const progressCardProps: ProgressCardProps = {
    Title: "Today",
    value: "24.3 kc",
    color: Colors.Calories,
    height: 200,
    progressBars: [
      {
        color: Colors.Fats,
        goal: 200,
        value: 18,
        unit: "g",
        Icon: ({ color, style, iconSize }) => (
          <Feather
            name="droplet"
            size={iconSize}
            color={color}
            style={[style, { shadowColor: color }]}
          />
        ),
      },
      {
        color: Colors.Proteins,
        goal: 8,
        value: 3,
        unit: "g",
        Icon: ({ color, style, iconSize }) => (
          <FontAwesome5
            name="dna"
            size={iconSize}
            color={color}
            style={[style, { shadowColor: color }]}
          />
        ),
      },
      {
        color: Colors.Carbs,
        goal: 40,
        value: 30,
        unit: "g",
        Icon: ({ color, style, iconSize }) => (
          <FontAwesome5
            name="bread-slice"
            size={iconSize}
            color={color}
            style={[style, { shadowColor: color }]}
          />
        ),
      },
    ],
  };
  return (
    <View style={styles.container}>
      <View style={styles.Main}>
        <Profile />
        <Header title={"Calories"} value={"24.0 kc"} color={Colors.Calories} />
        <Animated.View style={styles.BottomCards} exiting>
          <ProgressCard {...progressCardProps} />
          <ProgressCard {...progressCardProps} />
        </Animated.View>
      </View>
      <InputPanel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 60,
  },
  Main: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 35,
    flex: 1,
  },
  BottomCards: {
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});
