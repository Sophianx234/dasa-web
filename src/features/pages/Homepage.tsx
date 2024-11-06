import CTA from "../ui/CTA"
import Header from "../ui/Header"
import Hero from "../ui/Hero"
import Membership from "../ui/Membership"

function Homepage() {
    return (
        <div className="text-stone-900">
            <Header/>
            <Hero/>
            <CTA/>
            <Membership/>
        </div>
    )
}

export default Homepage
