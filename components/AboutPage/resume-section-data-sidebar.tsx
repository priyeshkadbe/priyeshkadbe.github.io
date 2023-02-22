import clsx from "clsx";
import { FC } from "react";

type ResumeSectionDateSidebarProps = {
  dateFrom: string | Date;
  dateTo: string | Date;
  isLast: boolean;
  description?: string;
  showDateRange: boolean;
  sidebar?: string;
};
export const ResumeSectionDateSidebar: FC<ResumeSectionDateSidebarProps> = ({
  dateFrom,
  dateTo,
  isLast,
  description,
  showDateRange,
  sidebar = "",
}) => {
  return (
    <aside className="absolute top-1 right-20 mx-4 hidden h-full  md:block  ">
      <h3 className="absolute top-0   text-right text-xs font-medium  text-gray-400 ">
        {sidebar
          ? <span className="whitespace-nowrap">{sidebar}</span>
          : <>
              {showDateRange
                ? <div className="spacing-1 flex space-x-4">
                    <div className="whitespace-nowrap ">
                      {new Date(dateFrom)?.toLocaleDateString("en-GB", {
                        month: "short",
                        year: "numeric",
                      })}
                      <span className="hidden md:block text-gray-400"> - </span>
                    </div>
                    <div className="whitespace-nowrap">
                      {Date.now() > new Date(dateTo).getTime()
                        ? new Date(dateTo)?.toLocaleDateString("en-GB", {
                            month: "short",
                            year: "numeric",
                          })
                        : "Current"}
                    </div>
                  </div>
                : <span className="whitespace-nowrap">
                    {new Date(dateTo)?.toLocaleDateString("en-GB", {
                      year: "numeric",
                    })}
                  </span>}
            </>}
      </h3>
      {/* <div className="absolute left-20 top-0 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-gray-200 d:bg-gray-400">
        <div className="h-2 w-2 rounded-full bg-gray-400 d:bg-gray-700" />
      </div>
      <i
        className={clsx(
          "absolute left-20 top-6 h-[calc(100%-2px)] w-0.5 -translate-x-1/2",
          isLast
            ?  "hidden bg-gradient-to-b from-gray-200 to-transparent d:from-gray-800 print:!via-gray-200"
            : "bg-gray-200 d:bg-gray-800"
        )}
      /> */}
    </aside>
  );
};
