import { GoBell } from "react-icons/go"
import AvatarComponent from "./AvatarComponent"
import { IoMenuOutline } from "react-icons/io5"
import { useAppDispatch } from "@/features/utils/hooks"
import { toggleSidebar } from "@/features/slices/navSlice"
import { Link } from "react-router-dom"

function HeaderDashboard() {
    const dispatch = useAppDispatch()
    return (
        <div className="bg-dasadeep    pb-10 mb-10 sticky  z-40 top-0 left-0 right-0">
                <div className="flex items-center px-4 justify-between border-b-[#33312e33] border-b-2 ">

                <div className="flex items-center">
                    <button onClick={()=>dispatch(toggleSidebar())} className="border  border-transparent hover:border rounded-md duration-100 hover:border-dasalight hover:scale-105">

                <IoMenuOutline className="size-9 stroke-[#33312ee7]"/>
                    </button>
                    <Link to='/dashboard/overview' className="hover:scale-105">
                <img src="https://i.ibb.co/n8hRM6d/dasalogo-removebg.png" className="w-16" />
                    </Link>
                </div>

                <div className="flex items-center justify-center gap-4">
                    <Link to='notifications'
                    className="border  border-transparent hover:border rounded-md duration-100 hover:border-dasalight">

                <GoBell className="size-9 pt-1 fill-[#33312ee7] hover:scale-105"/>
                    </Link>
                
        <Link to='account' className="hover:scale-105">

                <AvatarComponent/>
        </Link>
                
                </div>
                </div>


            </div>
    )
}

export default HeaderDashboard
