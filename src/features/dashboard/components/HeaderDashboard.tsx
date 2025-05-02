import { toggleSidebar } from "@/features/slices/navSlice"
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks"
import { GoBell } from "react-icons/go"
import { IoMenuOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import AvatarComponent from "./AvatarComponent"
import { signupCredentialsExtended } from "@/services/apiServices"

function HeaderDashboard() {
    const dispatch = useAppDispatch()
    const {user,notifications} = useAppSelector(store=>store.nav)
    const userInfo = user as signupCredentialsExtended
    
    
    
    return (
        <div className="bg-dasadeep    pb-10 mb-10 sticky  z-40 -top-1 left-0 right-0">
                <div className="flex items-center px-4 pt-2 justify-between border-b-[#33312e33] border-b-2 ">

                <div className="flex items-center">
                    <button onClick={()=>dispatch(toggleSidebar())} className="border  border-transparent hover:border rounded-md duration-100 hover:border-dasalight hover:scale-105">

                <IoMenuOutline className="size-9 stroke-[#33312ee7]"/>
                    </button>
                    <Link to='/dashboard/overview' className="hover:scale-105">
                <img src="https://i.ibb.co/n8hRM6d/dasalogo-removebg.png" className="w-16 " />
                    </Link>
                </div>

                <div className="flex items-center justify-center gap-4">
                    <Link to='/dashboard/notifications'
                    className="border  border-transparent hover:border group rounded-md duration-100 hover:border-dasalight relative">
                      {notifications.length?  <div className="absolute -right-1 -top-1 text-xs bg-dasalight px-2 py-1 shadow-md  font-mulish font-bold rounded-full group-hover:scale-110 z-30">{notifications.length}</div>:null}
                     

                <GoBell className="size-9 pt-1 fill-[#33312ee7] group-hover:scale-105"/>
                    </Link>
                
        <Link to={`/dashboard/account/${userInfo._id}`} className="hover:scale-105">

                <AvatarComponent/>
        </Link>
                
                </div>
                </div>


            </div>
    )
}

export default HeaderDashboard
