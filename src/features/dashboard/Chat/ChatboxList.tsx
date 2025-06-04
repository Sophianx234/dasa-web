import { useChat } from "@/hooks/useChat";
import { dmType } from "@/services/apiServices";
import ChatItem from "./ChatItem";
import ChatSendInput, { sendMessageFormValues } from "./ChatSendInput";

import { setEmojiMart } from "@/features/slices/navSlice";
import { formatChatDate } from "@/features/utils/helpers";
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks";
import { addEmoji, emojiType } from "@/hooks/addEmoji";
import Picker from "@emoji-mart/react";
import { useEffect, useRef } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import TypingIndicator from "./TypingIndicator";

type chatBoxListProps = {
  type: "direct" | "channel";
};
function ChatboxList({ type }: chatBoxListProps) {
  const { watch, setValue, ...hookForm } = useForm<sendMessageFormValues>();
  const emojiRef = useRef<HTMLDivElement | null>(null);
  let lastRenderedDate = "";

  const dispatch = useAppDispatch();
  const { messages, userInfo, lastMessageRef, directMessages } = useChat({
    type,
  });
  const { openEmojiMart, isTyping, typingUsers} = useAppSelector(
    (store) => store.nav
  );
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        emojiRef.current &&
        !emojiRef.current.contains(event.target as Node)
      ) {
        dispatch(setEmojiMart(false));
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [emojiRef, dispatch]);

  if (type === "channel")
    return (
      <>
        <div className="relative overflow-y-scroll overflow-x-hidden h-dvh z-30">
          {messages &&
            messages?.map((message, i) =>{
              const formattedDate = formatChatDate(message.createdAt);
              const shouldRenderDate = formattedDate !== lastRenderedDate;
              lastRenderedDate = formattedDate;
                return (

                  <div
                  key={i}
                  ref={i === messages.length - 1 ? lastMessageRef : null}
                  >
                 {shouldRenderDate && <div className="flex justify-center sticky top-0 my-2 text-sm z-50"><span className="bg-[#f4e9dd] px-3 py-2 font-medium shadow-sm   font-poppins rounded-md">{formattedDate}</span></div>}
                <ChatItem
                  chat={message}
                  orient={message.sender?._id === userInfo._id && "reverse"}
                  />
              </div>
                )
          }
            
            )}
            {isTyping &&
              typingUsers.map((user) => (
                <TypingIndicator typingUser={user} type={type} />
              ))}
        </div>
        <div className="grid grid-cols-[.5fr_1fr] " ref={emojiRef}>
          {openEmojiMart && (
            <Picker
              previewPosition="none"
              onEmojiSelect={(emoji: emojiType) =>
                addEmoji(emoji, watch, setValue)
              }
            />
          )}
          
        </div>
        <ChatSendInput
          type={type}
          hookForm={hookForm as UseFormReturn<sendMessageFormValues>}
        />
      </>
    );
  if (type === "direct")
    return (
      <>
        <div className="relative overflow-y-scroll h-dvh z-30">
          {directMessages &&
            directMessages?.map((message, i) => {
              const formattedDate = formatChatDate(message.createdAt);
              const shouldRenderDate = formattedDate !== lastRenderedDate;
              lastRenderedDate = formattedDate;
              return (
              <div
                key={i}
                ref={i === directMessages.length - 1 ? lastMessageRef : null}
              >
                {shouldRenderDate && <div className="flex justify-center sticky top-0 my-2 text-sm "><span className="bg-[#f4e9dd] px-3 py-2 font-medium font-poppins rounded-md">{formattedDate}</span></div>}
                <ChatItem
                  chat={message as dmType}
                  orient={
                    (message as dmType)?.sender?._id === userInfo._id &&
                    "reverse"
                  }
                />
              </div>
            )})}
            {isTyping &&
          typingUsers.map((user) => (
            <TypingIndicator typingUser={user} type={type} />
          ))}
        </div>
        <div className=" " ref={emojiRef}>
          {openEmojiMart && (
            <Picker
              previewPosition="none"
              onEmojiSelect={(emoji: emojiType) =>
                addEmoji(emoji, watch, setValue)
              }
            />
          )}
        </div>
        <ChatSendInput
          type={type}
          hookForm={hookForm as UseFormReturn<sendMessageFormValues>}
        />
        
      </>
    );
}

export default ChatboxList;
