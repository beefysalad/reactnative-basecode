import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useUserGlobalStore } from "@/store/useUserGlobalStore";
import { useRouter, useSegments } from "expo-router";

import { ROUTES } from "@/constants";

interface AuthContextType {
  authState: IAuthState | null;
  user: IAuthenticatedUser | null;
  loading: boolean;
}
const AuthContext = createContext<AuthContextType>({
  authState: null,
  user: null,
  loading: true,
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
  const [loading, setLoading] = useState<boolean>(true);
  const isProtectedRoute = (segments: string[]) => {
    return segments.some((segment) =>
      ROUTES.PROTECTED_ROUTES.includes(segment)
    );
  };

  const isPublicRoute = (segments: string[]) => {
    return (
      segments.length === 0 ||
      segments.some((segment) => ROUTES.PUBLIC_ROUTES.includes(segment))
    );
  };

  useEffect(() => {
    if (authState?.authenticated === undefined) {
      return;
    }
    if (authState?.authenticated) {
      if (isPublicRoute(segments)) {
        router.replace("/(protected)");
      }
    } else {
      if (isProtectedRoute(segments)) {
        router.replace("/");
      }
    }
    setLoading(false);
  }, [authState, segments, router]);

  return (
    <AuthContext.Provider value={{ authState, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
