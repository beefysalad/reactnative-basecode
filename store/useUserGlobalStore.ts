import { create } from "zustand";
import { createJSONStorage, persist, PersistOptions } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface State {
  user: IUser | null;
}

const createStore = create<State>();

export const useStore = createStore(
  persist(
    (set, get) => ({
      user: null,
    }),
    {
      name: "tracker-application-user-store",
      storage: createJSONStorage(() => AsyncStorage),
    } as PersistOptions<State>
  )
);
