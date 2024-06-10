import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface State {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const createStore = create<State>();

export const useStore = createStore(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: "app-storage",
      getStorage: () => AsyncStorage,
    } as PersistOptions<State>
  )
);
