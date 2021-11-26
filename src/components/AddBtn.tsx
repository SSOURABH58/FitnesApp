import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GlassContainer from "./GlassContainer";
import { Ionicons } from "@expo/vector-icons";

const AddBtn: React.FC<{ color: string }> = ({ color }) => {
  return (
    <GlassContainer
      style={styles.container}
      styleMain={styles.main}
      borderRadius={35}
      pressColor={color}
    >
      <Ionicons
        name="ios-add"
        size={43}
        color={color}
        style={[styles.Icon, { shadowColor: color }]}
      />
    </GlassContainer>
  );
};

export default AddBtn;

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    paddingBottom: 5,
  },
  main: {
    position: "absolute",
    bottom: 100,
    right: 30,
  },
  Icon: {
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    elevation: 20,
    margin: 5,
    marginRight: 2,
  },
});
