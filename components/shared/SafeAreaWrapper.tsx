import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
type SafeAreaProps = {
  children: React.ReactNode;
};
export default function SafeAreaWrapper({ children }: SafeAreaProps) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
