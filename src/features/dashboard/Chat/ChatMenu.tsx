import { toggleChatMenu } from "@/features/slices/navSlice"
import { useAppDispatch } from "@/features/utils/hooks"
import { motion } from "framer-motion"
import { AiFillMessage } from "react-icons/ai"
import { BiMessageDetail } from "react-icons/bi"
import { IoIosClose } from "react-icons/io"
import { IoArrowBackOutline } from "react-icons/io5"
import { Link } from "react-router-dom"

function ChatMenu() {
    const dispatch = useAppDispatch()
    return (
        <>
        <motion.ul
        exit={{
            y: '-100vh',
            opacity: 0
        }}
        initial={{
            y: '-100vh',
            opacity: 0

        }}
        animate={{
            y: 0,
            opacity: 1,
            
            

        }}
        transition={{type:"tween"}}
        
        className="menu bg-white lg:menu-horizontal rounded-box fixed z-40 inset-0 ">
        <div >
    <a className="flex  items-center mx-2 justify-between" >
    <IoIosClose onClick={()=>dispatch(toggleChatMenu())}className="size-9 fill-gray-700 "/>
      
      <div></div>
      <span className="flex ">

      <img src="https://i.ibb.co/n8hRM6d/dasalogo-removebg.png" className="w-16" alt="" />
      </span>
    </a>
  </div>
  
  <li>
    <Link onClick={()=>dispatch(toggleChatMenu())} to='/dashboard/anonymous/view'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      View Anonymous
      <span className="badge badge-sm">99+</span>
    </Link>
  </li>
  <li>
    <Link onClick={()=>dispatch(toggleChatMenu())} to='/dashboard/anonymous/conversation'>
    <BiMessageDetail className="size-6"/>
      Text a Member
      <span className="badge badge-sm badge-warning">NEW</span>
    </Link>
  </li>
  <li>
    <a>
      Stats
      <span className="badge badge-xs badge-info"></span>
    </a>
  </li>
</motion.ul>
          </>
    )
}

export default ChatMenu
