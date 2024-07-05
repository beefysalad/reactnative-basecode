import { create } from "zustand";
import { createJSONStorage, persist, PersistOptions } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface State {
  user: IAuthenticatedUser | null;
  updateUser: (user: IAuthenticatedUser | null) => void;
  signOut: () => void;
}

const createStore = create<State>();

export const useUserGlobalStore = createStore(
  persist(
    (set, get) => ({
      user: null,
      updateUser: (user) => {
        set({
          user: user,
        });
      },
      signOut: () => {
        set({
          user: null,
        });
      },
    }),
    {
      name: "tracker-application-user-store",
      storage: createJSONStorage(() => AsyncStorage),
    } as PersistOptions<State>
  )
);
