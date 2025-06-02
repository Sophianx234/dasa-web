import { toggleSidebar } from "@/features/slices/navSlice"
import { useAppDispatch, useAppSelector, useLogout } from "@/features/utils/hooks"
import { signupCredentialsExtended } from "@/services/apiServices"
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
    const {user}= useAppSelector(store=>store.nav)
    const userInfo = user as signupCredentialsExtended

    function handleNavLinkOnClick(){
        if(navTitle.toLowerCase().includes('logout')){
            handleLogout()
            if(link.includes('logout')) navigate('')
            

        } else if(navTitle.toLowerCase().includes('administrator')){
            dispatch(toggleSidebar())
            navigate(`/${link}/${userInfo._id}`)

        }
         else{

            dispatch(toggleSidebar())
            navigate(`/${link}`)
        }
        

    }
    const dispatch = useAppDispatch()
    return (
        <li  >
            <a  onClick={handleNavLinkOnClick} className="flex  items-center gap-3 border py-3 px-2 font-Montserrat text-xl group hover:bg-dasalight hover:py-3 hover:px-4 rounded-xl transition-all duration-150 font-bold text-[#191817] ">

        {icon}<div  className="flex justify-between  items-center w-full text-base"><span>{navTitle}</span>  <span className="hidden group-hover:block">{arrIcon}</span>
        </div>
            </a>
        </li>
    )
}

export default DashNavItem
