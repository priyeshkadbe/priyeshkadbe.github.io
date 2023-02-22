import { ResumeSection } from "../resume-section";
import { CV } from "../../../constants/cv";
function Intro() {
  return (
    <ResumeSection title="Intro">
      <p className="text-md md:text-xl font-[workSans]  ">{CV.intro} </p>
    </ResumeSection>
  );
}

export default Intro;
