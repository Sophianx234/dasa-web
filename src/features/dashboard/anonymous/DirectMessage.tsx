import { API_URL, signupCredentialsExtended } from "@/services/apiServices"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ChatboxList from "../chat/ChatboxList"
import ChatHeader from "../chat/ChatHeader"
import WriteAnonymous from "./WriteAnonymous"
import { usersResponse } from "../chat/ChatMenu"

function ViewAnonymous() {
    const {id} = useParams()
    const [user,setUser] = useState<signupCredentialsExtended|null>(null)
    console.log(id)
    useEffect(()=>{
        async function getUserInfo(){
           const {data} = await axios.get(`${API_URL}/users/${id}`)
           if(data){
            const {user} = data as usersResponse
            setUser(user)
            
           }

        }
        getUserInfo()
    },[id])
    console.log('getUserInfo',user)
    return (
        <div>
            <WriteAnonymous>
            <ChatHeader user={user as signupCredentialsExtended} />
            <ChatboxList type="direct"/>
            </WriteAnonymous>
        </div>
    )
}

export default ViewAnonymous
