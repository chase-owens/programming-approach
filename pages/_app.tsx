import type { AppProps } from "next/app";
import { useEffect } from "react";
import AuthProvider from "../contexts/AuthContext/Provider";
import CoursesProvider from "../contexts/CoursesContext/Provider";
import "../styles/globals.css";
import "../styles/prism-theme.css";
import { analytics } from "../util/firebase";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      analytics();
    }
  }, []);

  return (
    <AuthProvider>
      <CoursesProvider>
        <Component {...pageProps} />
      </CoursesProvider>
    </AuthProvider>
  );
}

export default MyApp;
