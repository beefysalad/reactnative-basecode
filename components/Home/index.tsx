import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Platform,
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

export default function Home() {
  const [timeString, setTimeString] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>("");
  const [id, setId] = useState<string>("");
  const { count, users, increment, updateUserLog } = useStore();

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
  const updateDateLogs = () => {};
  useEffect(() => {
    const intervalId = setInterval(getCurrentTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleInputChange = (inputValue: string) => {
    setId(inputValue);
  };
  const handleSubmit = () => {
    if (!(id.length > 0)) return;
    const findUser = users.find((user) => user.id === id);
    if (findUser) {
      const currentTime = getCurrentTime();
      const currentDate = new Date();
      let modalString;
      const checkTimeLogIndex = findUser.logs.findIndex((logs) => {
        const logDate = new Date(logs.date);
        const formattedLogDate = formatDate(logDate);
        const formattedCurrentDate = formatDate(new Date(currentDate));
        return formattedLogDate === formattedCurrentDate;
      });
      if (checkTimeLogIndex !== -1) {
        const checkTimeLog = findUser.logs[checkTimeLogIndex];

        if (!checkTimeLog.timeIn || !checkTimeLog.timeOut) {
          let modalString = "";
          let newTime: Date | undefined = undefined;

          if (!checkTimeLog.timeIn) {
            modalString = `Hello ${findUser.firstName} ${findUser.lastName}! You are clocking in at ${currentTime}.`;
            newTime = new Date();
          } else {
            modalString = `Hello ${findUser.firstName} ${findUser.lastName}! You are clocking out at ${currentTime}. Thanks for coming to work today.`;
            newTime = new Date();
          }

          if (newTime) {
            if (!checkTimeLog.timeIn) {
              checkTimeLog.timeIn = newTime;
            } else {
              checkTimeLog.timeOut = newTime;
            }

            setModalText(modalString);
            setModalVisible(true);
            updateUserLog(id, checkTimeLogIndex, checkTimeLog);
            setId("");
          }
        } else {
          console.log("Already has time in and time out");
        }
      }
    }
  };
  const handleOnBlur = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaWrapper>
      <View style={STYLE.container}>
        <CustomText size={SIZE.LG}>{timeString}</CustomText>
        <TextInput
          placeholder='Input ID number here'
          style={STYLE.input}
          onChangeText={handleInputChange}
          onBlur={handleOnBlur}
          value={id}
          numberOfLines={1}
        />
        <CustomButton title='Submit' onPress={handleSubmit} />
      </View>

      <CustomModal modalClose={closeModal} modalVisibility={modalVisible}>
        <CustomText size={SIZE.MD}>{modalText}</CustomText>
        <CustomButton title='Close' onPress={closeModal} />
      </CustomModal>
    </SafeAreaWrapper>
  );
}
