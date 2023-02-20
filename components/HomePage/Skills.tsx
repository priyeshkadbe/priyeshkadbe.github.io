import React, { useEffect, useRef } from "react";
import { skills } from "../../utils/Skills";
import { getTechnos } from "../../utils/technos";

function Skills() {
  const technos = getTechnos(60);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    const startScroll = () => {
      intervalRef.current = setInterval(() => {
        if (container?.scrollLeft === content?.offsetWidth - container?.offsetWidth) {
          clearInterval(intervalRef.current!);
          intervalRef.current = setInterval(() => {
            if (container?.scrollLeft === 0) {
              clearInterval(intervalRef.current!);
              startScroll();
            }
            container.scrollLeft -= 1;
          }, 10);
        }
        container.scrollLeft += 1;
      }, 10);
    };

    startScroll();

    return () => {
      clearInterval(intervalRef.current!);
    };
  }, []);

  return (
    <div className="mx-auto max-w-6xl flex flex-col md:flex-col justify-center mt-20 ">
      <span className=" font-bold text-4xl mx-auto text-center my-6 tracking-widest">
        MY FAVORITE EDGE TECHNOLOGIES
      </span>
      <div className="flex my-10">
        <div
          className="flex overflow-hidden"
          ref={containerRef}
        >
          <div className="skills-content" ref={contentRef}>
            {technos.map((techno, i) => (
              <span className="h-40 w-40" key={i}>{techno}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
