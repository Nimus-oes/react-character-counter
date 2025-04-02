import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { TextProvider } from "./context/textContext";

function changeBackground(classDark, classLight, currentMode) {
  document.body.classList.remove(classDark, classLight);
  const newModeClass = currentMode === classDark ? classLight : classDark;
  document.body.classList.add(newModeClass);
}

export default function App() {
  return (
    <TextProvider>
      <Header />
      <Main />
    </TextProvider>
  );
}
