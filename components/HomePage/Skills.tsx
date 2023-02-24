import React, { useEffect, useState, useRef, useContext } from "react";
import { getTechnos } from "../../utils/technos";
import { ScrollContext } from "../Globals/ScrollObserver";

function Skills() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const { scrollY } = useContext(ScrollContext);

  const technos = getTechnos(isMobile ? 40 : 80);

  useEffect(() => {
    const updateTechnos = () => {
      window.innerWidth > 768 ? setIsMobile(false) : setIsMobile(true);
    };

    updateTechnos();
    window.addEventListener("resize", updateTechnos);
    return () => window.removeEventListener("resize", updateTechnos);
  }, []);

  return (
    <div className="flex h-screen flex-col gap-y-10 relative z-10 " id="skills">
      <h4 className="max-w-3xl font-bold text-4xl md:text-7xl mx-auto text-center my-6 tracking-widest">
        MY FAVORITE EDGE TECHNOLOGIES
      </h4>
      <div className="flex justify-center md:mx-auto max-w-3xl md:max-w-4xl flex-wrap">
        <div className="flex flex-wrap mx-auto">
          {technos.map((techno, i) => (
            <span className="p-4 md:p-6" key={i}>
              {techno}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
