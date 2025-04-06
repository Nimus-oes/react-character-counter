import { createContext, useContext } from "react";
import en from "../locales/en.json";

const TextContext = createContext();

export function TextProvider({ children }) {
  return <TextContext.Provider value={en}>{children}</TextContext.Provider>;
}

export function useText() {
  const context = useContext(TextContext);
  if (context === undefined) {
    throw new Error("useText must be used within a TextProvider");
    // An error indicates that the context is used outside the provider
    // or the provider is missing
  }

  return context;
}
