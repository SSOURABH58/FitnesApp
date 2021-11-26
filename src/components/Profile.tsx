import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Profile() {
  return (
    <View style={styles.container}>
      <FontAwesome name="user" size={20} color="#ffffff33" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    borderColor: "#ffffff1A",
    borderWidth: 3,
    opacity: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    height: 50,
    width: 50,
  },
});
