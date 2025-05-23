import { useAppSelector } from "@/features/utils/hooks";
import { signupCredentialsExtended } from "@/services/apiServices";
import { AnimatePresence, motion } from "framer-motion";
import { PulseLoader } from "react-spinners";

type isTypingIndicatorProps = {
  typingUser: signupCredentialsExtended;
  type: 'direct'|'channel'

}
function TypingIndicator({typingUser,type}:isTypingIndicatorProps) {
  const {user} = useAppSelector(store=>store.nav)
  const userInfo = user as signupCredentialsExtended

if(typingUser._id !== userInfo._id)
  return (
<AnimatePresence>

    <motion.div
    initial={{opacity:0, scale:0.5 }}
    transition={{duration:0.3,scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 }, ease:'easeInOut'}}
    animate={{opacity:1, scale:1}}
    
    className="chat chat-start  w-screen  ">
              <div className="chat-image avatar">
                {typingUser.anonymousProfile && (
                  <div className="w-8 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src={type === 'channel'?typingUser.anonymousProfile:typingUser.profileImage}
                      />
                  </div>
                )}
              </div>
              <div className="chat-bubble  shadow-lg  bg-[#33312d] text-[#fdf4df] ">
                <div className="text-xs flex  justify-start font-bold text-green-600">
                 {type==='channel'? typingUser?.anonymousName :
                null} 
                  {/* {(chat as anonymousMessagesType)?.sender?.anonymousName ||
                    (chat as dmType).recipient?.firstName} */}
                </div>
                <div className="flex     ">
                  <div
                    className={` leading-5 
                      flex flex-col
                      text-wrap py-2    break-words      `}
                      >
      <PulseLoader color="white" speedMultiplier={0.6} size={8}/>
    
                    <span className="   font-bold opacity-60       text-xs text-nowrap  text-blue-400 contrast-200     ">
                      {/* {date} */}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
                    </AnimatePresence>
          
  )
}


export default TypingIndicator
