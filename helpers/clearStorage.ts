import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUser } from "@/test-data/users";
export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error(error);
  }
};

export const populateLogsForYear = (users: IUser[], year: number) => {
  users.forEach((user) => {
    user.logs = []; // Clear existing logs if any

    // Loop through each month
    for (let month = 0; month < 12; month++) {
      // Get the number of days in the current month
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      // Loop through each day of the month
      for (let day = 1; day <= daysInMonth; day++) {
        // Create a new Date object for the current day
        const currentDate = new Date(year, month, day);

        // Push an entry to the logs array with the current date and empty timeIn and timeOut
        user.logs.push({
          date: currentDate,
          timeIn: undefined,
          timeOut: undefined,
        });
      }
    }
  });
  return users;
};
