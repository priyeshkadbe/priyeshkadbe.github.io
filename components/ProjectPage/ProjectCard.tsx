import { kebabCase } from "../../utils/utils";
import Link from "next/link";
import { Project } from "../../types/interfaces";

interface props {
  key: number;
  project: Project;
}

function ProjectCard({ project }: props) {
  return (
    <div
      className="max-w-sm mx-auto flex flex-col  md:justify-center border p-2 my-4 md:my-0 hover:border-[#c2ebc4]  md:p-4 rounded-sm "
      key={project.id}
    >
      <a
        href={project.link || project.github}
        target="_blank"
        className={`w-full relative rounded-xl p-2   hover:opacity-75 `}
      >
        <img className="w-full  rounded-sm" src={project.img} />
      </a>
      <div className="w-full mt-5">
        <div className="flex  justify-between">
          <a href={project.link || project.github} target="_blank">
            <h3 className="text-lg ml-2 font-bold">{project.title}</h3>
          </a>
          <div className="space-x-2">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                {/* <Image
                  src="/static/icons/external-link.svg"
                  width={16}
                  height={16}
                  alt="Link Icon"
                /> */}
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                {/* <Image
                  src="/static/icons/github.svg"
                  width={16}
                  height={16}
                  alt="Github Icon"
                /> */}
              </a>
            )}
          </div>
        </div>
        <p className="text-left ml-2 text-sm ">{project.desc}</p>
        <ul className="flex flex-wrap ml-2 items-center mt-2  list-none">
          {project.tags.map((tag: string, index: number) => {
            return (
              <li key={tag}>
                <Link href={`/projects/tag/${kebabCase(tag)}`}>
                  <div className="m-1 border border-opacity-40  text-sm  py-1 px-2 cursor-pointer hover:opacity-75">
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
