import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext/Provider";
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
    <div className={styles.container}>
      <span>login - here</span>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="text" />
        <label>Email</label>
        <input ref={passwordRef} type="text" />
        <label>Password</label>
        <Button type="submit">Submit</Button>
      </form>
      <Button className={styles.google} onClick={loginWithGoogle}>
        <span className={styles.providerLoginName}>Sign in with Google</span>
        <FontAwesomeIcon icon={faGoogle} />
      </Button>
      <Button className={styles.github} onClick={loginWithGitHub}>
        <span className={styles.providerLoginName}>Sign in with GitHub</span>
        <FontAwesomeIcon icon={faGithub} />
      </Button>
    </div>
  );
}
