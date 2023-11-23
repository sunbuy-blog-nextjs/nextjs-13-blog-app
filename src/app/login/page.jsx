"use client";
import React from "react";
import styles from "./page.module.scss";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Login = ({ url }) => {
  const session = useSession();
  const router = useRouter();
  if (session.status === "authenticated") {
    router?.push("/home");
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome Back</h1>
      <h2 className={styles.subtitle}>Please sign in.</h2>

      <form className={styles.form}>
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
      </form>
      <button
        className={styles.button + " " + styles.google}
        onClick={() => {
          signIn();
        }}
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
