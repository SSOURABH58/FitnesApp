import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Calories from "./Calories";

const screenWidth = Dimensions.get("screen").width;
const screenHight = Dimensions.get("screen").height;

export default function Home() {
  return (
    <ScrollView style={[styles.fullScreen]} snapToInterval={200}>
      <ImageBackground
        source={require("./../assets/workOutBg.jpeg")}
        resizeMethod={"scale"}
        style={styles.imageBg}
      >
        <View style={[styles.fullScreen, { backgroundColor: "#000000CC" }]}>
          <Calories />
          {/* <Calories /> */}
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
    justifyContent: "center",
    width: screenWidth,
    height: screenHight,
  },
  fullScreen: {
    width: screenWidth,
    height: screenHight,
  },
});
