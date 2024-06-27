import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
  height,
  width,
}: CustomButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.BUTTON,
    // width: 200,
    width: "100%",
    height: 45,
    borderRadius: 5,
    marginBottom: 5,
  },
  buttonText: {
    color: COLORS.WHITE,
    textAlign: "center",
  },
});
