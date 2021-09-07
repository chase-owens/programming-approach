import { FC, useContext } from "react";
import { AuthContext } from "..";
import useFirebaseAuth from "../../../util/useFirebaseAuth";

const Provider: FC = ({ children }) => {
  const {
    authUser,
    createUserWithEmailAndPassword,
    isLoading,
    loginWithGitHub,
    loginWithGoogle,
    signInWithEmailAndPassword,
    signOut,
  } = useFirebaseAuth();

  return (
    <AuthContext.Provider
      value={{
        user: authUser,
        createUserWithEmailAndPassword,
        isLoading,
        loginWithGitHub,
        loginWithGoogle,
        signInWithEmailAndPassword,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default Provider;

export const useAuth = () => useContext(AuthContext);
