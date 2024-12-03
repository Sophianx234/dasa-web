import { ReactElement } from "react";
import { BiSolidHomeCircle } from "react-icons/bi"
import { Link } from "react-router-dom"

export type bottomNavItem = {
    title:string;
    icon: ReactElement;
    link:string;
}
function BottomNavItem({icon,title}:bottomNavItem) {
    return (
        <Link to='' className="flex flex-col justify-center items-center">
                <span>{icon}</span>
                <span className="font-Montserrat font-semibold">{title}</span>
            </Link>
    )
}

export default BottomNavItem
