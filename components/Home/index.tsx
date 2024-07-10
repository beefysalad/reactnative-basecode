import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Platform,
  Alert,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import SafeAreaWrapper from "../shared/SafeAreaWrapper";
import CustomButton from "../shared/CustomButton";
import { useRouter } from "expo-router";
import { PLATFORM, SIZE, STYLE } from "@/constants";
import CustomText from "../shared/CustomText";
import { useUserGlobalStore } from "@/store/useUserGlobalStore";
import { createTodo } from "@/service/todoService";

export default function Home() {
  return (
    <SafeAreaWrapper>
      <ScrollView contentContainerStyle={STYLE.scrollViewContainer}>
        <View style={styles.container}>
          <CustomButton title='Suasdbmit' />
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
  },
});
