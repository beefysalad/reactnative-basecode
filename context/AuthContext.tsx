import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useEffect } from "react";
import { useUserGlobalStore } from "@/store/useUserGlobalStore";
import { useRouter } from "expo-router";

interface AuthContextType {
  user: IAuthenticatedUser | null;
}
const AuthContext = createContext<AuthContextType>({
  user: null,
});

interface IGlobalContext {
  children: React.ReactNode;
}
export default function GlobalAuthContext({ children }: IGlobalContext) {
  const { user } = useUserGlobalStore();
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.navigate("/");
    }
  }, [user, router]);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

const styles = StyleSheet.create({});
