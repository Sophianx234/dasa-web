import { FiSend } from "react-icons/fi";
import ChatItem from "./ChatItem";
import ChatMenu from "./ChatMenu";
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks";
import { sendMessage } from "@/features/slices/userSlice";
import { useForm } from "react-hook-form";
import { LuSendHorizonal } from "react-icons/lu";
import { useEffect, useRef } from "react";
import ChatSendInput from "./ChatSendInput";

function ChatboxList() {
  const dispatch = useAppDispatch()
  const messages = useAppSelector(store=>store.user.anonymousMessages)
  const lastMessageRef = useRef(null);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  
  return (
    <>

    <div className="relative overflow-y-scroll h-dvh z-30">
      {messages.map((text, i) => (
        <div
        key={i}
        ref={i === messages.length - 1 ? lastMessageRef : null}>

        <ChatItem chat={text} orient={i % 2 == 0 && "reverse"} />
        </div>
      ))}
    </div>
    <ChatSendInput/>
    
      </>
  );
}

export default ChatboxList;
