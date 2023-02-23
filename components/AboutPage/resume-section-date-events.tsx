type ResumeSectionDateEventsProps={
  name:string,
  organization:string,
  city:string,
  country:string,
  dateFrom:string,
  dateTo:string,
  showDateRange:boolean,
  projects?:any
}

export const ResumeSectionDateEvents = ({
  name,
  organization,
  city,
  country,
  dateFrom,
  dateTo,
  showDateRange,

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
    </main>
  );
};
