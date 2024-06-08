import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SafeAreaWrapper from "../shared/SafeAreaWrapper";
import CustomButton from "../shared/CustomButton";
import { useRouter } from "expo-router";
import { SIZE } from "@/constants";
import CustomText from "../shared/CustomText";

export default function Home() {
  const router = useRouter();
  const [count, setCount] = useState<number>(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <CustomText size={SIZE.MD}>Count: {count}</CustomText>
        <CustomButton title='Increment' onPress={handleIncrement} />
      </View>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
