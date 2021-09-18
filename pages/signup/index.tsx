import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext/Provider";
import Main from "../../layouts/Main";
import getGoogleIcon from "../../public/icons";
import Button from "../../shared/Button";
import styles from "./Signup.module.scss";

export default function Signup() {
  const {
    createUserWithEmailAndPassword,
    loginWithGitHub,
    loginWithGoogle,
    user,
  } = useAuth();
  const router = useRouter();

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!!user) {
      router.push("/");
    }
  }, [user]);

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      const user = createUserWithEmailAndPassword(email, password);
    }
  };

  return (
    <Main heading="Sign Up">
      <span>Sign up - here</span>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <input ref={emailRef} type="text" />
        <label>Email</label>
        <input ref={passwordRef} type="text" />
        <label>Password</label>
        <Button type="submit">Submit</Button>
      </form>
      <Button
        className={styles.google}
        onClick={loginWithGoogle}
        renderIcon={() => (
          <span className={styles.icon} data-type="google">
            {getGoogleIcon()}
          </span>
        )}
      >
        <span className={styles.providerLoginName}>Sign in with Google</span>
      </Button>
      <Button
        className={styles.github}
        onClick={loginWithGitHub}
        renderIcon={() => <FontAwesomeIcon icon={faGithub} />}
      >
        <span className={styles.providerLoginName}>Sign in with GitHub</span>
      </Button>
    </Main>
  );
}
