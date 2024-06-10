import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeAreaWrapper from "@/components/shared/SafeAreaWrapper";
import CustomButton from "@/components/shared/CustomButton";
import { clearStorage, populateLogsForYear } from "@/helpers/clearStorage";
import { Users } from "@/test-data/users";
import { useStore } from "@/store/store";

export default function clear() {
  const { updateAllusers } = useStore();
  const handleClick = () => {
    const users = populateLogsForYear(Users, 2024);
    updateAllusers(users);
  };
  return (
    <SafeAreaWrapper>
      <View>
        <CustomButton title='Clear' onPress={clearStorage} />
        <CustomButton title='Add' onPress={handleClick} />
      </View>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({});
