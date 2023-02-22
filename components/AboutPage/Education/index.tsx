import { ResumeSectionDateSidebar } from "../resume-section-data-sidebar";
import { ResumeSectionDateEvents } from "../resume-section-date-events";
import { ResumeSection } from "../resume-section";
import { CV } from "../../../constants/cv";
function Education() {
  return (
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
  );
}

export default Education;
