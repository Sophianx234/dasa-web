import { setUser } from "@/features/slices/navSlice";
import { loadAnonymousMessage } from "@/features/slices/userSlice";
import { isEmpty } from "@/features/utils/helpers";
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks";
import { anonymousResponse, API_URL, signupCredentialsExtended, userType } from "@/services/apiServices";
import axios from "axios";
import { useEffect, useRef } from "react";
import ChatItem from "./ChatItem";
import ChatSendInput from "./ChatSendInput";
import { useParams } from "react-router-dom";

type chatBoxListProps = {
  type: 'direct' |'channel'
}
function ChatboxList({type}:chatBoxListProps) {
  // const {data,isLoading} = useGetAnonymous()
  // const API_URL = "http://localhost:8000/api/v1"
  // const API_URL = "https://dasa-api.onrender.com/api/v1"
  const dispatch = useAppDispatch()
  const {id:recipientId} = useParams()
  console.log('id',recipientId)
  
  const {anonymousMessages:messages} = useAppSelector(store=>store.user)
  const {user} = useAppSelector(store=>store.nav)
  const userInfo = user as signupCredentialsExtended
  const lastMessageRef = useRef<HTMLDivElement| null>(null);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  
useEffect(()=>{
  const getUser = async() =>{
  const { data } = await axios.get(`${API_URL}/users/getme`);
  console.log("Data:", data);
  const {user} = data as userType
  dispatch(setUser(user)) // Process the data

  }
  const fetchAnonymousMessages = async()=>{

    const { data } = await axios.get(
      `${API_URL}/messages/anonymous`
    );
  if(data){
    const {anonymous:{messages}} = data as anonymousResponse
    // const textModified = messages.map(msg=>msg.content)
    if(messages){
      console.log('msg',messages)
      dispatch(loadAnonymousMessage(messages))

    }
  }
}

const fetchMessages = async()=>{
  const {data} = await axios.get(`${API_URL}/messages/${userInfo._id}/${recipientId}`)
  if(data){
    console.log(data)

  }
}
console.log('userInfo',)
if(isEmpty(userInfo)){
  getUser()
}
fetchAnonymousMessages()
fetchMessages()


},[])

console.log(user)
console.log('messages: ',messages)


 
  
    

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
