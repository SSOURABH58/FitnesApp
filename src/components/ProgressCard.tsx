import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GlassContainer from "./GlassContainer";
import ProgressBar, { progressBarProps } from "./ProgressBar";
import TextView, { textType } from "./TextView";

export type ProgressCardProps = {
  Title?: string;
  value?: string;
  color?: string;
  height?: number;
  iconSize?: number;
  progressBars?: progressBarProps[];
};

const ProgressCard: React.FC<ProgressCardProps> = ({
  Title,
  value,
  color,
  progressBars,
  height,
  iconSize,
}) => {
  const minWidth = 45;
  return (
    <GlassContainer>
      <View>
        {Title && (
          <View style={styles.TitleCont}>
            <TextView type={textType.Title}>{Title}</TextView>
            {value && (
              <TextView type={textType.SubTitle} color={color}>
                {" "}
                {value}
              </TextView>
            )}
          </View>
        )}
        <View
          style={[
            styles.ProgressBars,
            progressBars && { width: minWidth * progressBars.length },
          ]}
        >
          {progressBars &&
            progressBars.map((progressBar, key) => (
              <ProgressBar
                key={key}
                {...progressBar}
                height={height}
                iconSize={iconSize}
                minWidth={minWidth}
              />
            ))}
        </View>
      </View>
    </GlassContainer>
  );
};

export default ProgressCard;

const styles = StyleSheet.create({
  TitleCont: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  ProgressBars: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
