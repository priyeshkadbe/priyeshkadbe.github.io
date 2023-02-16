import React from "react";
//import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <>
      <div
        className="relative  w-full  pt-20 pb-40 m-auto flex flex-wrap justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <p className="text-xl mb-5">Hey, I'm Priyesh.</p>
        <h1 className="inline-block  max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl mb-10 font-bold ">
          I enjoy <span className="">developing</span> for the
          web.
        </h1>
        {/* <ScrollLink
          activeClass="active"
          to="learnmore"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        >
          <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink  hover:border-fun-pink transition-colors">
            Tell me more
          </div>
        </ScrollLink> */}
      </div>
    </>
  );
}

export default Hero;
