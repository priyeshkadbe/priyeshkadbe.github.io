
import { useInView } from "framer-motion";
import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
//import { toKebabCase } from "utils/to-kebab-case";

export const ResumeSection: FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => {
  const sectionContentRef = useRef<HTMLElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [showSection, setShowSection] = useState(true);
  return (
    <section
      id={title}
      className="max-w-sm px-4 md:max-w-5xl my-8 mt-4 mx-auto"
      ref={sectionRef}
    >
      <header className=" ">
        <h2 className="flex items-baseline gap-x-sm">
          <h1 className="flex items-baseline text-3xl font-bold tracking-tight ">
            <span className="">{title}</span>
            <hr className="ml-6 mr-24 hidden border-dashed " />
          </h1>
          <button
            type="button"
            className="group mr-2 ml-auto rounded p-2  transition-colors "
            onClick={() => setShowSection(!showSection)}
          >
            <span className="sr-only">Toggle Section Visibility</span>
            <BsChevronDown
              className={`h-4 w-4  transition-all ${
                !showSection && "rotate-180"
              }`}
            />
          </button>
        </h2>
        <hr className="h-px my-4 border-none bg-[linear-gradient(90deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] bg-[length:8px_1px] [--line-color:theme(colors.gray.300/40)] d:[--line-color:theme(colors.gray.700/20)] " />
      </header>
      <main
        ref={sectionContentRef}
        className="relative transition-all duration-200 ease-linear "
      >
        <div className="transition-[all,height] delay-[0s,0.2s]">
          {showSection && children}
        </div>
      </main>
    </section>
  );
};
