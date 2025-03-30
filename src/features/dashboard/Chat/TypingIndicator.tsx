import { useAppSelector } from "@/features/utils/hooks"
import { SyncLoader } from "react-spinners"

function TypingIndicator({}) {
  const {isTyping} = useAppSelector(store=>store.nav)
  return (
    <div className="chat chat-end">
              <div className="chat-bubble shadow-lg text-gray-200 bg-[#0B192C]   ">
                <div className="text-xs flex pb-1 justify-end text-[#F4D793]">
                  {(chat as anonymousMessagesType)?.sender?.anonymousName ||
                    (chat as dmType).recipient.firstName}
                </div>
                <div className="flex    ">
                  <div
                    className={` leading-5 
                      flex flex-col
                      text-wrap   break-words      `}
                  >
                    {chat.content ?<span className="pb-[.21rem]">{chat.content } </span>:<img className="max-w-[15rem] rounded-sm pb-1" src={chat.fileURL}/>}
    
    
                    <span className="   font-bold opacity-60       text-xs text-nowrap  text-blue-400 contrast-200     ">
                      {date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
  )
}

// {isTyping && <SyncLoader color="white" speedMultiplier={0.6} size={8}/>}
export default TypingIndicator
