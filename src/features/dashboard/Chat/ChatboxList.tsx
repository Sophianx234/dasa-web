import { useChat } from "@/hooks/useChat";
import { dmType } from "@/services/apiServices";
import ChatItem from "./ChatItem";
import ChatSendInput, { sendMessageFormValues } from "./ChatSendInput";

import { useAppDispatch, useAppSelector } from "@/features/utils/hooks";
import Picker from '@emoji-mart/react';
import { addEmoji, emojiType } from "@/hooks/addEmoji";
import { useForm, UseFormReturn } from "react-hook-form";
import { closeEmojiMart, toggleOpenEmojiMart } from "@/features/slices/navSlice";

type chatBoxListProps = {
  type: 'direct' |'channel'
}
function ChatboxList({type}:chatBoxListProps) {
  const {watch,setValue,...hookForm} =
    useForm<sendMessageFormValues>();
    
  const dispatch = useAppDispatch()
  const {messages,userInfo,lastMessageRef,directMessages} = useChat({type})
  const {openEmojiMart} = useAppSelector(store=>store.nav)

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
      <div className="grid grid-cols-[.5fr_1fr] ">
        <div className=""></div>
      {openEmojiMart && <Picker onEmojiSelect={(emoji:emojiType)=>addEmoji(emoji,watch,setValue)} onClickOutside={()=>{
        console.log('damian')
        dispatch(toggleOpenEmojiMart(false))}} />}
      </div>
      <ChatSendInput type={type} hookForm={hookForm as UseFormReturn<sendMessageFormValues>} />
      
        </>
    );
}

export default ChatboxList;
