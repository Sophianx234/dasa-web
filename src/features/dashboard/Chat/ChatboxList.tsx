import { useChat } from "@/hooks/useChat";
import { dmType } from "@/services/apiServices";
import ChatItem from "./ChatItem";
import ChatSendInput, { sendMessageFormValues } from "./ChatSendInput";

import { setEmojiMart } from "@/features/slices/navSlice";
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks";
import { addEmoji, emojiType } from "@/hooks/addEmoji";
import Picker from '@emoji-mart/react';
import { useEffect, useRef } from "react";
import { useForm, UseFormReturn } from "react-hook-form";

type chatBoxListProps = {
  type: 'direct' |'channel'
}
function ChatboxList({type}:chatBoxListProps) {
  const {watch,setValue,...hookForm} =
    useForm<sendMessageFormValues>();
    const emojiRef = useRef<HTMLDivElement | null>(null)
    
  const dispatch = useAppDispatch()
  const {messages,userInfo,lastMessageRef,directMessages} = useChat({type})
  const {openEmojiMart} = useAppSelector(store=>store.nav)
  console.log('emojiMart',openEmojiMart)
  useEffect(() => {
    const handleOutsideClick = (event:MouseEvent) => {
      if (emojiRef.current && !emojiRef.current.contains(event.target as Node)) {
        dispatch(setEmojiMart(false))
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [emojiRef,dispatch]);

  console.log('direct', directMessages)
  if(type==='channel')
  return (
    <>

    <div className="relative overflow-y-scroll h-dvh z-30">
      { messages && messages?.map((message, i) =>
       (
        <div
        key={i}
        ref={i === messages.length - 1 ? lastMessageRef : null}>
          

        <ChatItem chat={message} orient={message.sender?._id === userInfo._id  && "reverse"} />
        </div>
      ))}
    </div>
    <div className="grid grid-cols-[.5fr_1fr] " ref={emojiRef}>
      {openEmojiMart && <Picker previewPosition='none' onEmojiSelect={(emoji:emojiType)=>addEmoji(emoji,watch,setValue)} />}
      </div>
    <ChatSendInput type={type} />
    
      </>
  );
  if(type==='direct')
    return (
      <>
  
      <div className="relative overflow-y-scroll h-dvh z-30">
        { directMessages && directMessages?.map((message, i) => (
          
          <div
          key={i}
          ref={i === directMessages.length - 1 ? lastMessageRef : null}>
  
          <ChatItem chat={message as dmType} orient={(message as dmType)?.sender?._id === userInfo._id  && "reverse"} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-[.5fr_1fr] " ref={emojiRef}>
      {openEmojiMart && <Picker previewPosition='none' onEmojiSelect={(emoji:emojiType)=>addEmoji(emoji,watch,setValue)} />}
      </div>
      <ChatSendInput type={type} hookForm={hookForm as UseFormReturn<sendMessageFormValues>} />
      
        </>
    );
}

export default ChatboxList;
