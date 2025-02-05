import { anonymousMessagesType } from "@/features/slices/userSlice";
import { formatTime } from "@/features/utils/helpers";

export type chatItemProps = {
  chat: anonymousMessagesType;
  orient?: string | boolean;
};
function ChatItem({ chat, orient }: chatItemProps) {
  const date = formatTime(chat.createdAt);

  if (orient !== "reverse")
    return (
      <>
        <div className="chat chat-start ">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>

          <div className="chat-bubble  bg-[#33312d] text-[#fdf4df] ">
            <div className="text-sm flex pb-1 justify-start font-bold text-green-600">
              {chat?.anonymousName}
            </div>
            <div className="flex    ">
              <div
                className={` leading-5 
                  flex flex-col
                  text-wrap   break-words      `}
              >
                <span className="">

                {chat?.content}
                </span>
                
                <span className="   font-bold opacity-60       text-xs text-nowrap  text-blue-400 contrast-200     ">
                  {date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  else
    return (
      <>
        <div className="chat chat-end">
          <div className="chat-bubble  text-gray-200 bg-[#0B192C]   ">
            <div className="text-sm flex pb-1 justify-end text-[#F4D793]">
              {chat?.anonymousName}
            </div>
            <div className="flex    ">
              <div
                className={` leading-5 
                  flex flex-col
                  text-wrap   break-words      `}
              >
                <span className="text-[#e7e8ea]">

                {chat?.content}
                </span>
                
                <span className="   font-bold opacity-60       text-xs text-nowrap  text-blue-400 contrast-200     ">
                  {date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default ChatItem;
