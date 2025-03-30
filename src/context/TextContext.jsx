import { createContext, useContext } from "react";
import en from "../locales/en.json";

const TextContext = createContext("");

export const TextProvider = ({ children }) => {
  return <TextContext.Provider value={en}>{children}</TextContext.Provider>;
};

export const useText = () => {
  return useContext(TextContext);
};
