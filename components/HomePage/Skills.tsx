import React, { useEffect,useState, useRef,useContext } from "react";
import { getTechnos } from "../../utils/technos";
import { ScrollContext } from "../Globals/ScrollObserver";



function Skills() {
   const [technos, setTechnos] = useState<string[]>([]);
  const { scrollY } = useContext(ScrollContext);

  useEffect(() => {
    const updateTechnos = () => {
      const newTechnos = window.innerWidth > 768 ? getTechnos(80) : getTechnos(40);
      setTechnos(newTechnos);
    };

    updateTechnos();
    window.addEventListener("resize", updateTechnos);
    return () => window.removeEventListener("resize", updateTechnos);
  }, []);

  return (
    <div
     
      className="flex h-screen flex-col gap-y-10 relative z-10 "
      id="skills"
      
    >
      <h4
        className="max-w-3xl font-bold text-4xl md:text-7xl mx-auto text-center my-6 tracking-widest"
      >
        MY FAVORITE EDGE TECHNOLOGIES
      </h4>
      <div
        
        className="flex justify-center mx-auto max-w-md md:max-w-4xl flex-wrap"
         
      >
        <div  className="flex flex-wrap">
          {technos.map((techno, i) => (
            <span className="p-4" key={i}>
              {techno}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;




