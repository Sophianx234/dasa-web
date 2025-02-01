import { anonymousMessagesType } from "@/features/slices/userSlice"

export type chatItemProps = {
    chat:anonymousMessagesType,
    orient?:string |boolean
}
function ChatItem({chat,orient}:chatItemProps) {
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
        <div className="chat-header text-blue-500">
          Obi-Wan Kenobi
          <time className="text-xs opacity-50 ">12:45</time>
        </div>
        <div className="chat-bubble bg-[#FDF4DF] text-[#33312d] ">{chat?.content}</div>
        <div className="chat-footer opacity-50 text-blue-900">Delivered</div>
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
  <div className="chat-header text-blue-500">
    Anakin
    <time className="text-xs opacity-100 ">12:46</time>
  </div>
  <div className="chat-bubble text-gray-200">{chat.content}</div>
  <div className="chat-footer opacity-50 text-blue-900">Seen at 12:46</div>
</div>
        </>
    )
}

export default ChatItem
