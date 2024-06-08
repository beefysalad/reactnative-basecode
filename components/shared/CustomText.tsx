import { StyleSheet, Text } from "react-native";
import React from "react";
type TextProps = {
  size: number;
  children: React.ReactNode;
};
export default function CustomText({ size, children }: TextProps) {
  return (
    <Text
      style={{
        fontSize: size,
      }}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({});
