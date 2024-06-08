import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useState } from "react";
import SafeAreaWrapper from "../shared/SafeAreaWrapper";
import CustomButton from "../shared/CustomButton";
import { useRouter } from "expo-router";
import { SIZE, STYLE } from "@/constants";
import CustomText from "../shared/CustomText";
import CustomModal from "../shared/Modal";

export default function Home() {
  const [timeString, setTimeString] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>("");
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
    return dateString;
  };

  useEffect(() => {
    const intervalId = setInterval(getCurrentTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleTimeAction = (actionType: string) => {
    const currentTime = getCurrentTime();
    const modalString =
      actionType === "timeIn"
        ? `Hello John Patrick Ryan Mandal! You are clocking in at ${currentTime}`
        : `Hello John Patrick Ryan Mandal! You are clocking out at ${currentTime}. Thanks for coming to work today!`;

    setModalText(modalString);
    setModalVisible(true);
  };

  return (
    <SafeAreaWrapper>
      <View style={STYLE.container}>
        <CustomText size={SIZE.LG}>{timeString}</CustomText>
        <CustomButton
          title='Time in'
          onPress={() => handleTimeAction("timeIn")}
        />
        <CustomButton
          title='Time out'
          onPress={() => handleTimeAction("timeOut")}
        />
      </View>

      <CustomModal modalClose={closeModal} modalVisibility={modalVisible}>
        <Text>{modalText}</Text>
        <CustomButton title='Close' onPress={closeModal} />
      </CustomModal>
    </SafeAreaWrapper>
  );
}
