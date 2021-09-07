import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext/Provider";

const LoggedIn: FC = ({ children }) => {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, []);

  return <>{children}</>;
};

export default LoggedIn;
