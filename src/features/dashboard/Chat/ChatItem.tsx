import { anonymousMessagesType } from "@/features/slices/userSlice";
import { formatTime } from "@/features/utils/helpers";
import { useAppSelector } from "@/features/utils/hooks";
import { dmType, signupCredentialsExtended } from "@/services/apiServices";

export type chatItemProps = {
  chat: anonymousMessagesType | dmType;
  orient?: string | boolean;
};
function ChatItem({ chat, orient }: chatItemProps) {
  const date = formatTime(chat.createdAt);
  const { user } = useAppSelector((store) => store.nav);
  const userInfo = user as signupCredentialsExtended;
  // const {user} = useQuery()
  if (orient !== "reverse")
    return (
      <>
        <div className="chat chat-start  ">
          <div className="chat-image avatar">
            {(chat as anonymousMessagesType).sender?.anonymousProfile && (
              <div className="w-8 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src={(chat as anonymousMessagesType).sender?.anonymousProfile}
                />
              </div>
            )}
          </div>
          <div className="chat-bubble shadow-lg  bg-[#33312d] text-[#fdf4df] ">
            <div className="text-xs flex  justify-start font-bold text-green-600">
              {(chat as anonymousMessagesType)?.sender?.anonymousName ||
                (chat as dmType).recipient?.firstName}
            </div>
            <div className="flex    ">
              <div
                className={` leading-5 
                  flex flex-col
                  text-wrap    break-words      `}
              >
                {chat.content ?<span className="pb-[.21rem]">{chat.content } </span>:<img src={chat.fileURL}/>}

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
                {chat.content ?<span className="pb-[.21rem]">{chat.content } </span>:<img className="max-w-[15rem]" src={chat.fileURL}/>}


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
