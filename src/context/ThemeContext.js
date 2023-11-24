"use client";
import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    let initialTheme;
    const from_localStorage = localStorage.getItem("theme");
    initialTheme = from_localStorage ? from_localStorage : "light";
    return initialTheme;
  });
  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
    localStorage.setItem("theme", mode === "dark" ? "light" : "dark");
  };
  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
