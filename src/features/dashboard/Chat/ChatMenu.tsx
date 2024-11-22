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
  <h1>Text a Member</h1>
    <Link onClick={()=>dispatch(toggleChatMenu())} to='/dashboard/anonymous/view'>
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
