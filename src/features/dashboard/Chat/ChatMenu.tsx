import { toggleChatMenu } from "@/features/slices/navSlice"
import { useAppDispatch } from "@/features/utils/hooks"
import { motion } from "framer-motion"
import { IoIosClose } from "react-icons/io"
import ChatProfile from "./ChatProfile"

function ChatMenu() {
    const dispatch = useAppDispatch()
    const profileImgs = [
      "https://i.ibb.co/tKPn0sJ/photo-25-2024-10-31-06-50-45.jpg",
      "https://i.ibb.co/jvRPsZd/photo-30-2024-10-31-06-51-41.jpg",
      "https://i.ibb.co/09h7ZjL/photo-26-2024-10-31-06-51-41.jpg",
      "https://i.ibb.co/LN31XS8/photo-6-2024-10-31-06-51-41.jpg",
      "https://i.ibb.co/xLJRnzX/photo-84-2024-10-31-06-52-36.jpg"
    ];
    
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
  
  <h1 className="font-poppins text-2xl font-semibold text-slate-800 pl-5 pb-2">Chats</h1>
  <div className="divide-y space-y-2">

  {profileImgs.map(profile=><ChatProfile profile={profile} text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet ? " name="Abdullai Yaseera"/>)}
  </div>
</motion.ul>
          </>
    )
}

export default ChatMenu
