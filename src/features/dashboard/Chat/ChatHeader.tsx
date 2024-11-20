import { toggleChatMenu } from "@/features/slices/navSlice"
import { useAppDispatch } from "@/features/utils/hooks"
import { FaArrowLeftLong, FaMasksTheater } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

function ChatHeader() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    return (
        <div className="items-center  grid grid-cols-[1fr_2fr_1fr] justify-items-center border py-4 z-10 bg-white  sticky top-0  ">
            <FaArrowLeftLong className="size-7" onClick={()=>navigate(-1)} />
            <div className="text-lg ">Anonymous</div>
            <FaMasksTheater className="size-8" onClick={()=>dispatch(toggleChatMenu())}/>
          </div>
    )
}

export default ChatHeader
