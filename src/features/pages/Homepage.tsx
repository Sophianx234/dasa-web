import Activities from "../ui/Activities"
import CTA from "../ui/CTA"
import Header from "../ui/Header"
import Hero from "../ui/Hero"
import Membership from "../ui/Membership"
import Testimonials from "../ui/Testimonials"

function Homepage() {
    return (
        <div className="text-stone-900">
            <Header/>
            <main>

            <Hero/>
            <CTA/>
            <Membership/>
            <Testimonials/>
            <Activities/>
            </main>

        </div>
    )
}

export default Homepage
