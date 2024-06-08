import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeAreaWrapper from "@/components/shared/SafeAreaWrapper";
import CustomText from "@/components/shared/CustomText";
import { SIZE, STYLE } from "@/constants";

export default function () {
  return (
    <SafeAreaWrapper>
      <View style={STYLE.container}>
        <CustomText size={SIZE.XL}>API</CustomText>
      </View>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({});
