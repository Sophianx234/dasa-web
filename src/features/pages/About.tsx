import AboutSection from "../ui/AboutSection"
import ExecutivesSection from "../ui/ExecutivesSection"
import Footer from "../ui/Footer"
import Impact from "../ui/Impact"
import Values from "../ui/Values"
import Header  from "./../ui/Header"

function About() {
    return (
        <div>
           <Header/>
           <main>

           <AboutSection/>
           <ExecutivesSection/>
           <Impact/>
           <Values/>
           <Footer/>
           </main>
        </div>
    )
}

export default About
