import { useAppDispatch, useAppSelector, useGetAnonymous } from "@/features/utils/hooks";
import { useEffect, useRef } from "react";
import ChatItem from "./ChatItem";
import ChatSendInput from "./ChatSendInput";
import { anonymousResponse, anonymousType, messagesType } from "@/services/apiServices";
import { loadMessages, sendMessage } from "@/features/slices/userSlice";

function ChatboxList() {
  const {data,isLoading,error} = useGetAnonymous()
  /* 
  {
    "status": "success",
    "anonymous": [
        {
            "_id": "6799daad6a28af6d73b2030c",
            "messages": [
                {
                    "_id": "6799f29ba549e452773af807",
                    "messageType": "text",
                    "content": "Hello bro ",
                    "createdAt": "2025-01-29T09:19:24.020Z",
                    "updatedAt": "2025-01-29T09:19:24.020Z",
                    "__v": 0
                }
            ]
        }
    ]
}
  */
  const dispatch = useAppDispatch()
  if(isLoading) <>loading</> 
  if(isLoading) <>err</> 
  console.log(data)
const {anonymous:{messages:texts}} = data as anonymousResponse
console.log('texts',texts)
// const  = anonymous as anonymousType
  // const {anonymous} = data as anonymousResponse
  // console.log('anoymous: ',anonymous)
  

  // const {anonymous} = data as anonymousResponse
  // console.log(anonymous)
  // 
  useEffect(()=>{
    if(data){
      dispatch(loadMessages(texts))

    }
  },[data,dispatch,texts])  

  const messages = useAppSelector(store=>store.user.anonymousMessages)
  const lastMessageRef = useRef<HTMLDivElement| null>(null);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  
  return (
    <>

    <div className="relative overflow-y-scroll h-dvh z-30">
      {messages?.map((text, i) => (
        <div
        key={i}
        ref={i === messages.length - 1 ? lastMessageRef : null}>

        <ChatItem chat={text.content!} orient={i % 2 == 0 && "reverse"} />
        </div>
      ))}
    </div>
    <ChatSendInput/>
    
      </>
  );
}

export default ChatboxList;
