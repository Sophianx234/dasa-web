import { useChat } from "@/hooks/useChat";
import ChatItem from "./ChatItem";
import ChatSendInput from "./ChatSendInput";
import { dmType } from "@/services/apiServices";

type chatBoxListProps = {
  type: 'direct' |'channel'
}
function ChatboxList({type}:chatBoxListProps) {
  const {messages,userInfo,lastMessageRef,directMessages} = useChat({type})
  console.log('direct', directMessages)
  console.log(directMessages[0]?.sender?._id)
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
    <ChatSendInput type={type}/>
    
      </>
  );
  if(type==='direct')
    return (
      <>
  
      <div className="relative overflow-y-scroll h-dvh z-30">
        { directMessages && directMessages?.map((message, i) => (
          
          <div
          key={i}
          ref={i === messages.length - 1 ? lastMessageRef : null}>
  
          <ChatItem chat={message as dmType} orient={(message as dmType)?.sender?._id === userInfo._id  && "reverse"} />
          </div>
        ))}
      </div>
      <ChatSendInput type={type}/>
      
        </>
    );
}

export default ChatboxList;
