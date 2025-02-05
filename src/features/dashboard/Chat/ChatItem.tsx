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

          <div className="chat-bubble  bg-[#FDF4DF] text-[#33312d] ">
            <div className="text-sm flex pb-1 justify-start font-bold text-green-700">
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
                
                <span className="  text-black font-bold opacity-60       text-xs text-nowrap       ">
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
          <div className="chat-bubble  text-gray-200  ">
            <div className="text-sm flex pb-1 justify-end">
              {chat?.anonymousName}
            </div>
            <div className="flex justify-between   items-center">
              <div className="     flex flex-row-reverse leading-5     ">
                {chat?.content}
                <div className="chat-footer  text-black font-bold opacity-60 flex justify-end    text-xs text-nowrap self-end   pb-1">
                  {date}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default ChatItem;
