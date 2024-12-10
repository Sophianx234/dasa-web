import { toggleRevealUploadProduct } from "@/features/slices/navSlice";
import { useAppDispatch} from "@/features/utils/hooks";
import { ReactElement } from "react";

import { Link } from "react-router-dom"

export type bottomNavItem = {
    title:string;
    icon: ReactElement;
    link:string;
}
function BottomNavItem({link,icon,title}:bottomNavItem) {
    const dispatch = useAppDispatch()
   
    if(title.toLowerCase() !== 'wishlist')
    return (
        <Link to={link} className="flex flex-col justify-center items-center group">
                <span>{icon}</span>
                <span className="font-Montserrat font-semibold">{title}</span>
            </Link>
    )
    else return (
    <div className="flex flex-col justify-center items-center group"
    onClick={()=>dispatch(toggleRevealUploadProduct())}>
    <span>{icon}</span>
    <span className="font-Montserrat font-semibold">{title}</span>
</div>)
}

export default BottomNavItem
