import { loadMessages } from "@/features/slices/userSlice";
import { useAppDispatch, useAppSelector, useGetAnonymous } from "@/features/utils/hooks";
import { anonymousResponse, signupCredentialsExtended } from "@/services/apiServices";
import { useEffect, useRef } from "react";
import ChatItem from "./ChatItem";
import ChatSendInput from "./ChatSendInput";

function ChatboxList() {
  const {data,isLoading} = useGetAnonymous()
  const dispatch = useAppDispatch()
  const {anonymousMessages:messages} = useAppSelector(store=>store.user)
  const {user} = useAppSelector(store=>store.nav)
  const userInfo = user as signupCredentialsExtended
  const lastMessageRef = useRef<HTMLDivElement| null>(null);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  /* 
  {
    "_id": "679a0add446db6269a09da62",
    "messageType": "text",
    "content": "Hello",
    "createdAt": "2025-01-29T11:02:53.074Z",
    "updatedAt": "2025-01-29T11:02:53.074Z",
    "__v": 0
}
     */
useEffect(()=>{
  if(data){
    const {anonymous:{messages}} = data as anonymousResponse
    // const textModified = messages.map(msg=>msg.content)
    if(messages){
      console.log('msg',messages)
      dispatch(loadMessages(messages))

    }
  }

},[dispatch,data])

console.log(messages)


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
 // console.log(data)
 
 
  
    
  if(isLoading) return <>loading</> 

  return (
    <>

    <div className="relative overflow-y-scroll h-dvh z-30">
      { messages && messages?.map((message, i) => (
        <div
        key={i}
        ref={i === messages.length - 1 ? lastMessageRef : null}>

        <ChatItem chat={message.content!} orient={message.sender === userInfo._id  && "reverse"} />
        </div>
      ))}
    </div>
    <ChatSendInput/>
    
      </>
  );
}

export default ChatboxList;
