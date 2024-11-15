import { toggleSidebar } from "@/features/slices/navSlice"
import { useAppDispatch } from "@/features/utils/hooks"
import { ReactElement } from "react"
import { Link } from "react-router-dom"

export type dashNavItem = {
    icon: ReactElement,
    arrIcon: ReactElement,
    navTitle: string,
    link: string
}
function DashNavItem({icon, arrIcon,navTitle, link}:dashNavItem) {
    const dispatch = useAppDispatch()
    return (
        <li  >
            <Link to={`/${link}`} onClick={()=>dispatch(toggleSidebar())} className="flex  items-center gap-3 border py-4 px-2 font-Montserrat text-xl group hover:bg-dasalight hover:py-4 hover:px-4 rounded-xl transition-all duration-150 font-bold text-[#191817] ">

        {icon}<div  className="flex justify-between  items-center w-full"><span>{navTitle}</span>  <span className="hidden group-hover:block">{arrIcon}</span>
        </div>
            </Link>
        </li>
    )
}

export default DashNavItem
