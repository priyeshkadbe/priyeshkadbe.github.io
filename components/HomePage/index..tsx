import CTA from "./CTA";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

function HomePage(){
  return(
    <div>
    <Hero />
    <Projects />
    <Skills/>
    {/* <CTA/> */}
    </div>
  )
}
export default HomePage;