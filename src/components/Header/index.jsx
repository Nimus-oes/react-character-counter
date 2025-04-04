import "./Header.css";
import { themeAsset } from "../../assets/themeGetter";
import { useState } from "react";

function setBodyTheme(isDark) {
  document.body.classList.remove("dark-mode", "light-mode");
  document.body.classList.add(isDark ? "light-mode" : "dark-mode");
}

export default function Header() {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? themeAsset.dark : themeAsset.light;
  const handleClick = () => {
    setBodyTheme(isDark);
    setIsDark(!isDark);
  };

  return (
    <header className="header">
      <div>
        <img src={theme.logo} alt={theme.logoalt} className="logo" />
      </div>
      <div className="theme-icon-container" onClick={handleClick}>
        <img src={theme.icon} alt={theme.iconalt} className="theme-icon" />
      </div>
    </header>
  );
}
