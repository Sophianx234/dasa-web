import { toggleChatMenu } from "@/features/slices/navSlice"
import { useAppDispatch } from "@/features/utils/hooks"
import { Link } from "react-router-dom"

function ChatProfile() {
    const dispatch = useAppDispatch()
    return (
        <Link onClick={()=>dispatch(toggleChatMenu())} to='/dashboard/anonymous/view'>

    </Link>
    )
}

export default ChatProfile
