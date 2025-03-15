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
   
    if(title.toLowerCase() !== 'add')
    return (
        <Link to={link} className="flex flex-col justify-center items-center group pb-2 border-b-[3px]  px-2 border-transparent hover:border-dasadeep rounded-sm duration-200 ease-out">
                <span>{icon}</span>
                <span className="font-Montserrat font-semibold">{title}</span>
            </Link>
    )
    else return (
    <div className="flex flex-col justify-center items-center group pb-2 border-b-[3px]  px-2 border-transparent hover:border-dasadeep rounded-sm transition-all duration-200 ease-in-out"
    onClick={()=>dispatch(toggleRevealUploadProduct())}>
    <span>{icon}</span>
    <span className="font-Montserrat font-semibold">{title}</span>
</div>)
}

export default BottomNavItem
