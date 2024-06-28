import { PLATFORM } from "@/constants";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
export const BASE_URL = "http://192.168.1.2:3000/";
const TIME_OUT = 30000;
export const APP_TOKEN = "tracker_user_token";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});

export const saveToken = async (key: string, value: string) => {
  try {
    if (Platform.OS === PLATFORM.WEB) {
      localStorage.setItem(key, value);
    } else {
      await SecureStore.setItemAsync(key, value);
    }
  } catch (error) {
    throw error;
  }
};

axiosInstance.interceptors.request.use(async (req) => {
  try {
    const access_token = await SecureStore.getItemAsync(APP_TOKEN);
    req.headers.Authorization = access_token;
    return req;
  } catch (error) {
    return req;
  }
});

export const fetcher = (url: string) =>
  axiosInstance.get(url).then((res) => res.data);

export default axiosInstance;
