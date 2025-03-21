import { useState } from "react";
import themeAsset from "../../assets/themeAsset";

export default function ThemeChanger() {
  const [isDark, setIsDark] = useState(true);
  const changeTheme = () => {
    setIsDark(!isDark);
  };
  const theme = isDark ? themeAsset.dark : themeAsset.light;

  return (
    <>
      <img src={theme.logo} alt={theme.logoalt} />
      <ImgButton
        src={theme.icon}
        alt={theme.iconalt}
        handleClick={changeTheme}
      />
    </>
  );
}
