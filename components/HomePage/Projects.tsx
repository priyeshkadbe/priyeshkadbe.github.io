import Link from "next/link";
import React from "react";
//import SectionTitle from "../global/SectionTitle";
import projects from "../../utils/project";
import FadeDown from "../Animations/FadeDown";
import FadeRight from "../Animations/FadeRight";
import FadeUp from "../Animations/FadeUp";
import ProjectCard from "../ProjectPage/ProjectCard";
import { useContext, useRef } from "react";
import { ScrollContext } from "../Globals/ScrollObserver";

function opacityForBlock(sectionProgress: number, blockNumber: number) {
  const progress = sectionProgress - blockNumber;

  if (progress >= 0 && progress < 1) {
    return 1;
  }

  return 0.2;
}
function Projects() {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPages = 3;
  let progress = 0;
  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;

    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;

    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div
      ref={refContainer}
      className="relative z-10 flex justify-center"
      id="intro"
    >
      <div className="flex flex-col max-w-6xl text-center justify-between pt-8 px-4">
        <h1 className=" font-bold text-4xl mx-auto text-center font-[aeonikMedium] my-6 tracking-wider" >
          HERE ARE A FEW OF MY FAVORITE PROJECTS
        </h1>
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4 ">
          {projects.slice(0, 3).map((item) => {
            return <ProjectCard key={item.id} project={item} />;
          })}
        </div>
        <div className=" mt-2">
          <Link href="/projects">
            <FadeRight duration={0.5} delay={0.8}>
              <Link
                href="/about"
                className="underline-magical text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl"
              >
                View all &rarr;
              </Link>
            </FadeRight>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
