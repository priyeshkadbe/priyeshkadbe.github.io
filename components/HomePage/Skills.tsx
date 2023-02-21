import React, { useEffect, useRef } from "react";
import { getTechnos } from "../../utils/technos";

function Skills() {
  const technos = getTechnos(60);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    let i = 0;
    let reverse = false;
    let direction = 1;

    const startScroll = () => {
      intervalRef.current = setInterval(() => {
        if (content?.offsetWidth && container?.offsetWidth) {
          if (i === content.offsetWidth +10) {
            direction = -1;
            reverse = true;
          } else if (i === 0) {
            direction = 1;
            reverse = false;
          }
          container.scrollLeft += direction;
          i += direction;
        }
      }, 90);
    };

    startScroll();

    return () => {
      clearInterval(intervalRef.current!);
    };
  }, []);


  return (
    <div className="mx-auto max-w-sm md:max-w-6xl flex flex-col md:flex-col justify-center mt-20 ">
      <span className=" font-bold text-4xl mx-auto text-center my-6 tracking-widest">
        MY FAVORITE EDGE TECHNOLOGIES
      </span>
      <div className="flex my-10 mx-4">
        <div className="flex overflow-hidden" ref={containerRef}>
          <div className="skills-content " ref={contentRef}>
            {technos.map((techno, i) => (
              <span className="h-20 w-20 md:h-40 md:w-40" key={i}>
                {techno}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
