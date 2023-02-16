import { useEffect, useState } from "react";
import renderThemeChanger from "../../utils/renderThemeChanger";
import Link from "next/link";
import { routes } from "../../utils/constants";
import useDelayedRender from "use-delayed-render";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

export default function Mobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

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
            {"PriyeshK".split("").map((letter, index) => {
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
        <button type="button" className="w-5 h-5">{renderThemeChanger()}</button>
        <button
          className=" md:hidden"
          aria-label="Toggle menu"
          type="button"
          onClick={toggleMenu}
        >
          {!isMenuOpen ? (
            <RiMenu2Fill data-hide={isMenuOpen} size={30} />
          ) : (
            <RxCross1 data-hide={!isMenuOpen} size={30} />
          )}
        </button>
        </div>
        
      </div>
      {isMenuMounted && (
        <ul
          className={`menu flex flex-col px-3  h-screen top-0 left-0
            ${isMenuRendered && "menuRendered"}`}
        >
          {routes.map((item, index) => {
            return (
              <li
                className="border-b border-gray-50   font-semibold"
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
