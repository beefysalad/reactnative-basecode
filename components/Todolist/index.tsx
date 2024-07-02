import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import SafeAreaWrapper from "../shared/SafeAreaWrapper";
import { getTodos } from "@/service/todoService";
import TodoCard from "../Todo";

export default function TodoList() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTodos();
        if (response) {
          setTodos(response.data);
        }
      } catch (error) {
        throw error;
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaWrapper>
      <FlatList
        data={todos}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TodoCard name={item.name} description={item.description} />
        )}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({});
