import { create } from "zustand";
import { createJSONStorage, persist, PersistOptions } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface State {
  user: IAuthenticatedUser | null;
  authState: IAuthState | null;
  updateUser: (user: IAuthenticatedUser | null) => void;
  updateAuthState: (authState: IAuthState | null) => void;
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
          authState: {
            authenticated: false,
          },
        });
      },
      authState: null,
      updateAuthState: () => {
        set({
          authState: {
            authenticated: true,
          },
        });
      },
    }),
    {
      name: "tracker-application-user-store",
      storage: createJSONStorage(() => AsyncStorage),
    } as PersistOptions<State>
  )
);
