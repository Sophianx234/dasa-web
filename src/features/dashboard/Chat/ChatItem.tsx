import { anonymousMessagesType } from "@/features/slices/userSlice"
import { genRandomName, isoToDate } from "@/features/utils/helpers"
import { useAppSelector } from "@/features/utils/hooks"
import { signupCredentialsExtended } from "@/services/apiServices"

export type chatItemProps = {
    chat:anonymousMessagesType,
    orient?:string |boolean
}
function ChatItem({chat,orient}:chatItemProps) {
  
  const date = isoToDate(chat.createdAt).includes('a minute')? 'now': isoToDate(chat.createdAt)
  const {user} = useAppSelector(store=>store.nav)
  const {anonymousName} = user as signupCredentialsExtended
    if(orient !=='reverse')
    return (
        <>
       
          <div className="chat chat-start ">
            
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        
        <div className="chat-bubble bg-[#FDF4DF] text-[#33312d] ">{chat?.content}</div>
        <div className="chat-footer  text-black font-bold opacity-60">{date}</div>
      </div>
      </>
)
else return (
<>
    <div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  
  <div className="chat-bubble text-gray-200 whitespace-pre-wrap  break-words ">{chat.content}</div>
  <div className="chat-footer  text-black font-bold opacity-60">{date}</div>
</div>
        </>
    )
}

export default ChatItem
