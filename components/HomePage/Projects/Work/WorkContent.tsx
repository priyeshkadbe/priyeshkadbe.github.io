import Image from 'next/image'
import { WorkContainer } from './WorkContainer'
import { WorkLeft } from './WorkLeft'
import { WorkRight } from './WorkRight'

import ProjectCard from "../../../ProjectPage/ProjectCard";

import { Project } from "../../../../types/interfaces";

interface WorkContentProps {

  project: Project;
  progress?: number;
}

export default function WorkContent({ project, progress = 0 }: WorkContentProps) {
  return (
    <WorkContainer>
      <WorkLeft/>
      <WorkRight progress={progress}>
        <div className=" ">
          <ProjectCard project={project} />
        </div>
      </WorkRight>
    </WorkContainer>
  )
}