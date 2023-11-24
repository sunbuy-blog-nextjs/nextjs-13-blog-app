"use client";
import React, { useEffect } from "react";
import styles from "./page.module.scss";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const Login = ({ url }) => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session.status === "authenticated") {
      router?.push("/");
      toast.success(" You logged in successfully!");
    }
  }, [session]);

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
