import { FaRegHandshake } from "react-icons/fa"
import Benefit from "./Benefit"

function BenefitsList() {
    return (
        <div className="space-y-3">
               <Benefit icon={<FaRegHandshake className="size-9" /> } title='Networking and mentorship opportunities.' description="Build lifelong connections with mentors and peers who support your journey."/> 
               <Benefit icon={<FaRegHandshake className="size-9" /> } title='Networking and mentorship opportunities.' description="Build lifelong connections with mentors and peers who support your journey."/> 
            </div>
    )
}

export default BenefitsList
