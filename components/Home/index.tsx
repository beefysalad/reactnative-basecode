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
  const { user, signOut } = useUserGlobalStore();
  const [formData, setFormData] = useState<ICreateTodo>({
    name: "",
    description: "",
    date: "",
  });
  const router = useRouter();
  const handleButtonSubmit = async () => {
    if (formData.name === "" || formData.description === "") {
      if (Platform.OS === PLATFORM.WEB) {
        alert("Missing required fields");
      } else {
        Alert.alert("Error", "Missing required fields");
      }
    } else {
      try {
        formData.date = String(new Date());
        const data = await createTodo(formData);
        if (data) {
          if (Platform.OS === PLATFORM.WEB) {
            alert(data.message);
          } else {
            Alert.alert(data.message);
          }
        }
      } catch (error) {
        console.log(error);
        console.error(error);
      }
    }
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  const handleNavigate = () => {
    router.navigate("/todo");
  };
  return (
    <SafeAreaWrapper>
      <ScrollView contentContainerStyle={STYLE.scrollViewContainer}>
        <View style={styles.container}>
          <TextInput
            style={STYLE.input}
            placeholder='Enter todo'
            placeholderTextColor='#aaa'
            value={formData.name}
            onChangeText={(text) => handleInputChange("name", text)}
          />
          <TextInput
            style={STYLE.multiLineInput}
            placeholder='Enter task description'
            placeholderTextColor='#aaa'
            multiline
            value={formData.description}
            onChangeText={(text) => handleInputChange("description", text)}
            numberOfLines={14}
          />
          <CustomButton title='Click me' onPress={handleButtonSubmit} />
          <CustomButton title='Navigate' onPress={handleNavigate} />
          <CustomButton title='Sign Out' onPress={signOut} />
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
