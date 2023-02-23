import { ResumeSectionDateSidebar } from "../resume-section-data-sidebar";
import { ResumeSectionDateEvents } from "../resume-section-date-events";
import { ResumeSection } from "../resume-section";
import { CV } from "../../../constants/cv";
function Experience() {
  return (
    <ResumeSection title="Experience">
      <div className="spacing-8">
        {CV.experience.map(
          (
            {
              dateFrom,
              dateTo,
              city,
              country,
              title,
              company,
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
                   
                  />
                </div>
              </section>
            );
          }
        )}
      </div>
    </ResumeSection>
  );
}

export default Experience;
