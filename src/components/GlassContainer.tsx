// import { BlurView } from 'expo-blur'
import { BlurView, VibrancyView } from "@react-native-community/blur";
import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  withDelay,
} from "react-native-reanimated";

const ReanimatedPressable = Animated.createAnimatedComponent(Pressable);

type GlassContainerProps = {
  style?: ViewStyle;
  borderRadius?: number;
  styleMain?: ViewStyle;
  pressColor?: string;
  animatedStyle?: Animated.AnimateStyle<ViewStyle>[];
  animatedMainStyle?: Animated.AnimateStyle<ViewStyle>[];
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  height?: number;
  width?: number;
};

const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  style,
  borderRadius,
  styleMain,
  pressColor = "#ffffff1A",
  animatedMainStyle,
  animatedStyle,
  onPress,
  onPressIn,
  onPressOut,
  height,
  width,
}) => {
  const pressScale = 1.1;
  const pressAnimations = useSharedValue(1);

  const animatedPressStyle = useAnimatedStyle(
    () => ({
      transform: [{ scale: pressAnimations.value }],
    }),
    []
  );
  const animatedColorStyle = useAnimatedStyle(
    () => ({
      borderColor: interpolateColor(
        pressAnimations.value,
        [1, 1.1],
        ["#ffffff1A", pressColor],
        "RGB"
      ),
    }),
    []
  );

  return (
    <ReanimatedPressable
      style={[
        styles.GlassContainer,
        styleMain,
        borderRadius ? { borderRadius } : {},
        height ? { height } : {},
        width ? { width } : {},
        ...(animatedMainStyle ? animatedMainStyle : []),
      ]}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      // entering
    >
      <BlurView style={styles.absolute} blurType="light" blurAmount={18} />
      <Animated.View
        style={[
          styles.GlassBorder,
          style,
          borderRadius ? { borderRadius: borderRadius } : {},
          height ? { height } : {},
          width ? { width } : {},
          // ...(animatedMainStyle ? animatedMainStyle : []),
          ...(animatedStyle ? animatedStyle : []),
        ]}
      >
        {children}
      </Animated.View>
    </ReanimatedPressable>
  );
};

export default GlassContainer;

const styles = StyleSheet.create({
  GlassContainer: {
    borderRadius: 15,
    position: "relative",
    overflow: "hidden",
  },
  GlassBorder: {
    borderRadius: 15,
    borderColor: "#ffffff1A",
    borderWidth: 3,
    // width: "100%",
    // height: "100%",
    // flex: 1,
    padding: 8,
    paddingTop: 5,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 1,
    backgroundColor: "#00000066",
  },
});
