import { setUser } from "@/features/slices/navSlice"
import { loadAnonymousMessage } from "@/features/slices/userSlice"
import { isEmpty } from "@/features/utils/helpers"
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks"
import { anonymousResponse, API_URL, signupCredentialsExtended, userType } from "@/services/apiServices"
import axios from "axios"
import { useEffect, useRef } from "react"
import { useParams } from "react-router-dom"


export type useChatType ={
  type: "direct"|"channel"
}

export function useChat({type}:useChatType){
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
      `${API_URL}/messages/${type==='channel'? "anonymous": ''}`
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
if(isEmpty(userInfo)){
  getUser()
}
fetchAnonymousMessages()
fetchMessages()


},[])

return {userInfo,messages,lastMessageRef}


 
}