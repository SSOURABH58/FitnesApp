import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import Animated from "react-native-reanimated";
import { ReText } from "react-native-redash";

type TextViewProps = {
  type?: textType;
  color?: string;
  style?: StyleProp<TextStyle>;
  opacity?: number;
  sb?: boolean;
  paddH?: number;
  ReVal?: Animated.SharedValue<string>;
};

export enum textType {
  Header = "Header",
  Title = "Title",
  SubTitle = "SubTitle",
  Value = "Value",
}

const TextView: React.FC<TextViewProps> = ({
  children,
  type = textType.Value,
  color = "#fff",
  style = {},
  opacity,
  sb,
  paddH,
  ReVal,
}) => {
  const TextType = (type: textType) => {
    switch (type) {
      case textType.Header:
        return styles.Header;
      case textType.Title:
        return styles.Title;
      case textType.SubTitle:
        return styles.SubTitle;
      case textType.Value:
        return styles.Value;

      default:
        break;
    }
  };

  return ReVal ? (
    <ReText
      text={ReVal}
      style={[
        { fontFamily: !sb ? "Poppins_500Medium" : "Poppins_600SemiBold" },
        TextType(type),
        {
          color: color,
          textShadowColor: color,
        },
        opacity ? { opacity: opacity, shadowOpacity: opacity } : {},
        style,
        paddH ? { paddingHorizontal: paddH } : {},
      ]}
    />
  ) : (
    <Text
      style={[
        { fontFamily: !sb ? "Poppins_500Medium" : "Poppins_600SemiBold" },
        TextType(type),
        {
          color: color,
          textShadowColor: color,
        },
        opacity ? { opacity: opacity, shadowOpacity: opacity } : {},
        style,
        paddH ? { paddingHorizontal: paddH } : {},
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  Header: {
    color: "#ffffff",
    opacity: 0.45,
    fontSize: 28,
  },
  Title: {
    color: "#ffffff",
    opacity: 0.3,
    fontSize: 20,
  },
  SubTitle: {
    color: "#ffffff",
    opacity: 0.8,
    fontSize: 16,
    textShadowRadius: 15,
    textShadowOffset: { width: 0, height: 0 },
  },
  Value: {
    color: "#ffffff",
    opacity: 1,
    fontSize: 16,
    textShadowRadius: 8,
    textShadowOffset: { width: 0, height: 0 },
    fontWeight: "bold",
    // textShadowOpacity:1
  },
});

export default TextView;
