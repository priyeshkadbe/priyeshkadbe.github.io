import Link from "next/link";
import React from "react";
import { routes } from "../../Constant/constants";

type Props = {
  currentPage:string;
};

function Navbar({currentPage}:Props){
  return(
    <nav className="flex justify-end bg-mainColor h-24 ">
      <ul className="flex gap-x-5">
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none text-gray-600 ${
                currentPage === item.title
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100 transition-opacity"
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}


export default Navbar;