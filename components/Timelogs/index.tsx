import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import SafeAreaWrapper from "../shared/SafeAreaWrapper";
import { useStore } from "@/store/store";
import CustomText from "../shared/CustomText";
import { SIZE, STYLE } from "@/constants";
import { formatDate, formatTime } from "@/helpers/dateFormatter"; // Make sure you have a date formatter
import CalendarPicker from "react-native-calendar-picker";

export default function Timelog() {
  const { users } = useStore();
  const [selectedDate, setSelectedDate] = useState<string>("");

  const onDateChange = (date: any) => {
    setSelectedDate(formatDate(date));
  };

  return (
    <SafeAreaWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <CalendarPicker onDateChange={onDateChange} />
        {selectedDate && (
          <View style={styles.logsContainer}>
            <Text style={styles.dateHeader}>Logs for {selectedDate}</Text>
            {users.map((user) => {
              const logsForSelectedDate = user.logs.filter(
                (log) => formatDate(new Date(log.date)) === selectedDate
              );
              return (
                <View key={user.id} style={styles.userContainer}>
                  <Text style={styles.userHeader}>
                    {user.firstName} {user.lastName}
                  </Text>
                  {logsForSelectedDate.length > 0 ? (
                    logsForSelectedDate.map((log, index) => (
                      <View key={index} style={styles.logContainer}>
                        <Text style={styles.logText}>
                          Time In: {formatTime(log.timeIn)}
                        </Text>
                        <Text style={styles.logText}>
                          Time Out: {formatTime(log.timeOut)}
                        </Text>
                      </View>
                    ))
                  ) : (
                    <Text style={styles.noLogsText}>
                      No logs for this date.
                    </Text>
                  )}
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logsContainer: {
    marginTop: 20,
  },
  dateHeader: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  userContainer: {
    marginBottom: 20,
  },
  userHeader: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  logContainer: {
    paddingLeft: 10,
    marginBottom: 10,
  },
  logText: {
    marginBottom: 5,
  },
  noLogsText: {
    fontStyle: "italic",
  },
});
