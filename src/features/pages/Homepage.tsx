import Activities from "../ui/Activities"
import BriefAbout from "../ui/BriefAbout"
import CTA from "../ui/CTA"
import CTAFooter from "../ui/CTAFooter"
import Header from "../ui/Header"
import Hero from "../ui/Hero"
import Membership from "../ui/Membership"
import Questions from "../ui/Questions"
import Testimonials from "../ui/Testimonials"

function Homepage() {
    return (
        <div className="text-stone-900">
            <Header/>
            <main>
            <Hero/>
            <BriefAbout/>
            <CTA/>
            <Membership/>
            <Testimonials/>
            <Activities/>
            <CTAFooter/>
            <Questions/>
            </main>

        </div>
    )
}

export default Homepage
