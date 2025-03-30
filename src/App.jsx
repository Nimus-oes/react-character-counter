import "./App.css";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import { TextProvider } from "./context/textContext";

export default function App() {
  return (
    <TextProvider>
      <Header />
      <Main />
    </TextProvider>
  );
}
