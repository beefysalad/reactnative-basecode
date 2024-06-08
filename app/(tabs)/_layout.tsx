import { COLORS } from "@/constants";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.ACTIVE_TAB, // Color for the active tab
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
        name='todo'
        options={{
          tabBarLabel: "To do",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name='tasks' size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
