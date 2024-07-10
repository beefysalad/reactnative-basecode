import CustomHeader from "@/components/shared/Header";
import GlobalAuthContext, { useAuth } from "@/context/AuthContext";

import { Slot, Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

import "react-native-reanimated";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen
        name='(protected)'
        options={{
          headerShown: true,
          header: () => <CustomHeader title='Home' />,
        }}
      />
      <Stack.Screen name='text' />
      <Stack.Screen name='admin' />
      <Stack.Screen name='register' options={{ headerShown: false }} />
      <Stack.Screen name='+not-found' />
    </Stack>
  );
};
export default function RootLayout() {
  return (
    <GlobalAuthContext>
      <Layout />
    </GlobalAuthContext>
  );
}
