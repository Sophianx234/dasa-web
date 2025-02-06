import { toggleChatMenu } from "@/features/slices/navSlice"
import { useAppDispatch } from "@/features/utils/hooks"
import { signupCredentialsExtended } from "@/services/apiServices"
import { Link } from "react-router-dom"

export type chatProfileProps = {
    user:signupCredentialsExtended
    text: string
}
function ChatProfile({user,text}:chatProfileProps) {
    
    const dispatch = useAppDispatch()
    return (
        <li className="border border-x-0 ">

        <Link onClick={()=>dispatch(toggleChatMenu())} to={`/dashboard/chat/${user._id}`}>
        <div className="grid grid-cols-[.5fr_2fr] py-2 content-center items-center">

        <div className="overflow-hidden w-16 rounded-full h-16   ">

        <img src={user.profileImage} alt="photo-25-2024-10-31-06-50-45" className=" " />
        </div>
        <div className="">

        <h1 className="font-mulish font-bold">{user.username}</h1>
        <p className="leading-">{text}</p>
        </div>
        </div>

    </Link>
        </li>
    )
}

export default ChatProfile
