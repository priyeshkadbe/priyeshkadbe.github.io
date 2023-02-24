type ProjectResponsibility = {
  responsibility: string[];
};

type Projects = {
  [projectName: string]: ProjectResponsibility;
};

type ResumeSectionDateEventsProps = {
  name: string;
  organization: string;
  city: string;
  country: string;
  dateFrom: string;
  dateTo: string;
  showDateRange: boolean;
  projects?: Projects;
};

export const ResumeSectionDateEvents = ({
  name,
  organization,
  city,
  country,
  dateFrom,
  dateTo,
  showDateRange,
  projects,
}: ResumeSectionDateEventsProps) => {
  return (
    <main className="ml-0 spacing-1    ">
      <h3 className="items-baseline text-md tracking-tight spacing-1 ">
        <p className="text-md md:text-xl font-[workSans]  ">{name}</p>{" "}
        <span className="flex flex-wrap items-baseline gap-x-2 ">
          {organization ? (
            <>
              <h4 className=" text-gray-600 ">{organization}</h4>
              <span className="select-none text-xl  ">-</span>
            </>
          ) : null}
          <span className="text-gray-400/80 ">
            {city && country ? (
              <>
                <span className="hidden  sm:inline">{city},</span> {country}
              </>
            ) : (
              <>
                {city}
                {country}
              </>
            )}
          </span>
        </span>
        <div className="flex gap-2 whitespace-nowrap text-xs font-semibold text-gray-500  md:hidden">
          {showDateRange ? (
            <div className="flex">
              <span>
                {new Date(dateFrom)?.toLocaleDateString("en-GB", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
               <span className="select-none text-xl  ">-</span>
              <span>
                {Date.now() > new Date(dateTo).getTime()
                  ? new Date(dateTo)?.toLocaleDateString("en-GB", {
                      month: "short",
                      year: "numeric",
                    })
                  : "Current"}
              </span>
            </div>
          ) : (
            <span>
              {new Date(dateTo)?.toLocaleDateString("en-GB", {
                year: "numeric",
              })}
            </span>
          )}
        </div>
        {projects && (
          <div className="flex flex-col flex-wrap  md:mx-10">
            {Object.entries(projects).map(([projectName, project]) => (
              <div key={projectName} className="py-4">
                <h4 className="ml-2 md:ml-0  md:text-xl">{projectName}</h4>
                <ul className=" list-disc   ">
                  {project.responsibility.map((responsibility, index) => (
                    <li className="list-disc ml-14 " key={index}>
                      <p className="text-sm md:text-lg py-1  tracking-wider flex flex-wrap">
                        {responsibility}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </h3>
    </main>
  );
};
