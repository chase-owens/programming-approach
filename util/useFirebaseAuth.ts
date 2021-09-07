import { useEffect, useState } from "react";
import { auth, firebase } from "./firebase";

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<firebase.User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const gitHubAuth = new firebase.auth.GithubAuthProvider();
  gitHubAuth.addScope("repo");
  const googleAuth = new firebase.auth.GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      console.log("setting user - pre - post", { authUser }, { firebaseUser });
      setAuthUser(firebaseUser);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const createUserWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    try {
      auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      throw new Error(`Error creating user: ${error}`);
    }
  };

  const signInWithPopup = async (authProvider: firebase.auth.AuthProvider) =>
    auth.signInWithPopup(authProvider);

  const signInWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw new Error(`Error creating user: ${error}`);
    }
  };

  const signOut = () => auth.signOut();

  return {
    authUser,
    createUserWithEmailAndPassword,
    loginWithGoogle: () => signInWithPopup(googleAuth),
    loginWithGitHub: () => signInWithPopup(gitHubAuth),
    isLoading,
    signInWithEmailAndPassword,
    signOut,
  };
}
