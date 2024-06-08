import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeAreaWrapper from "../shared/SafeAreaWrapper";

export default function Todo() {
  return (
    <SafeAreaWrapper>
      <View>
        <Text>Todos</Text>
      </View>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({});
