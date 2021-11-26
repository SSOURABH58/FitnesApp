import React, { useEffect } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import TextView, { textType } from "./TextView";
import Animated, {
  divide,
  Easing,
  interpolate,
  multiply,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { round } from "react-native-redash";

export type progressBarProps = {
  color: string;
  goal: number;
  value: number;
  unit: string;
  height?: number;
  iconSize?: number;
  minWidth?: number;
  Icon: React.FC<{ color: string; style: ViewStyle; iconSize: number }>;
};
const ProgressBar: React.FC<progressBarProps> = ({
  Icon,
  color,
  goal,
  value,
  unit,
  height = 200,
  iconSize = 20,
  minWidth,
}) => {
  const animatedVal = useSharedValue(1);
  // const ReVal = useDerivedValue(() => ` ${round(animatedVal.value)}${unit} `);
  const animatedFillStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animatedVal.value,
            [0, goal],
            [height / 2, 0]
          ),
        },
        { scaleY: interpolate(animatedVal.value, [0, goal], [0, 1]) },
      ],
    };
  });
  const animatedFillCapTop = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animatedVal.value,
            [0, goal],
            [height - 2.5, -2.5]
          ),
        },
      ],
    };
  });

  useEffect(() => {
    animatedVal.value = withTiming(value, {
      duration: 800,
      easing: Easing.ease,
    });
  }, [value]);

  useEffect(() => {}, [value]);
  return (
    <View style={[styles.container, { minWidth: minWidth }]}>
      <TextView type={textType.Title} style={{ fontSize: 16 }}>
        {`${goal}${unit}`}
      </TextView>
      <View style={[styles.Track, { height: height }]}>
        <Animated.View
          style={[
            styles.FillCap,
            animatedFillCapTop,
            {
              backgroundColor: color,
              shadowColor: color,
            },
          ]}
        />
        <View
          style={[
            styles.FillCap,
            {
              translateY: height - 2.5,
              backgroundColor: color,
              shadowColor: color,
            },
          ]}
        />
        <Animated.View
          style={[
            styles.FillTrack,
            {
              backgroundColor: color,
              shadowColor: color,
              height: "100%",
            },
            animatedFillStyles,
          ]}
        />
      </View>
      <Icon color={color} style={styles.Icon} iconSize={iconSize} />
      <TextView
        type={textType.SubTitle}
        color={color}
        opacity={1}
        ReVal={useDerivedValue(() => ` ${round(animatedVal.value)}${unit} `)}
      />
      {/* <TextView type={textType.SubTitle} color={color} opacity={1}>
        {` ${value}${unit} `}
      </TextView> */}
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    // minWidth: 50,
    // marginHorizontal: 3,
  },
  Track: {
    // flex: 1,
    height: 120,
    width: 5,
    backgroundColor: "#ffffff33",
    borderRadius: 2.5,
    // justifyContent: "center",
    alignItems: "center",

    // overflow: "hidden",
    // zIndex: 9999,
  },
  FillTrack: {
    width: 5,
    borderRadius: 2.5,
    // height: 50,
    justifyContent: "space-between",
    alignItems: "center",

    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    elevation: 20,
  },
  FillCap: {
    width: 5,
    borderRadius: 2.5,
    height: 5,
    position: "absolute",
    // zIndex: 999999,
  },
  Icon: {
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    elevation: 20,
    margin: 5,
  },
});
