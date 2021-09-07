import cc from "classcat";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext/Provider";
import Button from "../../shared/Button";
import styles from "./Navigation.module.scss";

interface NavigationProps {
  route?: string;
}

export default function Navigation({ route }: NavigationProps) {
  const { signOut, user } = useAuth();
  const [shouldKeyboardSkipNavigation, setShouldKeyboardSkipNavigation] =
    useState(false);

  return (
    <nav className={styles.nav}>
      <a
        className={styles.screenReaderText}
        href="#main"
        onChange={() => setShouldKeyboardSkipNavigation(true)}
        onClick={() => setShouldKeyboardSkipNavigation(true)}
        onKeyPress={() => setShouldKeyboardSkipNavigation(true)}
      >
        <span>Skip Navigation</span>
      </a>
      <div className={styles.navContent}>
        <span>
          <Link href="/">
            <a
              className={cc([styles.pa_logo, styles.link])}
              tabIndex={shouldKeyboardSkipNavigation ? -1 : 0}
            >
              <span>PA</span>
            </a>
          </Link>
          {route && <span>{route}</span>}
        </span>
        <span className={styles.links}>
          <Link href="/about">
            <a
              className={styles.link}
              tabIndex={shouldKeyboardSkipNavigation ? -1 : 0}
            >
              About
            </a>
          </Link>
          <Link href="/idt">
            <a
              className={styles.link}
              tabIndex={shouldKeyboardSkipNavigation ? -1 : 0}
            >
              IDT
            </a>
          </Link>
          <Link href="/courses">
            <a
              className={styles.link}
              tabIndex={shouldKeyboardSkipNavigation ? -1 : 0}
            >
              Courses
            </a>
          </Link>
          {!user ? (
            <>
              <Button
                isStrong
                tabIndex={shouldKeyboardSkipNavigation ? -1 : 0}
                to="/login"
              >
                Log In
              </Button>
              <Button
                isStrong
                tabIndex={shouldKeyboardSkipNavigation ? -1 : 0}
                to="/signup"
              >
                Sign Up
              </Button>
            </>
          ) : (
            <Button
              isStrong
              onClick={signOut}
              tabIndex={shouldKeyboardSkipNavigation ? -1 : 0}
            >
              Sign Out
            </Button>
          )}
        </span>
      </div>
    </nav>
  );
}
