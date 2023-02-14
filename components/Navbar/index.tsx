import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import { routes } from "../../utils/constants";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import renderThemeChanger from "../../utils/renderThemeChanger";
import Laptop from "./Laptop";
type Props = {
  currentPage: string;
};

function Navbar({ currentPage }: Props) {
  return (<Laptop currentPage={currentPage} />);
}

export default Navbar;
