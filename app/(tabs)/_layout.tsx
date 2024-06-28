import CustomHeader from "@/components/shared/Header";
import { COLORS, PLATFORM } from "@/constants";
import GlobalAuthContext from "@/context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";
import { Stack, Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
export default function TabLayout() {
  return Platform.OS === PLATFORM.WEB ? (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          headerShown: true,
          header: () => <CustomHeader title='Home' />,
        }}
      />
      <Stack.Screen
        name='timelogs'
        options={{
          headerShown: true,
          header: () => <CustomHeader title='Home' />,
        }}
      />
    </Stack>
  ) : (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.ACTIVE_TAB,
        tabBarInactiveTintColor: COLORS.INACTIVE_TAB,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name='home' size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
