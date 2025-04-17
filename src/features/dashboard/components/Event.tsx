import { FaRegCalendar } from "react-icons/fa6"
import { MdOutlineLocationOn } from "react-icons/md"
import { eventI } from "./Events"
import { formatDate } from "@/features/utils/helpers"
import { IoTrashBinOutline } from "react-icons/io5"
type eventProps = {
    eventInfo: eventI
    type?: 'normal'|'control'
}
function Event({eventInfo,type ='normal'}:eventProps) {
    const date = formatDate(eventInfo.eventDate)
    return (
        <>

        <div className="grid grid-cols-1  border-dasalight border-2 mx-4 shadow-lg pb-6 rounded-lg">
            
            <div className="relative">
                <div>      {type ==='control'&&<IoTrashBinOutline onClick={()=>handleDeleteVideo(id as string)} className="size-8 bg-red-400 stroke-red-950 p-1 border-2 rounded-full  top-0 right-1 absolute"/>}
                </div>
            <img src={eventInfo.eventImage} alt="d-2" className=" w-full h-80 object-cover object-center"/>
            </div>
            <div className="space-y-2">
                    <p className="bg-dasadeep h-fit w-fit px-4 text-lg py-2 font-Montserrat font-semibold">latest</p>
                <h1 className=" gap-2 font-Montserrat font-semibold pl-2 text-lg">{eventInfo.title}</h1>
                <div className="space-y-2 pl-2 pb-2">
                    <p className="flex text-sm gap-2 font-Montserrat font-semibold items-center "> <FaRegCalendar className="size-6"/>{date}</p>
                    <p className="flex items-center  text-sm gap-1 font-poppins -translate-x-1 font-semibold"><MdOutlineLocationOn className="size-7"/> <span>{eventInfo.venue}</span></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Event

