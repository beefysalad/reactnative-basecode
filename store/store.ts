import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ILogs, IUser, Users } from "@/test-data/users";
interface State {
  count: number;
  increment: () => void;
  decrement: () => void;
  users: IUser[];
  updateUserLog: (userId: string, logIndex: number, updatedLog: ILogs) => void;
  updateUserAllLogs: (userId: string, updatedLog: ILogs[]) => void;
  updateAllusers: (users: IUser[]) => void;
}

const createStore = create<State>();

export const useStore = createStore(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      users: Users,
      updateUserLog: (userId: string, logIndex: number, updatedLog: ILogs) =>
        set((state) => ({
          users: state.users.map((user) =>
            user.id === userId
              ? {
                  ...user,
                  logs: user.logs.map((log, index) =>
                    index === logIndex ? { ...log, ...updatedLog } : log
                  ),
                }
              : user
          ),
        })),
      updateUserAllLogs: (userId: string, updatedLog: ILogs[]) =>
        set((state) => ({
          users: state.users.map((user) =>
            user.id === userId
              ? {
                  ...user,
                  logs: updatedLog,
                }
              : user
          ),
        })),
      updateAllusers: (users: IUser[]) =>
        set((state) => ({
          users: users,
        })),
    }),
    {
      name: "tracker-app",
      getStorage: () => AsyncStorage,
    } as PersistOptions<State>
  )
);
