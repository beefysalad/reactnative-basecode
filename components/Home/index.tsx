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
} from "react-native";
import React, { useEffect, useState } from "react";
import SafeAreaWrapper from "../shared/SafeAreaWrapper";
import CustomButton from "../shared/CustomButton";
import { useRouter } from "expo-router";
import { PLATFORM, SIZE, STYLE } from "@/constants";
import CustomText from "../shared/CustomText";
import CustomModal from "../shared/Modal";
import { useStore } from "@/store/store";
import { formatDate } from "@/helpers/dateFormatter";
import { ping } from "@/service/api";
import { useUserGlobalStore } from "@/store/useUserGlobalStore";

export default function Home() {
  const { user, signOut } = useUserGlobalStore();
  const router = useRouter();
  const handleNavigate = () => {
    router.navigate("/timelogs");
  };
  return (
    <SafeAreaWrapper>
      <View style={STYLE.container}>
        <CustomText size={SIZE.LG}>{user?.name}</CustomText>
        <CustomButton title='Sign out' onPress={signOut} />
        <CustomButton title='Navigate to timelogs' onPress={handleNavigate} />
      </View>
    </SafeAreaWrapper>
  );
}
