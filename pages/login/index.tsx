import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField } from "@material-ui/core";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext/Provider";
import Main from "../../layouts/Main";
import getGoogleIcon from "../../public/icons";
import Button from "../../shared/Button";
import styles from "./Login.module.scss";

export default function Login() {
  const { loginWithGitHub, loginWithGoogle, signInWithEmailAndPassword, user } =
    useAuth();
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
      signInWithEmailAndPassword(email, password);
    }
  };

  return (
    <Main heading="Log In">
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <TextField
          id="email"
          label="Email"
          ref={emailRef}
          type="email"
          variant="outlined"
        />
        <TextField
          id="password"
          label="Password"
          ref={passwordRef}
          type="password"
          variant="outlined"
        />
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
