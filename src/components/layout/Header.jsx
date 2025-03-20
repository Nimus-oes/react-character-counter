import ThemeChanger from "../feature/ThemeChanger";
import "../../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <ThemeChanger />
    </header>
  );
}
