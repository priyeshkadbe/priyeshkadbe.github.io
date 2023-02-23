import { WorkContainer } from "./WorkContainer";
import { WorkLeft } from "./WorkLeft";
import { WorkRight } from "./WorkRight";
import Link from "next/link";
import ProjectCard from "../../../ProjectPage/ProjectCard";
import { kebabCase } from "../../../../utils/utils";
import More from "./More"
import { Project } from "../../../../types/interfaces";

interface WorkContentProps {
  project: Project;
  progress?: number;
  isLast: boolean; // new prop
}

export default function WorkContent({
  project,
  isLast,
}: WorkContentProps) {
  return (
    <WorkContainer>
      <WorkLeft />
      <WorkRight>
        {isLast ? (
          <More />
        ) : (
          
          <div className="flex flex-col md:flex-row w-full items-center justify-center">
          
          <ProjectCard project={project} />
        </div>

        )}
      </WorkRight>
    </WorkContainer>
  );
}
