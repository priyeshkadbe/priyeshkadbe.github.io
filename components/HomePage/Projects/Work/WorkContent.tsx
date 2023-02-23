import Image from "next/image";
import { WorkContainer } from "./WorkContainer";
import { WorkLeft } from "./WorkLeft";
import { WorkRight } from "./WorkRight";
import Link from "next/link";
import ProjectCard from "../../../ProjectPage/ProjectCard";
import { kebabCase } from "../../../../utils/utils";

import { Project } from "../../../../types/interfaces";

interface WorkContentProps {
  project: Project;
  progress?: number;
}

export default function WorkContent({
  project,

}: WorkContentProps) {
  return (
    <WorkContainer>
      <WorkLeft />
      <WorkRight >
         <ProjectCard project={project} />
      </WorkRight>
    </WorkContainer>
  );
}
