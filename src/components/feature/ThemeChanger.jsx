import { useState } from "react";
import getThemeAsset from "../../assets/themeAsset";
import ImgButton from "../ui/ImgButton";
import "../../styles/themeChanger.css";

export default function ThemeChanger() {
  const [isDark, setIsDark] = useState(true);
  const changeTheme = () => {
    setIsDark(!isDark);
  };
  const themeAsset = getThemeAsset();
  const theme = isDark ? themeAsset.dark : themeAsset.light;

  return (
    <>
      <img src={theme.logo} alt={theme.logoalt} className="logo" />
      <ImgButton
        boxClass="theme-icon-box"
        iconClass="theme-icon"
        src={theme.icon}
        alt={theme.iconalt}
        handleClick={changeTheme}
      />
    </>
  );
}
