import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
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
  withTiming,
} from "react-native-reanimated";
import { PrimSizes } from "../assets/constents";
import AddBtn from "./AddBtn";
import GlassContainer from "./GlassContainer";
// import { Colors } from "../screens/Calories";

const InputPanel = () => {
  const [IsToggled, setIsToggled] = useState(false);
  const [ToggleKeyboard, setToggleKeyboard] = useState(false);
  const changeDamnationAn = useSharedValue(0);
  const InputBoxAn = useSharedValue(0);

  const InputBarAnStyle = useAnimatedStyle(() => ({
    height: interpolate(
      changeDamnationAn.value,
      [0, 1],
      [PrimSizes.AddBtnSize, PrimSizes.KeyboardBtnSize]
    ),
    marginRight: interpolate(changeDamnationAn.value, [0, 1], [20, 0]),
  }));
  const InputBoxAnStyle = useAnimatedStyle(() => ({
    width: interpolate(
      InputBoxAn.value,
      [0, 1],
      [0, PrimSizes.screenWidth - PrimSizes.KeyboardBtnSize - 30]
    ),
    marginRight: interpolate(InputBoxAn.value, [0, 1], [0, 5]),
    opacity: InputBoxAn.value,
  }));

  const handlePress = () => {
    if (!IsToggled) setIsToggled(true);
    else setToggleKeyboard(false);
  };

  useEffect(() => {
    if (ToggleKeyboard) InputBoxAn.value = withTiming(1, { duration: 800 });
    else if (IsToggled)
      InputBoxAn.value = withSpring(0, undefined, (isFinished: boolean) => {
        if (isFinished) runOnJS(setIsToggled)(false);
      });
  }, [ToggleKeyboard]);

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
    <KeyboardAvoidingView
      style={styles.container}
      // style={{ flex: 1 }}
      behavior={"position"}
    >
      <Animated.View style={[styles.InputBar, InputBarAnStyle]}>
        {ToggleKeyboard && (
          <GlassContainer animatedMainStyle={[InputBoxAnStyle]}>
            <TextInput />
          </GlassContainer>
        )}
        <AddBtn
          color={"#CF5414"}
          style={{}}
          onPress={handlePress}
          IsToggled={IsToggled}
        />
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

export default InputPanel;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: PrimSizes.windowHeight,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
    // backgroundColor: "#fff",
    paddingBottom: 10,
  },
  Main: {
    // flex: 1,
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
