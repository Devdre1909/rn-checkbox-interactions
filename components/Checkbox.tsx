import React from "react";
import Color from "color";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";

import { ACTIVE_COLOR, INACTIVE_COLOR } from "@/lib/contants";
type CheckboxProps = {
  label: string;
  checked: boolean;
  onPress: () => void;
};

const FADED_ACTIVE_COLOR = Color(ACTIVE_COLOR).fade(0.75).string();

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onPress }) => {
  return (
    <Animated.View
      layout={LinearTransition.springify()}
      style={{
        ...styles.container,
        backgroundColor: checked ? FADED_ACTIVE_COLOR : "transparent",
        borderColor: checked ? ACTIVE_COLOR : INACTIVE_COLOR,
        paddingRight: checked ? 14 : 20,
      }}
      onTouchEnd={onPress}
    >
      <Text
        style={{
          ...styles.label,
          color: checked ? ACTIVE_COLOR : INACTIVE_COLOR,
        }}
      >
        {label}
      </Text>
      {checked && (
        <Animated.View
          style={styles.iconContainer}
          entering={FadeIn}
          exiting={FadeOut}
        >
          <AntDesign name="checkcircle" size={20} color={ACTIVE_COLOR} />
        </Animated.View>
      )}
    </Animated.View>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingVertical: 12,
    borderRadius: 100,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  iconContainer: {
    marginLeft: 8,
  },
});
