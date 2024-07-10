import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import React from "react";
import { COLORS } from "@/constants";

type CustomButtonProps = {
  onPress?: () => void;
  title: string;
  height?: number;
  width?: number;
};

export default function CustomButton({
  onPress,
  title,
  height = 45,
  width = 200,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { height, width }]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 5,
    marginBottom: 5,
    cursor: Platform.OS === "web" ? "pointer" : "auto",
  },
  buttonText: {
    color: COLORS.WHITE,
    textAlign: "center",
  },
});
