import { useEffect, useState } from "react";
import renderThemeChanger from "../../utils/renderThemeChanger";
import Link from "next/link";
import { routes } from "../../utils/constants";
import useDelayedRender from "use-delayed-render";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

export default function Mobile() {
  const [menuOpened, setMenuOpened] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    menuOpened,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <nav>
      <div
        className={`w-full  justify-between flex items-center  p-6`}
        style={{ zIndex: 101 }}
      >
        <li className="list-none font-bold text-3xl">
          <Link href="/">
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
          </Link>
        </li>
        <div className="flex justify-center items-center gap-x-4">
          <button type="button" className="w-5 h-5">
            {renderThemeChanger()}
          </button>
          <button
            className=" md:hidden"
            aria-label="Toggle menu"
            type="button"
            onClick={() => setMenuOpened(menuOpened ? false : true)}
          >
            {menuOpened ? <RxCross1 size={24} /> : <RiMenu2Fill size={24} />}
          </button>
        </div>
      </div>
      {isMenuMounted && (
        <ul
          className={`menu flex flex-col  px-3  h-screen top-0 left-0
            ${isMenuRendered && "menuRendered"}`}
        >
          {routes.map((item, index) => {
            return (
              <li
                className="border-b mobile-navbar-bottom   "
                style={{ transitionDelay: `${150 + index * 25}ms` }}
              >
                <Link href={item.path} className="flex w-auto p-4">
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
