import React from "react";
import projects from "../../utils/project";
import { Project } from "../../types/interfaces";
import { kebabCase } from "../../utils/utils";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

type ProjectProps = {
  overwriteProjects?: Project[];
};

function Projects({ overwriteProjects }: ProjectProps) {
  const projectsList = overwriteProjects ? overwriteProjects : projects;
  return (
    <div className="mt-10 md:mt-20 px-6 flex  flex-col mx-auto justify-center md:grid md:grid-cols-3 md:gap-6" style={{maxWidth:"1200px"}}>
      {projectsList.map((item) => {
        return <ProjectCard key={item.id} project={item} />;
      })}
    </div>
  );
}

export default Projects;
