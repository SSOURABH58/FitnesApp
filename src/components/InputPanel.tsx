import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import { PrimSizes } from "../assets/constents";
import AddBtn from "./AddBtn";
import GlassContainer from "./GlassContainer";
// import { Colors } from "../screens/Calories";

const InputPanel = () => {
  const [IsToggled, setIsToggled] = useState(false);
  const [ToggleKeyboard, setToggleKeyboard] = useState(false);
  const changeDamnationAn = useSharedValue(0);

  const InputBarAnStyle = useAnimatedStyle(() => ({
    // width: interpolate(
    //   changeDamnationAn.value,
    //   [0, 1],
    //   [PrimSizes.AddBtnSize, PrimSizes.KeyboardBtnSize]
    // ),
    height: interpolate(
      changeDamnationAn.value,
      [0, 1],
      [PrimSizes.AddBtnSize, PrimSizes.KeyboardBtnSize]
    ),
    marginRight: interpolate(changeDamnationAn.value, [0, 1], [20, 0]),
  }));

  const handlePress = () => {
    setIsToggled(!IsToggled);
  };

  useEffect(() => {
    if (IsToggled)
      changeDamnationAn.value = withDelay(
        200,
        withSpring(1, undefined, (isFinished: boolean) => {
          if (isFinished) runOnJS(setToggleKeyboard)(true);
        })
      );
    else changeDamnationAn.value = withSpring(0);
  }, [IsToggled]);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.Main}></View>
      <Animated.View style={[styles.InputBar, InputBarAnStyle]}>
        {ToggleKeyboard && (
          <Animated.View
            style={{
              width: PrimSizes.screenWidth - PrimSizes.KeyboardBtnSize - 30,
              marginRight: 5,
            }}
          >
            <GlassContainer>
              <TextInput />
            </GlassContainer>
          </Animated.View>
        )}
        <AddBtn
          color={"#CF5414"}
          style={{}}
          onPress={handlePress}
          IsToggled={IsToggled}
          // popTextInput={popTextInput}
        />
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

export default InputPanel;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  Main: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  InputBar: {
    width: "100%",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "flex-end",
    // backgroundColor: "#fff",
  },
});
