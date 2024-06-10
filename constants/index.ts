// constants.ts
import { StyleSheet } from "react-native";

export const COLORS = {
  PRIMARY: "#3498db",
  SECONDARY: "#2ecc71",
  TERTIARY: "#e74c3c",
  WHITE: "#ffffff",
  BLACK: "#000000",
  GRAY: "#7f8c8d",
  ACTIVE_TAB: "tomato",
  INACTIVE_TAB: "#95a5a6",
  BUTTON: "#e67e22",
};

export const SIZE = {
  XS: 4,
  SM: 8,
  MD: 16,
  LG: 24,
  XL: 32,
  XXL: 64,
};

export const PLATFORM = {
  ANDROID: "android",
  IOS: "ios",
  WEB: "web",
  MACOS: "macos",
  WINDOWS: "windows",
};
export const STYLE = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 250,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
