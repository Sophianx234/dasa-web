import { toggleChatMenu } from "@/features/slices/navSlice"
import { useAppDispatch } from "@/features/utils/hooks"
import { Link } from "react-router-dom"

export type chatProfileProps = {
    profile: string,
    name: string,
    text: string
}
function ChatProfile({profile,name,text}:chatProfileProps) {
    
    const dispatch = useAppDispatch()
    return (
        <li>

        <Link onClick={()=>dispatch(toggleChatMenu())} to='/dashboard/anonymous/view'>
        <div className="grid grid-cols-[.5fr_2fr] content-center items-center">

        <div className="overflow-hidden w-16 rounded-full h-16   ">

        <img src={profile} alt="photo-25-2024-10-31-06-50-45" className=" " />
        </div>
        <div className="">

        <h1 className="font-mulish font-bold">{name}</h1>
        <p className="leading-">{text}</p>
        </div>
        </div>

    </Link>
        </li>
    )
}

export default ChatProfile
