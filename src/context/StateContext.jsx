import { createContext, useContext, useState } from "react";

const ContentContext = createContext(null);
const SetContentContext = createContext(null);

export function StateProvider({ children }) {
  const [content, setContent] = useState({
    userinput: "",
    nospace: false,
    limit: false,
    maxlength: null,
  });

  return (
    <ContentContext.Provider value={content}>
      <SetContentContext.Provider value={setContent}>
        {children}
      </SetContentContext.Provider>
    </ContentContext.Provider>
  );
}

export function useContent() {
  return useContext(ContentContext);
}

export function useSetContent() {
  return useContext(SetContentContext);
}
