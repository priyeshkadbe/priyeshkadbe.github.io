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
        {showDateRange ? (
          <div className="spacing-1 flex space-x-2 items-center">
            <div className="whitespace-nowrap h-full">
              {new Date(dateFrom)?.toLocaleDateString("en-GB", {
                month: "short",
                year: "numeric",
              })}
            </div>
            <span className="inline-block text-xl">-</span>
            <div className="whitespace-nowrap h-full">
              {Date.now() > new Date(dateTo).getTime()
                ? new Date(dateTo)?.toLocaleDateString("en-GB", {
                    month: "short",
                    year: "numeric",
                  })
                : "Present"}
            </div>
          </div>
        ) : (
          <span className="whitespace-nowrap">
            {new Date(dateTo)?.toLocaleDateString("en-GB", {
              year: "numeric",
            })}
          </span>
        )}
      </h3>
    </aside>
  );
};
