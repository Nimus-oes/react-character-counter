import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { TextProvider } from "./context/TextContext";

export default function App() {
  return (
    <TextProvider>
      <Header />
      <Main />
    </TextProvider>
  );
}
