import React from "react";
import Header from "./Header";
import Projects from "./Projects";
import More from "./More";
function ProjectPage() {
  return (
    <div className="flex justify-center flex-col">
      <Header />
      <Projects />
      <More />
    </div>
  );
}

export default ProjectPage;
