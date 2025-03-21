import { useState } from "react";
import ImgButton from "../../components/ui/ImgButton.jsx";
import logoLight from "../../assets/logo-light-theme.svg";
import logoDark from "../../assets/logo-dark-theme.svg";
import iconMoon from "../../assets/icon-moon.svg";
import iconSun from "../../assets/icon-sun.svg";
import bgDark from "../../assets/bg-dark-theme.png";
import bgLight from "../../assets/bg-light-theme.png";

export default function ThemeChanger() {
  const [isDark, setIsDark] = useState(true);
  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const asset = {
    dark: {
      icon: iconSun,
      iconalt: "An icon of sun representing a light mode",
      logo: logoDark,
      logoalt: "A logo image of character counter in dark mode",
      bg: bgDark,
    },
    light: {
      icon: iconMoon,
      iconalt: "An icon of moon representing a dark mode",
      logo: logoLight,
      logoalt: "A logo image of character counter in light mode",
      bg: bgLight,
    },
  };
  const theme = isDark ? asset.dark : asset.light;

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
