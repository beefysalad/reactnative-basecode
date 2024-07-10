import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useUserGlobalStore } from "@/store/useUserGlobalStore";
import { useRouter, useSegments } from "expo-router";
import { isProtectedRoute } from "@/helpers/navigation";

interface AuthContextType {
  authState: IAuthState | null;
  user: IAuthenticatedUser | null;
}
const AuthContext = createContext<AuthContextType>({
  authState: null,
  user: null,
});

interface IGlobalContext {
  children: React.ReactNode;
}
export const useAuth = () => {
  return useContext(AuthContext);
};
export default function GlobalAuthContext({ children }: IGlobalContext) {
  const router = useRouter();
  const segments = useSegments();
  const { authState, user } = useUserGlobalStore();
  const inAuthGroup = isProtectedRoute(segments[0]);

  useEffect(() => {
    if (!user && inAuthGroup) {
      router.replace("/");
    } else if (user) {
      router.navigate("/(protected)");
    }
  }, [user, router, authState, segments]);
  return (
    <AuthContext.Provider value={{ authState, user }}>
      {children}
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({});
