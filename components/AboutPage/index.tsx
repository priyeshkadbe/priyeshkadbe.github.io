import { FC, useEffect, useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import ResumeSection from "./Global/ResumeSection";
import Intro from "./Intro";
import Experience from "./Experience";
import Education from "./Education";
import Sidebar from "./Sidebar";
import Capabilities from "./Capabilities";
function AboutPage() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center gap-x-6 my-4 md:mb-8">
        <Intro />
        <Experience />
        <Capabilities />
        <Education />
      </div>
      <Sidebar />
    </div>
  );
}

export default AboutPage;
