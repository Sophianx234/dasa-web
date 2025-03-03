import { useChat } from "@/hooks/useChat";
import ChatItem from "./ChatItem";
import ChatSendInput from "./ChatSendInput";

type chatBoxListProps = {
  type: 'direct' |'channel'
}
function ChatboxList({type}:chatBoxListProps) {
  const {messages,userInfo,lastMessageRef} = useChat({type})

  return (
    <>

    <div className="relative overflow-y-scroll h-dvh z-30">
      { messages && messages?.map((message, i) => (
        <div
        key={i}
        ref={i === messages.length - 1 ? lastMessageRef : null}>

        <ChatItem chat={message} orient={message.sender._id === userInfo._id  && "reverse"} />
        </div>
      ))}
    </div>
    <ChatSendInput/>
    
      </>
  );
}

export default ChatboxList;
