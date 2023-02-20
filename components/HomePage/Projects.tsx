import Link from "next/link";
import React from "react";
//import SectionTitle from "../global/SectionTitle";
import projects from "../../utils/project";

import ProjectCard from "../ProjectPage/ProjectCard";

function Projects() {
  return (
   <div className="flex justify-center">
     <div className="flex flex-col max-w-6xl text-center justify-between pt-8 px-4">
      {/* <div id="learnmore">
        <SectionTitle title="Here are a few of my favorite projects." />
      </div> */}
      <span className=" font-bold text-4xl mx-auto text-center my-6 tracking-widest">
      HERE ARE A FEW OF MY FAVORITE PROJECTS
      </span>
      <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4 ">
        {projects.slice(0, 3).map((item) => {
          return (
            <ProjectCard key={item.id} project={item} />
          );
        })}
      </div>
      <div className=" mt-2">
        <Link href="/projects">
          <div className="mt-8 max-w-sm border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
            View All
          </div>
        </Link>
      </div>
    </div>
   </div>
  );
}

export default Projects;
