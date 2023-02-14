import {routes} from "../../utils/constants";
import renderThemeChanger from "../../utils/renderThemeChanger";
import Link from "next/link";

interface Props{
  currentPage:string;
}

function Laptop({currentPage}:Props){
  return(
    <nav className="hidden md:flex items-center justify-between p-6 mx-9">
    <li className="list-none font-bold text-lg cursor-pointer">
      <Link href="/">
        <span className="font-black text-xl flex items-center">
          {/* <img
            className="mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500"
            src="/static/logos/logo_no_text.svg"
            width="60"
          /> */}
          {"PriyeshK".split("").map((letter, index) => {
            return (
              <span key={index} className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim">
                {letter}
              </span>
            );
          })}
        </span>
      </Link>
    </li>
    
    <ul className="flex items-center space-x-10 ">
    <div className="w-5 h-5">
    {renderThemeChanger()}
    </div>
      {routes.map((item, index) => {
        return (
          <li
            key={index}
            className={`list-none ${
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
export default Laptop;