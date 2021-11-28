import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import GlassContainer from "./GlassContainer";
import { Ionicons } from "@expo/vector-icons";
import Reanimated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { PrimeColors } from "../assets/constents";

type AddBtnProps = {
  color: string;
  style?: ViewStyle;
  onPress?: () => void;
  IsToggled?: boolean;
  popTextInput?: () => void;
  // popTextInput?: (isFinished: boolean, value: number) => void;
};

const AddBtnSize = 70;
const KeyboardBtnSize = 50;

const ReanimatedIonicons = Reanimated.createAnimatedComponent(Ionicons);

const AddBtn: React.FC<AddBtnProps> = ({
  color,
  style,
  onPress,
  IsToggled,
  popTextInput,
}) => {
  // const [IsToggled, setIsToggled] = useState(false);
  const transformAn = useSharedValue(0);
  const addContAnStyle = useAnimatedStyle(() => ({
    width: interpolate(
      transformAn.value,
      [0, 1],
      [AddBtnSize, KeyboardBtnSize]
    ),
    height: interpolate(
      transformAn.value,
      [0, 1],
      [AddBtnSize, KeyboardBtnSize]
    ),
    borderRadius: interpolate(transformAn.value, [0, 1], [35, 15]),
  }));
  const addBorderAnStyle = useAnimatedStyle(() => ({
    width: interpolate(
      transformAn.value,
      [0, 1],
      [AddBtnSize, KeyboardBtnSize]
    ),
    height: interpolate(
      transformAn.value,
      [0, 1],
      [AddBtnSize, KeyboardBtnSize]
    ),
    borderRadius: interpolate(transformAn.value, [0, 1], [35, 15]),
    borderColor: interpolateColor(
      transformAn.value,
      [0, 0.5, 1],
      [PrimeColors.glassBorder, color, PrimeColors.glassBorder]
    ),
  }));
  const iconAnStyles = (isColored: boolean) =>
    useAnimatedStyle(() => ({
      opacity: isColored
        ? interpolate(transformAn.value, [0, 1], [1, 0])
        : transformAn.value,
    }));

  useEffect(() => {
    if (IsToggled) transformAn.value = withSpring(1);
    else transformAn.value = withSpring(0);
  }, [IsToggled]);
  return (
    <GlassContainer
      style={styles.container}
      styleMain={style}
      animatedMainStyle={[addContAnStyle]}
      animatedStyle={[addBorderAnStyle]}
      borderRadius={35}
      pressColor={color}
      onPress={onPress}
    >
      <View style={[styles.IconsCont, { width: 43, height: 43 }]}>
        <ReanimatedIonicons
          name="ios-add"
          size={43}
          color={color}
          style={[styles.Icon, iconAnStyles(true)]}
        />
        <ReanimatedIonicons
          name="ios-add"
          size={35}
          color={PrimeColors.defaultIcon}
          style={[styles.Icon, iconAnStyles(false), { top: 1, left: 4.5 }]}
        />
      </View>
    </GlassContainer>
  );
};

export default AddBtn;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    // alignSelf: "flex-end",
    // paddingBottom: 5,
  },
  IconsCont: {
    position: "relative",
    // backgroundColor: "#fff",
  },
  Icon: {
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    elevation: 20,
    position: "absolute",
    top: -3,
    left: 1,
  },
});
