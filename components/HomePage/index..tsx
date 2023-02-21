import CTA from "./CTA";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Works from "./Projects/Work/Works";

function HomePage(){
  return(
    <div>
    <Hero />
    <Works />
    {/* <Projects /> */}
    <Skills/>
    {/* <CTA/> */}
    </div>
  )
}
export default HomePage;