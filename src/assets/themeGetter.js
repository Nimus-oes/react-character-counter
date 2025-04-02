import iconMoon from "./icon-moon.svg";
import iconSun from "./icon-sun.svg";
import logoLightTheme from "./logo-light-theme.svg";
import logoDarkTheme from "./logo-dark-theme.svg";

export const themeAsset = {
  dark: {
    logo: logoDarkTheme,
    logoalt: "A logo of Chracter Counter in dark mode",
    icon: iconSun,
    iconalt: "An icon with an image of sun to turn into light mode",
    class: "dark-mode",
  },
  light: {
    logo: logoLightTheme,
    logoalt: "A logo of Chracter Counter in light mode",
    icon: iconMoon,
    iconalt: "An icon with an image of moon to turn into dark mode",
    class: "light-mode",
  },
};
