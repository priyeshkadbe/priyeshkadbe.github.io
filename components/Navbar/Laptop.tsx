import { routes } from "../../utils/constants";
import renderThemeChanger from "../../utils/renderThemeChanger";
import Link from "next/link";

interface Props {
  currentPage: string;
}

function Laptop({ currentPage }: Props) {
  return (
      <nav className="w-full mx-auto  hidden md:flex items-center justify-between p-6  py-8 " style={{ maxWidth: "1300px" }}>
        <li className="list-none font-bold text-lg cursor-pointer">
          <Link href="/">
            <span className="font-black text-3xl  flex items-center">
              {/* <img
            className="mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500"
            src="/static/logos/logo_no_text.svg"
            width="60"
          /> */}
              {"Pk.".split("").map((letter, index) => {
                return (
                  <span
                    key={index}
                    className="hover:-mt-2 transition-all duration-500 hover:duration-100  "
                  >
                    {letter}
                  </span>
                );
              })}
            </span>
          </Link>
        </li>

        <ul className="flex items-center space-x-10 justify-center">
          <button  className="">{renderThemeChanger()}</button>
          {routes.map((item, index) => {
            return (
              <li
                key={index}
                className={`list-none `}
              >
                <Link className="text-lg font-medium" href={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
  );
}
export default Laptop;
