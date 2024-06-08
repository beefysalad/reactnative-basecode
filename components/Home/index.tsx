import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import SafeAreaWrapper from "../shared/SafeAreaWrapper";
import CustomButton from "../shared/CustomButton";
import { useRouter } from "expo-router";
import { SIZE } from "@/constants";
import CustomText from "../shared/CustomText";

export default function Home() {
  const [timeString, setTimeString] = useState<string>("");

  const getCurrentTime = () => {
    const date = new Date();
    let hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    let ampm = "am";
    if (hour == 0) {
      hour = 12;
    } else if (hour > 12) {
      hour -= 12;
      ampm = "pm";
    }
    const dateString = `${String(hour).padStart(2, "0")}:${String(
      minute
    ).padStart(2, "0")}:${String(second).padStart(2, "0")} ${ampm}`;
    setTimeString(dateString);
    console.log(timeString);
  };

  useEffect(() => {
    const intervalId = setInterval(getCurrentTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <CustomText size={SIZE.LG}>{timeString}</CustomText>
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
