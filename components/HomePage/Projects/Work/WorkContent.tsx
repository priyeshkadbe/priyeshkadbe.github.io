import { WorkContainer } from "./WorkContainer";
import { WorkLeft } from "./WorkLeft";
import { WorkRight } from "./WorkRight";
import Link from "next/link";
import ProjectCard from "../../../ProjectPage/ProjectCard";
import More from "./More";
import { Project } from "../../../../types/interfaces";
import Image from "next/image";
interface WorkContentProps {
  project: Project;
  isLast: boolean; // new prop
}

export default function WorkContent({ project, isLast }: WorkContentProps) {
  return (
    <WorkContainer>
      <WorkLeft />
      <WorkRight>
        {isLast ? (
          <More />
        ) : (
          <div className="flex flex-col md:flex-row w-full items-center justify-center">
            <img src={project.img} className=""   alt="" />
            {/* <Image src={project.img} className="grayscale hover:grayscale-0"  alt="" height={40} width={400}/> */}
          </div>
        )}
      </WorkRight>
    </WorkContainer>
  );
}
