import { ResumeSectionDateSidebar } from "../resume-section-data-sidebar";
import { ResumeSectionDateEvents } from "../resume-section-date-events";
import { ResumeSection } from "../resume-section";
import { CV } from "../../../constants/cv";
function Capabilities() {
  return (
    <ResumeSection title="Capabilities">
      <div className="">
        <section className="m-4">
          <h3 className="items-baseline  text-sm md:text-xl tracking-wider spacing-1 ">
            <h4 className=" text-md md:text-xl font-[workSans]">
              Languages
            </h4>
          </h3>
          <p className=" text-sm md:text-xl">
            {CV.capabilities.languages
              .map((language, index) => language.name)
              .join(", ")}
          </p>
        </section>
        <section className="m-4">
          <h3 className="items-baseline  text-sm md:text-xl tracking-wider spacing-1 ">
            <h4 className=" text-md md:text-xl font-[workSans]">
              Programming Languages
            </h4>
          </h3>
          <p className=" text-sm md:text-xl">
            {CV.capabilities.programmingLanguages
              .map((language, index) => language.name)
              .join(", ")}
          </p>
        </section>
        <section className="m-4">
          <h3 className="items-baseline  text-sm md:text-xl tracking-wider spacing-1 ">
            <h4 className=" text-md md:text-xl font-[workSans]">
              Libraries & Frameworks
            </h4>
          </h3>
          <p className=" text-sm md:text-xl">
            {CV.capabilities.librariesFrameworks
              .map((language, index) => language.name)
              .join(", ")}
          </p>
        </section>
        <section className="m-4">
          <h3 className="items-baseline  text-sm md:text-xl tracking-wider spacing-1 ">
            <h4 className=" text-md md:text-xl font-[workSans]">
              Tools
            </h4>{" "}
          </h3>
          <p className=" text-sm md:text-xl">
            {CV.capabilities.tools
              .map((language, index) => language.name)
              .join(", ")}
          </p>
        </section>
      </div>
    </ResumeSection>
  );
}

export default Capabilities;
