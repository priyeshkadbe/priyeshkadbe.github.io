type ResumeSectionDateEventsProps={
  name:string,
  organization:string,
  city:string,
  country:string,
  dateFrom:string,
  dateTo:string,
  showDateRange:boolean,
  description:string|undefined,
  responsibilities:any,
  bullets?:boolean,
}

export const ResumeSectionDateEvents = ({
  name,
  organization,
  city,
  country,
  dateFrom,
  dateTo,
  showDateRange,
  description,
  responsibilities,
  bullets = true,
}:ResumeSectionDateEventsProps) => {
  return (
    <main className="ml-0 spacing-1    ">
      <h3 className="items-baseline text-md tracking-tight spacing-1 ">
        <p  className="text-md md:text-xl font-[workSans]  ">
          {name}
        </p>{" "}
        <span className="flex flex-wrap items-baseline gap-x-2 ">
          {organization ? (
            <>
              <h4 className=" text-gray-600 ">
                {organization}
              </h4>
              <span className="select-none text-sm text-gray-300 ">
                -
              </span>
            </>
          ) : null}
          <span className="text-gray-400/80 ">
            {city && country ? (
              <>
                <span className="hidden  sm:inline">{city},</span>{" "}
                {country}
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
              <span className="font-bold">-</span>
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
      </h3>
      {description ? (
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      ) : null}
      {bullets ? (
        <ul className="list-outside list-disc pl-4 text-sm text-gray-500 ">
          {responsibilities.map((responsibility:any, index:any) => (
            <li className="pl-3" key={index}>
              <p className="text-sm md:text-md font-[aeonikPro]">{responsibility.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <>
          {responsibilities.map((responsibility:any, index:any) => (
            <p
              className=" text-sm md:text-md text-gray-500 "
              key={index}
            >
              {responsibility.content}
            </p>
          ))}
        </>
      )}
    </main>
  );
};
