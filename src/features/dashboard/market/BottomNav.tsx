import { BiSolidHomeCircle } from "react-icons/bi"
import { Link } from "react-router-dom"
import BottomNavItem from "./BottomNavItem"
import { FiPlusCircle } from "react-icons/fi"
import { FaRegHeart, FaRegUser } from "react-icons/fa6"
import { BsHouse } from "react-icons/bs"
import { GoHome } from "react-icons/go"

function BottomNav() {
    return (
        <div className="fixed bottom-0 z-40 bg-white left-0 flex  items-center justify-center gap-8 right-0 shadow-top py-3 pt-4">
            <BottomNavItem icon={<GoHome className="size-5"/>} title="Home" link="/dashboard/market"/>
            <BottomNavItem icon={<FaRegHeart className="size-5"/>} title="Wishlist" link="/dashboard/market/x360e/wishlist"/>
            
            <BottomNavItem icon={<FiPlusCircle className="size-5"/>} title="Add" link="/"/>
            <BottomNavItem icon={<FaRegUser className="size-5"/>} title="profile" link="/dashboard/account"/>
        </div>
    )
}

export default BottomNav
