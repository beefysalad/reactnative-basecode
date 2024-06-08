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
    </Tabs>
  );
}
