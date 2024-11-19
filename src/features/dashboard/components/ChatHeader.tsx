import { FaArrowLeftLong, FaMasksTheater } from "react-icons/fa6"

function ChatHeader() {
    return (
        <div className="items-center  grid grid-cols-[1fr_2fr_1fr] justify-items-center border py-4 z-10 bg-white  sticky top-0  ">
            <FaArrowLeftLong className="size-7" />
            <div className="text-lg ">Anonymous</div>
            <FaMasksTheater className="size-8" />
          </div>
    )
}

export default ChatHeader
