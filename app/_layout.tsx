import GlobalAuthContext from "@/context/AuthContext";
import { useUserGlobalStore } from "@/store/useUserGlobalStore";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

import "react-native-reanimated";

export default function RootLayout() {
  const { user } = useUserGlobalStore();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.replace("/(tabs)");
    } else {
      router.replace("/login");
    }
  }, [user]);
  return (
    <GlobalAuthContext>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='login' options={{ headerShown: false }} />
        <Stack.Screen name='register' options={{ headerShown: false }} />
        <Stack.Screen name='+not-found' />
      </Stack>
    </GlobalAuthContext>
  );
}
