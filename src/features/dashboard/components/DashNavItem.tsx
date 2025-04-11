import { toggleSidebar } from "@/features/slices/navSlice"
import { useAppDispatch, useLogout } from "@/features/utils/hooks"
import { ReactElement } from "react"
import { useNavigate } from "react-router-dom"

export type dashNavItem = {
    icon: ReactElement,
    arrIcon: ReactElement,
    navTitle: string,
    link: string
}
function DashNavItem({icon, arrIcon,navTitle, link}:dashNavItem) {
    const navigate = useNavigate()
    const {handleLogout} = useLogout(navigate)
    function handleNavLinkOnClick(){
        if(navTitle.toLowerCase().includes('logout')){
            handleLogout()
            if(link.includes('logout')) navigate('')
            

        } else{

            dispatch(toggleSidebar())
            navigate(`/${link}`)
        }
        

    }
    const dispatch = useAppDispatch()
    return (
        <li  >
            <a  onClick={handleNavLinkOnClick} className="flex  items-center gap-3 border py-4 px-2 font-Montserrat text-xl group hover:bg-dasalight hover:py-4 hover:px-4 rounded-xl transition-all duration-150 font-bold text-[#191817] ">

        {icon}<div  className="flex justify-between  items-center w-full"><span>{navTitle}</span>  <span className="hidden group-hover:block">{arrIcon}</span>
        </div>
            </a>
        </li>
    )
}

export default DashNavItem
