import { createContext, useContext } from "react";
import en from "../locales/en.json";

const TextContext = createContext("");

export function TextProvider({ children }) {
  return <TextContext.Provider value={en}>{children}</TextContext.Provider>;
}

export function useText() {
  return useContext(TextContext);
}
