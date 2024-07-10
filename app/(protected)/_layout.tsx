import { StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function ProtectedLayouts() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='home' options={{ headerShown: false }} />
    </Stack>
  );
}
