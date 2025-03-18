import Logo from "./Logo";
import Toggle from "./Toggle";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Toggle />
    </header>
  );
}
