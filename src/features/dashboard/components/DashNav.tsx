import { Link } from "react-router-dom"
import { RiHome3Line, RiSecurePaymentLine } from "react-icons/ri";
import { TbLogout2, TbMessage } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { MdOutlineStore } from "react-icons/md";
import AvatarComponent from "./AvatarComponent";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { PiSidebarFill } from "react-icons/pi";
import { useAppDispatch } from "@/features/utils/hooks";
import { toggleSidebar } from "@/features/slices/navSlice";
import { motion } from "framer-motion";
function DashNav() {
    const dispatch = useAppDispatch() 
    
    return (
        <motion.div
        exit={{opacity:0, x:'-100vw', }}
        initial= {
        {
            opacity: 0,
            x:'-100vw'
        }
        }
        animate={{
            x:0,
            opacity: 1, type:'spring',
            
        }}
        className="fixed overflow-x-auto -top-1 bottom-0 bg-white  left-0 right-0  z-40   pb-5 px-4">
            <div className="flex flex-col justify-between h-dvh pt-8 pb-4">
            <div className="flex items-center justify-between pb-4">
                <img src="https://i.ibb.co/n8hRM6d/dasalogo-removebg.png" alt="" className="w-16"/>
                <button onClick={()=>dispatch(toggleSidebar())}>

                <PiSidebarFill className="size-9 hover:fill-dasadeep" />
                </button>
            </div>

            <div className="flex flex-col justify-between h-full">

            <ul className="space-y-4  ">
                <li className="flex  items-center gap-3 border py-4 px-2 font-Montserrat text-xl group hover:bg-dasalight hover:py-4 hover:px-4 rounded-xl transition-all duration-150 font-bold text-[#191817] ">
                <RiHome3Line className="size-8"/><Link to='dashboard/overview' className="flex justify-between  items-center w-full"><span>Home</span>  <span className="hidden group-hover:block"><IoIosArrowForward /></span>
                </Link></li>
                <li className="flex items-center gap-3 font-Montserrat group text-xl  border py-4 px-2 hover:bg-dasalight hover:py-4 hover:px-4 rounded-xl transition-all duration-150 font-bold text-[#191817] ">
                <IoNotificationsOutline className="size-8"/><Link to='dashboard/overview' className="w-full flex justify-between items-center">Notifications <span className="hidden group-hover:block"><IoIosArrowForward/></span>
                </Link></li>
                <li className="flex items-center gap-3 font-Montserrat text-xl border py-4 px-2 hover:bg-dasalight hover:py-4 hover:px-4 rounded-xl transition-all group  duration-150 font-bold text-[#191817] ">
                <TbMessage className="size-8"/><Link to='dashboard/overview' className="w-full flex justify-between items-center ">Anonymous Message <span className="hidden group-hover:block"><IoIosArrowForward/></span>
                </Link></li>
                <li className="flex items-center gap-3 font-Montserrat text-xl hover:bg-dasalight hover:py-4 hover:px-4 rounded-xl transition-all duration-150 border py-4 px-2 font-bold text-[#191817] group ">
                <GrGallery className="size-7"/><Link to='dashboard/overview' className="w-full flex justify-between items-center">Gallery <span className="hidden group-hover:block"><IoIosArrowForward/></span>
                </Link></li>
                <li className="flex items-center gap-3 font-Montserrat text-xl border py-4 px-2 hover:bg-dasalight hover:py-4 hover:px-4 rounded-xl transition-all duration-150 font-bold text-[#191817] group ">
                <MdOutlineStore className="size-8"/><Link to='dashboard/overview' className="w-full flex justify-between items-center">DaSA Market Center <span className="hidden group-hover:block"><IoIosArrowForward/></span>
                </Link></li>
                <li className="flex items-center gap-3 font-Montserrat text-xl border py-4 px-2 hover:bg-dasalight hover:py-4 hover:px-4 rounded-xl transition-all duration-150 font-bold text-[#191817] group ">
                <RiSecurePaymentLine className="size-8"/><Link to='dashboard/overview' className="w-full flex justify-between items-center">Payment<span className="hidden group-hover:block"><IoIosArrowForward/></span>
                </Link></li>
                <li className="flex items-center gap-3 font-Montserrat text-xl border py-4 px-2 hover:bg-dasalight hover:py-4 hover:px-4 rounded-xl transition-all duration-150 font-bold text-[#191817] group ">
                <FaRegUser className="size-8"/><Link to='dashboard/overview' className="w-full flex justify-between items-center">Account<span className="hidden group-hover:block"><IoIosArrowForward/></span>
                </Link></li>
                <li className="flex items-center gap-3 font-Montserrat text-xl border py-4 px-2 hover:bg-dasalight hover:py-4 hover:px-4 rounded-xl transition-all duration-150 font-bold text-[#191817] group ">
                <TbLogout2 className="size-8"/><Link to='dashboard/overview' className="w-full flex justify-between items-center">Logout<span className="hidden group-hover:block"><IoIosArrowForward/></span>
                </Link></li>
            </ul>
            <div className="flex items-center space-x-2 pt-10">
                <AvatarComponent/>
                <div className="">
                    <h1 className="font-bold font-mulish text-sm">Damian</h1>
                    <p className="text-xs">@xlr8</p>
                </div>
            </div>
        </div>
            </div>
            </motion.div>
    )
}

export default DashNav
