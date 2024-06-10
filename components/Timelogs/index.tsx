import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeAreaWrapper from "../shared/SafeAreaWrapper";
import { useStore } from "@/store/store";
import CustomButton from "../shared/CustomButton";

export default function Timelog() {
  const { count, decrement } = useStore();
  return (
    <SafeAreaWrapper>
      <View>
        <Text>Counts is isisis {count}</Text>
        <CustomButton title='Decrement' onPress={decrement} />
      </View>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({});
