import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import { routes } from "../../Constant/constants";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import renderThemeChanger from "../../Constant/renderThemeChanger";
type Props = {
  currentPage: string;
};

function Navbar({ currentPage }: Props) {
  return <nav className="flex h-24">{renderThemeChanger()}</nav>;
}

export default Navbar;
