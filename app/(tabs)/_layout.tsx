import Home from "@/components/Home";
import { COLORS, PLATFORM } from "@/constants";
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
          headerShown: false,
        }}
      />
      <Stack.Screen name='timelogs' options={{ headerShown: false }} />
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
      <Tabs.Screen
        name='timelogs'
        options={{
          tabBarLabel: "Time Log",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name='th-list' size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='api'
        options={{
          tabBarLabel: "Movie API",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name='search' size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='clear'
        options={{
          tabBarLabel: "DEV",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name='code' size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
