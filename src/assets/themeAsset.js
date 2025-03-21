import logoLight from "./logo-light-theme.svg";
import logoDark from "./logo-dark-theme.svg";
import iconMoon from "./icon-moon.svg";
import iconSun from "./icon-sun.svg";
import bgDark from "./bg-dark-theme.png";
import bgLight from "./bg-light-theme.png";

export default themeAsset = {
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
