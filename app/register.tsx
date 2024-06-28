import CustomButton from "@/components/shared/CustomButton";
import { PLATFORM } from "@/constants";
import { registerUser } from "@/service/api";
import { useUserGlobalStore } from "@/store/useUserGlobalStore";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  Alert,
} from "react-native";

export default function Register() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const handleRegister = async () => {
    const isMissingFields = name === "" || email === "" || password === "";

    if (isMissingFields) {
      const alertMessage = "Missing required fields";
      const platformAlert = Platform.OS === PLATFORM.WEB ? alert : Alert.alert;
      platformAlert(alertMessage);
      return;
    }
    try {
      const user = await registerUser({ name, email, password });
      if (user) {
        router.navigate("/login");
      }
    } catch (error: any) {
      if (error.response) {
        if (Platform.OS === PLATFORM.WEB) {
          alert(error.response.data.message);
        } else {
          Alert.alert("Error", error.response.data.message);
        }
      }
      console.error(error);
    }
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder='Name'
        placeholderTextColor='#aaa'
        keyboardType='ascii-capable'
        autoCapitalize='none'
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder='Email'
        placeholderTextColor='#aaa'
        keyboardType='email-address'
        autoCapitalize='none'
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        placeholderTextColor='#aaa'
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <CustomButton title='Register' onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#007bff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotButton: {
    marginTop: 10,
  },
  forgotText: {
    color: "#007bff",
    fontSize: 16,
  },
});
