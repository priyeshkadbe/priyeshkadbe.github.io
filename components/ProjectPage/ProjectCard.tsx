import { useState } from "react";
import { kebabCase } from "../../utils/utils";
import Link from "next/link";
import { Project } from "../../types/interfaces";
import Image from "next/image";

interface props {
  project: Project;
}

const borderColors = ["#ff4800", "#c2ebc4", "#5546ff", "#FF9ECE"];

function ProjectCard({ project }: props) {
  const borderColor = borderColors[project.id % borderColors.length];

  return (
    <div
      className={`group max-w-sm mx-4 md:mx-auto flex flex-col  md:justify-center  p-2 my-4 md:my-0   md:p-4 rounded-sm project-card-wrapper `}
      key={project.id}
    >
      <a
        href={project.link || project.github}
        target="_blank"
        className={`w-full  rounded-xl  opacity-50   group-hover:opacity-95 `}
      >
        <img
          className="w-full  rounded-sm grayscale group-hover:rounded-3xl group-hover:grayscale-0"
          src={project.img}
        />
      </a>
      <div className="w-full mt-5">
        <div className="flex  justify-between items-center gap-x-4">
          <a href={project.link || project.github} target="_blank">
            <h3 className="text-lg ml-2 group-hover:font-[aeonikMedium] group-hover:font-bold group-active:font-bold">
              {project.title}
            </h3>
          </a>
          <div className="space-x-2">
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="font-extralight group-hover:text-[#ff4800] group-active:text-[#ff4800] group-hover:underline"
              >
                {/* <Image
                  src="/static/icons/external-link.svg"
                  width={16}
                  height={16}
                  alt="Link Icon"
                /> */}
                live
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="font-extralight group-hover:text-[#ff4800] group-active:text-[#ff4800] group-hover:underline"
              >
                {/* <Image
                  src="/static/icons/github.svg"
                  width={16}
                  height={16}
                  alt="Github Icon"
                /> */}
                github
              </Link>
            )}
          </div>
        </div>
        <p className="text-left ml-2 text-sm group-hover:font-bold group-active:font-bold">
          {project.desc}
        </p>
        <ul className="flex flex-wrap ml-2 items-center mt-2  list-none">
          {project.tags.map((tag: string, index: number) => {
            return (
              <li key={tag}>
                <Link href={`/projects/tag/${kebabCase(tag)}`}>
                  <div className="m-1 group-hover:project-tags-group-hover  group-active:project-tags-group-hover project-tags  text-sm  py-1 px-2 cursor-pointer hover:opacity-75 ">
                    {tag}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
