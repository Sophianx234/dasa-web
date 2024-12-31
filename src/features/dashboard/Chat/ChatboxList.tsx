import { useAppSelector } from "@/features/utils/hooks";
import { useEffect, useRef } from "react";
import ChatItem from "./ChatItem";
import ChatSendInput from "./ChatSendInput";

function ChatboxList() {
  const messages = useAppSelector(store=>store.user.anonymousMessages)
  const lastMessageRef = useRef(null);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  
  return (
    <>

    <div className="relative overflow-y-scroll h-dvh z-30">
      {messages.map((text, i) => (
        <div
        key={i}
        ref={i === messages.length - 1 ? lastMessageRef : null}>

        <ChatItem chat={text!} orient={i % 2 == 0 && "reverse"} />
        </div>
      ))}
    </div>
    <ChatSendInput/>
    
      </>
  );
}

export default ChatboxList;
