import { FC, useEffect, useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
//import ResumeSection from "./Global/ResumeSection";
import { ResumeSectionDateSidebar } from "./resume-section-data-sidebar";
import { ResumeSectionDateEvents } from "./resume-section-date-events";
import { ResumeSection } from "./resume-section";
import { CV } from "../../constants/cv";

function AboutPage() {
  return (
    <div className="gap-y-14">
      <ResumeSection title="Intro">
        <p className="text-md md:text-xl font-[workSans]  ">{CV.intro} </p>
      </ResumeSection>

      

      <ResumeSection title="Experience">
        <div className="spacing-8">
          {CV.experience
            .sort((a, b) => {
              if (new Date(a.dateFrom) < new Date(b.dateFrom)) return 1;
              if (new Date(a.dateFrom) > new Date(b.dateFrom)) return -1;
              return 0;
            })
            .map(
              (
                {
                  dateFrom,
                  dateTo,
                  city,
                  country,
                  title,
                  responsibilities,
                  company,
                  description,
                  type,
                },
                index,
                arr
              ) => {
                return (
                  <section
                    className="relative mb-auto break-inside-avoid-page"
                    key={index}
                  >
                    <div className="relative flex">
                      <ResumeSectionDateSidebar
                        dateFrom={dateFrom}
                        dateTo={dateTo}
                        showDateRange
                        isLast={index === arr.length - 1}
                      />

                      <ResumeSectionDateEvents
                        name={title}
                        organization={company}
                        city={city}
                        country={country}
                        dateFrom={dateFrom}
                        dateTo={dateTo}
                        showDateRange
                        description={description}
                        responsibilities={responsibilities}
                      />
                    </div>
                  </section>
                );
              }
            )}
        </div>
      </ResumeSection>

      <ResumeSection title="Education">
        <div className="spacing-8">
          {CV.eduction.map(
            (
              {
                dateFrom,
                dateTo,
                city,
                country,
                institution,
                certificate,
                level,
              },
              index,
              arr
            ) => {
              return (
                <section className="relative flex" key={index}>
                  <ResumeSectionDateSidebar
                    dateFrom={dateFrom}
                    dateTo={dateTo}
                    showDateRange={true}
                    
                    isLast={true}
                  />
                  <ResumeSectionDateEvents
                    name={certificate}
                    organization={institution}
                    city={city}
                    country={country}
                    dateFrom={dateFrom}
                    dateTo={dateTo}
                    showDateRange={false}
                    description=""
                    responsibilities={[]}
                  />
                </section>
              );
            }
          )}
        </div>
      </ResumeSection>
    </div>
  );
}

export default AboutPage;
