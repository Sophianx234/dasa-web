import { FaRegHandshake } from "react-icons/fa"
import Benefit from "./Benefit"
import { GiGlassCelebration } from "react-icons/gi"
import {  IoStorefrontOutline } from "react-icons/io5"
import { CiLock } from "react-icons/ci"
import { BsIncognito } from "react-icons/bs"

function BenefitsList() {
    return (
        <div className="space-y-3">
               <Benefit icon={<FaRegHandshake className="size-9" /> } title='Networking and Mentorship Opportunities.' description="Build lifelong connections with mentors and peers who support your journey."/> 
               <Benefit icon={<GiGlassCelebration className="size-9" /> } title='Access to Cultural Events and Resources.' description="Celebrate our culture through exclusive events and resources, only available to DaSA members."/> 
               <Benefit icon={<CiLock className="size-9" /> } title='Exclusive Member Forums and Discussions.' description="Share ideas, seek advice, and contribute to member-only forums designed for collaboration."/> 
               <Benefit icon={<BsIncognito className="size-9" /> } title='Anonymous Messages .' description="Express yourself freely with anonymous messaging to members without revealing who you are."/> 
               <Benefit icon={<IoStorefrontOutline className="size-9" /> } title='DaSA Business Hub' description="Gain exclusive access to the DaSA Marketplace, where you can showcase your business, connect with fellow entrepreneurs, and grow within a supportive community."/> 
            </div>
    )
}

export default BenefitsList
