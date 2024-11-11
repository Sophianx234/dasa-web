import { GoBell } from "react-icons/go"
import AvatarComponent from "./AvatarComponent"
import { IoMenuOutline } from "react-icons/io5"

function HeaderDashboard() {
    return (
        <div className="bg-dasadeep   pb-10">
                <div className="flex items-center px-4 justify-between border-b-[#33312e33] border-b-2">

                <div className="flex items-center">
                <IoMenuOutline className="size-9 stroke-[#33312ee7]"/>
                <img src="https://i.ibb.co/n8hRM6d/dasalogo-removebg.png" className="w-16" />
                </div>

                <div className="flex items-center justify-center gap-4">
                <GoBell className="size-9 pt-1 fill-[#33312ee7]"/>
                

                <AvatarComponent/>
                
                </div>
                </div>


            </div>
    )
}

export default HeaderDashboard
