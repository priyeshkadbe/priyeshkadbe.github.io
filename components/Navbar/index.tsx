import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import { routes } from "../../utils/constants";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

import Laptop from "./Laptop";
type Props = {
  currentPage: string;
};

function Navbar({ currentPage }: Props) {
  return (<div >

    <Laptop currentPage={currentPage} />
  </div>);
}

export default Navbar;
