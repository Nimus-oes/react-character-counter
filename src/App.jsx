import "./App.css";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import { TextProvider } from "./context/textContext";
import { StateProvider } from "./context/StateContext";

export default function App() {
  return (
    <StateProvider>
      <TextProvider>
        <Header />
        <Main />
      </TextProvider>
    </StateProvider>
  );
}
