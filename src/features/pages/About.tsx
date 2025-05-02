import AboutSection from "../ui/AboutSection"
import ConstitutionSection from "../ui/ConstitutionSection"
import ExecutivesSection from "../ui/ExecutivesSection"
import Footer from "../ui/Footer"
import Impact from "../ui/Impact"
import NavLinks from "../ui/NavLinks"
import Values from "../ui/Values"
import { useAppSelector } from "../utils/hooks"
import Header  from "./../ui/Header"

function About() {
    const isOpen = useAppSelector(store=>store.nav.isOpen)
    return (
        <div>
           <Header/>
           { isOpen && <NavLinks swap='col'/>}
           <main>

           <AboutSection/>
           <ExecutivesSection/>
           <Impact/>
           <Values/>
           <ConstitutionSection/>
           <Footer/>
           </main>
        </div>
    )
}

export default About
