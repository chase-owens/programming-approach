import { createContext } from "react";
import { firebase } from "../../util/firebase";

interface AuthState {
  createUserWithEmailAndPassword: (email: string, password: string) => void;
  isLoading: boolean;
  loginWithGitHub: () => void;
  loginWithGoogle: () => void;
  signInWithEmailAndPassword: (email: string, password: string) => void;
  signOut: () => void;
  user: firebase.User | null;
}

const undefinedUser = {
  credential: null,
  user: null,
};

const defaultAuthState: AuthState = {
  createUserWithEmailAndPassword: async (email: string, password: string) => {
    return undefinedUser;
  },
  loginWithGitHub: async () => {
    return undefinedUser;
  },
  loginWithGoogle: async () => {
    return undefinedUser;
  },
  isLoading: true,
  signInWithEmailAndPassword: async (email: string, password: string) => {
    return undefinedUser;
  },
  signOut: async () => {},
  user: null,
};

export const AuthContext = createContext<AuthState>(defaultAuthState);
