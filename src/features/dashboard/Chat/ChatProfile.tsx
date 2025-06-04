import { toggleChatMenu } from "@/features/slices/navSlice"
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks"
import { API_URL, dmType, signupCredentialsExtended } from "@/services/apiServices"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export type chatProfileProps = {
    user:signupCredentialsExtended
}
function ChatProfile({user}:chatProfileProps) {
    const {user:userInfo} = useAppSelector(store=>store.nav)
    const [text,setText] = useState<string|null>(null)
    const [message,setMessage] = useState<dmType|null>(null)
    const {directMessages} = useAppSelector(store=>store.user)
useEffect(()=>{
    async function fetchRecentMessages(){

        const {data}= await axios.get(`${API_URL}/messages/${(userInfo as signupCredentialsExtended)._id}/${user._id}`)
        if(data as dmType){
            setMessage(data.message)
            setText(data.message.content)
            
        } 
    }
    fetchRecentMessages()

},[])
    
    const dispatch = useAppDispatch()
    return (
        <li className="border border-x-0 ">

        <Link onClick={()=>dispatch(toggleChatMenu())} to={`/dashboard/chat/${user._id}`}>
        <div className="grid grid-cols-[.5fr_2fr] py-2 content-center items-center">

        <div className="overflow-hidden w-16 rounded-full h-16   ">

        <img src={user.profileImage} alt="photo-25-2024-10-31-06-50-45" className=" " />
        </div>
        <div className="pl-2">

        <h1 className="font-mulish font-bold">{user.username}</h1>
        <p className="leading- italic">{message?.sender._id === (userInfo as signupCredentialsExtended)._id?'You: ':`${message?.sender.lastName || ''}: `}{text || ''}</p>
        </div>
        </div>

    </Link>
        </li>
    )
}

export default ChatProfile
