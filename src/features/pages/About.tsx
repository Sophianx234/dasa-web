import AboutSection from "../ui/AboutSection"
import ExecutivesSection from "../ui/ExecutivesSection"
import Impact from "../ui/Impact"
import Values from "../ui/Values"
import Header  from "./../ui/Header"

function About() {
    return (
        <div>
           <Header/>
           <AboutSection/>
           <ExecutivesSection/>
           <Impact/>
           <Values/>
        </div>
    )
}

export default About
