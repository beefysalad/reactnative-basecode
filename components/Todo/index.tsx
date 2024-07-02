import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import SafeAreaWrapper from "../shared/SafeAreaWrapper";
import { Ionicons } from "@expo/vector-icons"; // Importing icons from @expo/vector-icons
import { COLORS, STYLE } from "@/constants";

interface ITodoCard {
  name: string;
  description: string;
  onDelete?: () => void;
  onUpdate?: () => void;
  onDone?: () => void;
}
export default function TodoCard({
  description,
  name,
  onDelete,
  onDone,
  onUpdate,
}: ITodoCard) {
  return (
    <SafeAreaWrapper>
      <View style={styles.card}>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity onPress={onUpdate}>
              <Ionicons
                name='create-outline'
                size={24}
                color={COLORS.ACTIVE_TAB}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete} style={styles.iconButton}>
              <Ionicons
                name='trash-outline'
                size={24}
                color={COLORS.ACTIVE_TAB}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onDone} style={styles.iconButton}>
              <Ionicons
                name='checkmark-done-outline'
                size={24}
                color={COLORS.ACTIVE_TAB}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
  },
  actions: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 12,
  },
});
