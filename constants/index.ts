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
export const MENU = {
  SIGN_OUT: "sign-out",
  SETTING: "setting",
  PROFILE: "profile",
};
export const PLATFORM = {
  ANDROID: "android",
  IOS: "ios",
  WEB: "web",
  MACOS: "macos",
  WINDOWS: "windows",
};
export const ROUTES = {
  PROTECTED_ROUTES: ["(protected)", "admin", "(test)"],
  PUBLIC_ROUTES: ["register", "text"],
};
export const STYLE = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "30%",
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
  multiLineInput: {
    width: "30%",
    height: 100, // Adjust the height for multi-line input
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
  scrollViewContainer: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
