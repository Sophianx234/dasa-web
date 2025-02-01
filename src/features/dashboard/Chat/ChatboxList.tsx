import { anonymousMessagesType, loadMessages } from "@/features/slices/userSlice";
import { useAppDispatch, useAppSelector, useGetAnonymous } from "@/features/utils/hooks";
import { anonymousResponse, signupCredentialsExtended, userType } from "@/services/apiServices";
import { useEffect, useRef } from "react";
import ChatItem from "./ChatItem";
import ChatSendInput from "./ChatSendInput";
import axios from "axios";
import { setUser } from "@/features/slices/navSlice";
import { isEmpty } from "@/features/utils/helpers";

function ChatboxList() {
  // const {data,isLoading} = useGetAnonymous()
  const API_URL = "http://localhost:8000/api/v1"
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
  const getUser = async() =>{
    const { data } = await axios.get(`${API_URL}/users/getme`);
  console.log("Data:", data);
  const {user} = data as userType
  dispatch(setUser(user)) // Process the data

  }
  const fetchMessages = async()=>{

    const { data } = await axios.get(
      `${API_URL}/messages/anonymous?field=messages`
    );
  if(data){
    const {anonymous:{messages}} = data as anonymousResponse
    // const textModified = messages.map(msg=>msg.content)
    if(messages){
      console.log('msg',messages)
      dispatch(loadMessages(messages))

    }
  }
}
console.log('userInfo',)
if(isEmpty(userInfo)){
  getUser()
}
fetchMessages()

},[])

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
 
 
  
    

  return (
    <>

    <div className="relative overflow-y-scroll h-dvh z-30">
      { messages && messages?.map((message, i) => (
        <div
        key={i}
        ref={i === messages.length - 1 ? lastMessageRef : null}>

        <ChatItem chat={message } orient={message.sender === userInfo._id  && "reverse"} />
        </div>
      ))}
    </div>
    <ChatSendInput/>
    
      </>
  );
}

export default ChatboxList;
