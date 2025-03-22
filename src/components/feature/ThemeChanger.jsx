import { useState } from "react";
import logo from "../../assets/logo-dark-theme.svg";
import iconSun from "../../assets/icon-sun.svg";
import ImgButton from "../ui/ImgButton";
import "../../styles/themeChanger.css";

export default function ThemeChanger() {
  return (
    <>
      <img
        src={logo}
        alt="A logo image of character counter in dark mode"
        className="logo"
      />
      <ImgButton
        boxClass="theme-icon-box"
        iconClass="theme-icon"
        src={iconSun}
        alt="An icon of sun to turn into a light mode"
      />
    </>
  );
}
