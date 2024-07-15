import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useUserGlobalStore } from "@/store/useUserGlobalStore";
import { STYLE } from "@/constants";
import SafeAreaWrapper from "@/components/shared/SafeAreaWrapper";
import CustomButton from "@/components/shared/CustomButton";
import { useRouter } from "expo-router";

export default function index() {
  const { user } = useUserGlobalStore();
  const router = useRouter();
  const handleRouteNavigation = () => {
    router.replace("/home");
  };
  return (
    <SafeAreaWrapper>
      <View style={STYLE.container}>
        <Text>Hello user {user?.name}</Text>
        <CustomButton
          title='Navigate'
          onPress={() => handleRouteNavigation()}
        />
      </View>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({});
