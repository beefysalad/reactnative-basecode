import { Keyboard, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
type SafeAreaProps = {
  children: React.ReactNode;
};
export default function SafeAreaWrapper({ children }: SafeAreaProps) {
  const handleBlur = () => {
    Keyboard.dismiss();
  };
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
