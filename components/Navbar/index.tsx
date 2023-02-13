import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import { routes } from "../../Constant/constants";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

type Props = {
  currentPage: string;
};

function Navbar({ currentPage }: Props) {
  const renderThemeChanger = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-7 h-7 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-7 h-7 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return <nav className="flex h-24 ">{renderThemeChanger()}</nav>;
}

export default Navbar;
