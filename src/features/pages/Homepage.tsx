import { AnimatePresence } from "framer-motion"
import Activities from "../ui/Activities"
import Banner from "../ui/Banner"
import BriefAbout from "../ui/BriefAbout"
import CTA from "../ui/CTA"
import CTAFooter from "../ui/CTAFooter"
import Footer from "../ui/Footer"
import Header from "../ui/Header"
import Hero from "../ui/Hero"
import Membership from "../ui/Membership"
import NavLinks from "../ui/NavLinks"
import Questions from "../ui/Questions"
import Testimonials from "../ui/Testimonials"
import { useAppSelector } from "../utils/hooks"

function Homepage() {
    const isOpen = useAppSelector(store=>store.nav.isOpen)
    return (
        <div className="text-stone-900 bg-white overflow-x-hidden">
            
            <Header/>
            <AnimatePresence >
          { isOpen && 
            
          <NavLinks  swap='col'/>
        }
        </AnimatePresence>
            <main>
            <Hero/>
            <BriefAbout/>
            <CTA/>
            <Membership/>
            <Testimonials/>
            <Activities/>
            <CTAFooter/>
            <Questions/>
            <Banner/>
            <Footer/>
            </main>

        </div>
    )
}

export default Homepage
