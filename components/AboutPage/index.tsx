import { FC, useEffect, useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
//import ResumeSection from "./Global/ResumeSection";
import { ResumeSectionDateSidebar } from "./resume-section-data-sidebar";
import { ResumeSectionDateEvents } from "./resume-section-date-events";
import { ResumeSection } from "./resume-section";
import { CV } from "../../constants/cv";
import Education from "./Education";
import Experience from "./Experience";
import Intro from "./Intro";
import Capabilities from "./Capabilities";
function AboutPage() {
  return (
    <div className="gap-y-14 pb-14">
      <Intro />
      <Education />
      <Experience />
      <Capabilities />
    </div>
  );
}

export default AboutPage;
